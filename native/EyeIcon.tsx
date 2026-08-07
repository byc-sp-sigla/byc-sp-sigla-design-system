import Svg, { Circle, Line, Path } from 'react-native-svg';
import { color } from './theme';

/** Show/hide-password glyph. `web/Field.tsx` draws the same geometry as a plain `<svg>`. */
export function EyeIcon({ crossed, size = 18 }: { crossed: boolean; size?: number }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color.muted}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7Z" />
      <Circle cx={12} cy={12} r={3} />
      {crossed && <Line x1={4} y1={20} x2={20} y2={4} />}
    </Svg>
  );
}
