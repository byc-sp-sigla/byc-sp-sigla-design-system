import { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';
import { cn } from './cn';
import { Button } from './Button';

/**
 * A live-camera QR scanner for the web portals (admin-react, coa-react).
 *
 * Web counterpart of the citizen/merchant apps' `QrBox` display side — this is the READ side,
 * decoding whatever a phone screen shows rather than rendering a code. There is no native
 * equivalent to mirror because no Expo screen currently scans a camera-presented QR; this is a new
 * capability, not a port of one.
 *
 * `jsqr` is a small, dependency-free pure-JS decoder — declared as a real dependency of this
 * package (not a peer) since, unlike `react-native-qrcode-svg`, nothing about it is
 * platform-specific for the app that consumes it.
 *
 * Deliberately collapses to the same two states a caller must already handle without this
 * component: camera unavailable (permission denied, no device) surfaces as `error` so the caller's
 * existing manual-entry field stays the fallback, never a dead end.
 */

interface QrScannerProps {
  onDecode: (value: string) => void;
  /** Overrides the closed-state trigger button's label. */
  triggerLabel?: string;
  className?: string;
}

export function QrScanner({ onDecode, triggerLabel = 'Scan QR', className }: QrScannerProps) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!open) return;

    let cancelled = false;
    let stream: MediaStream | undefined;
    let frame: number | undefined;

    function tick(): void {
      if (cancelled) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video !== null && canvas !== null && video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');

        if (ctx !== null) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(image.data, image.width, image.height);

          if (code !== null && code.data.trim().length > 0) {
            onDecode(code.data.trim());
            setOpen(false);
            return;
          }
        }
      }

      frame = requestAnimationFrame(tick);
    }

    void (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        if (videoRef.current !== null) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
        tick();
      } catch {
        if (!cancelled) setError('Could not access the camera. Use the field below instead.');
      }
    })();

    return () => {
      cancelled = true;
      if (frame !== undefined) cancelAnimationFrame(frame);
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, [open, onDecode]);

  if (!open) {
    return (
      <Button
        label={triggerLabel}
        variant="default"
        className={className}
        onClick={() => {
          setError(undefined);
          setOpen(true);
        }}
      />
    );
  }

  return (
    <div className={cn('mt-2 rounded-sigla border border-sigla-line-strong bg-sigla-shell p-3', className)}>
      {error !== undefined ? (
        <>
          <p className="font-sigla text-sigla-hint text-sigla-card">{error}</p>
          <Button label="Close" onClick={() => setOpen(false)} />
        </>
      ) : (
        <>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption -- a live scan feed, not media content */}
          <video ref={videoRef} className="w-full rounded-sigla" muted playsInline />
          <canvas ref={canvasRef} className="hidden" />
          <p className="mt-2 font-sigla text-sigla-hint text-sigla-card">
            Point the camera at the merchant&apos;s QR code.
          </p>
          <Button label="Cancel scan" onClick={() => setOpen(false)} />
        </>
      )}
    </div>
  );
}
