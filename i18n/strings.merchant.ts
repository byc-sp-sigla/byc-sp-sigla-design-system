import type { Dictionary } from './types';

/**
 * Merchant Portal copy — US 1.11.
 *
 * Same two rules as `strings.citizen.ts`: text the API sends stays English (the backend has no
 * i18n), and product nouns residents already say in English — wallet, EC, QR, login, PIN, password,
 * barangay, permit — stay in English rather than being given a literal Filipino coinage.
 */
export const STRINGS_MERCHANT: Dictionary = {
  'landing.intro': {
    en: 'Create your Merchant account first. Accepting Ayuda EC redemptions and selling on the Marketplace are each their own separate application, applied for later from your account.',
    fil: 'Gawin muna ang iyong Merchant account. Ang pagtanggap ng Ayuda EC redemptions at ang pagbebenta sa Marketplace ay hiwalay na aplikasyon bawat isa, na maaari mong i-apply mamaya mula sa iyong account.',
  },
  'landing.registerCta': { en: 'Register as a Merchant', fil: 'Magparehistro bilang Merchant' },
  'landing.setupCta': {
    en: 'Approved? Set up your login',
    fil: 'Naaprubahan na? I-set up ang iyong login',
  },
  'login.subheading': {
    en: 'Log in with your registered contact number.',
    fil: 'Mag-login gamit ang iyong nakarehistrong numero ng contact.',
  },
  'login.contactLabel': { en: 'Contact Number', fil: 'Numero ng Contact' },
  'login.contactHint': {
    en: 'The number on your accreditation — 09XXXXXXXXX or +639XXXXXXXXX.',
    fil: 'Ang numerong nakarehistro sa akreditasyon — 09XXXXXXXXX o +639XXXXXXXXX.',
  },
  'login.switchLink': {
    en: 'New here? Register as a Merchant',
    fil: 'Bago dito? Magparehistro bilang Merchant',
  },
  'login.resumeSetupLink': {
    en: 'Approved? Resume setting up your login',
    fil: 'Naaprubahan na? Ituloy ang pag-set up ng iyong login',
  },
  'login.forgotFootnote': {
    en: 'Forgot your password? Contact the LGU settlement office.',
    fil: 'Nakalimutan ang password? Makipag-ugnayan sa LGU settlement office.',
  },

  'unlock.pinLabel': { en: 'Your 4-digit merchant PIN', fil: 'Ang iyong 4-digit na merchant PIN' },

  // ── Hub and home ────────────────────────────────────────────────────────
  'app.name': { en: 'SIGLA Merchant', fil: 'SIGLA Merchant' },
  'hub.loadError': {
    en: 'Could not load your account.',
    fil: 'Hindi ma-load ang iyong account.',
  },
  'hub.intro': {
    en: 'Your registration only created this account. Each app below is its own separate application — apply and get accredited/approved for one, both, or neither.',
    fil: 'Ang iyong rehistrasyon ay gumawa lang ng account na ito. Ang bawat app sa ibaba ay hiwalay na aplikasyon — mag-apply at maakredita para sa isa, sa dalawa, o wala man.',
  },
  'hub.ayuda': { en: 'Ayuda', fil: 'Ayuda' },
  'hub.ayudaApproved': {
    en: 'Scan customer QR, settle unsettled EC',
    fil: 'I-scan ang QR ng customer, i-settle ang hindi pa nababayarang EC',
  },
  'hub.ayudaApply': {
    en: 'Apply for Ayuda EC accreditation',
    fil: 'Mag-apply para sa akreditasyon sa Ayuda EC',
  },
  'hub.marketplace': { en: 'Marketplace', fil: 'Marketplace' },
  'hub.marketplaceSub': {
    en: 'List products, fulfill orders, get paid',
    fil: 'Maglista ng produkto, tapusin ang mga order, mabayaran',
  },

  'home.sessionError': {
    en: 'Could not load your session.',
    fil: 'Hindi ma-load ang iyong session.',
  },
  'home.signedIn': { en: 'You are signed in.', fil: 'Naka-sign in ka.' },
  'home.slice': {
    en: 'Login, PIN unlock and the counter are working. Settlement is the next slice.',
    fil: 'Gumagana na ang login, PIN unlock at ang counter. Ang settlement ang susunod.',
  },
  'home.tabPalitan': { en: 'Palitan', fil: 'Palitan' },
  'home.tabSettlement': { en: 'Settlement', fil: 'Settlement' },
  'home.settlementSoon': {
    en: 'Settlement — coming soon',
    fil: 'Settlement — malapit nang dumating',
  },
  'home.sectionTrading': { en: 'Trading', fil: 'Pagtitinda' },
  'home.counter': { en: 'Counter', fil: 'Counter' },
  'home.counterSub': {
    en: 'Take a customer’s EC — scan, check, seal',
    fil: 'Tanggapin ang EC ng customer — i-scan, suriin, tapusin',
  },
  'home.sectionStore': { en: 'My store', fil: 'Aking tindahan' },
  'home.goods': { en: 'Goods I Sell', fil: 'Mga Paninda Ko' },
  'home.goodsSub': {
    en: 'Choose what customers can buy with EC',
    fil: 'Piliin kung ano ang mabibili ng customer gamit ang EC',
  },
  'home.sectionSession': { en: 'Session', fil: 'Session' },
  'home.sessionLoading': {
    en: 'Loading your session…',
    fil: 'Naglo-load ang iyong session…',
  },
  'home.account': { en: 'Account', fil: 'Account' },
  'home.barangay': { en: 'Barangay', fil: 'Barangay' },
  'home.status': { en: 'Status', fil: 'Katayuan' },
  'home.unlock': { en: 'Unlock', fil: 'Unlock' },
  'home.passwordDue': { en: 'Password due', fil: 'Takdang password' },
  'home.signOutNote': {
    en: 'Signing out forgets this device. Your password is needed again next time.',
    fil: 'Kapag nag-sign out, makakalimutan ang device na ito. Kakailanganin ulit ang password sa susunod.',
  },

  // ── Registration (US 2.01) ──────────────────────────────────────────────
  'register.title': { en: 'Register', fil: 'Magparehistro' },
  'register.registered': {
    en: 'Registered! Continue setting up your login to start using your account.',
    fil: 'Nakarehistro na! Ituloy ang pag-set up ng iyong login para magamit na ang account.',
  },
  'register.continueSetup': {
    en: 'Continue setting up your login',
    fil: 'Ituloy ang pag-set up ng iyong login',
  },
  'register.intro': {
    en: 'This creates your account only — no review needed. Accepting Ayuda EC redemptions is a separate application you apply for later, from your account.',
    fil: 'Gumagawa lang ito ng iyong account — walang pagsusuring kailangan. Ang pagtanggap ng Ayuda EC redemptions ay hiwalay na aplikasyon na iyong i-a-apply mamaya mula sa iyong account.',
  },
  'register.storeName': { en: 'Store Name', fil: 'Pangalan ng Tindahan' },
  'register.ownerName': {
    en: 'Owner / Contact Full Name',
    fil: 'Buong Pangalan ng May-ari / Contact',
  },
  'register.contactNumber': { en: 'Contact Number', fil: 'Numero ng Contact' },
  'register.contactHint': {
    en: 'Your primary identifier. One number may back one Merchant account and, separately, one Citizen account.',
    fil: 'Ito ang iyong pangunahing pagkakakilanlan. Ang isang numero ay puwede sa isang Merchant account at, hiwalay dito, sa isang Citizen account.',
  },
  'register.emailAddress': { en: 'Email Address (optional)', fil: 'Email Address (opsyonal)' },
  'register.storeBarangay': {
    en: 'Store Address (Barangay)',
    fil: 'Address ng Tindahan (Barangay)',
  },
  'register.submit': { en: 'Submit Registration', fil: 'Isumite ang Rehistrasyon' },
  'register.haveAccount': {
    en: 'Already have an account? Log In',
    fil: 'May account ka na? Mag-login',
  },
  'register.rateLimited': {
    en: 'Too many attempts from this connection. Please wait about an hour and try again.',
    fil: 'Masyadong maraming pagsubok mula sa koneksyong ito. Maghintay ng humigit-kumulang isang oras at subukan muli.',
  },

  // ── Credential setup (US 2.03) ──────────────────────────────────────────
  'credentialSetup.title': { en: 'Set up login', fil: 'I-set up ang login' },
  'credentialSetup.registered': {
    en: 'Registered! Set up your login to continue.',
    fil: 'Nakarehistro na! I-set up ang iyong login para magpatuloy.',
  },
  'credentialSetup.username': {
    en: 'Contact Number (your username)',
    fil: 'Numero ng Contact (ito ang iyong username)',
  },
  'credentialSetup.phoneHint': {
    en: 'The contact number from your merchant registration.',
    fil: 'Ang numero ng contact mula sa iyong rehistrasyon bilang merchant.',
  },
  'credentialSetup.invalidCode': {
    en: 'That contact number or setup code is not valid.',
    fil: 'Hindi balido ang numero ng contact o setup code na iyan.',
  },
  'credentialSetup.setupCode': { en: 'Setup Code', fil: 'Setup Code' },
  'credentialSetup.setupCodePlaceholder': { en: '6-digit code', fil: '6-digit na code' },
  'credentialSetup.setupCodeHint': {
    en: 'Sent by SMS to your contact number.',
    fil: 'Ipinadala sa SMS sa iyong numero ng contact.',
  },
  'credentialSetup.passwordSection': { en: 'Password', fil: 'Password' },
  'credentialSetup.newPassword': { en: 'New Password', fil: 'Bagong Password' },
  'credentialSetup.passwordRule': {
    en: '8+ characters · 1 uppercase · 1 number · 1 special character',
    fil: '8+ na karakter · 1 malaking letra · 1 numero · 1 espesyal na karakter',
  },
  'credentialSetup.confirmPassword': { en: 'Confirm Password', fil: 'Kumpirmahin ang Password' },
  'credentialSetup.pinSection': { en: '4-Digit PIN', fil: '4-Digit na PIN' },
  'credentialSetup.pin': { en: 'PIN', fil: 'PIN' },
  'credentialSetup.confirmPin': { en: 'Confirm PIN', fil: 'Kumpirmahin ang PIN' },
  'credentialSetup.submit': { en: 'Set Up Login', fil: 'I-set Up ang Login' },
  'credentialSetup.passwordsMismatch': {
    en: 'The two passwords do not match.',
    fil: 'Hindi magkatugma ang dalawang password.',
  },
  'credentialSetup.pinLength': {
    en: 'Your PIN must be exactly 4 digits.',
    fil: 'Dapat eksaktong 4 na digit ang iyong PIN.',
  },
  'credentialSetup.pinsMismatch': {
    en: 'The two PINs do not match.',
    fil: 'Hindi magkatugma ang dalawang PIN.',
  },
  'credentialSetup.rateLimited': {
    en: 'Too many attempts. Please wait and try again.',
    fil: 'Masyadong maraming pagsubok. Maghintay muna at subukan muli.',
  },

  // ── Ayuda EC accreditation (US 2.02) ────────────────────────────────────
  'apply.title': { en: 'Apply', fil: 'Mag-apply' },
  'apply.accreditationTitle': {
    en: 'Ayuda EC Accreditation',
    fil: 'Akreditasyon sa Ayuda EC',
  },
  'apply.received': {
    en: 'Application received for {store}. A Settlement Verifier and Supervisor will review it — you’ll get an SMS once a decision is made.',
    fil: 'Natanggap ang aplikasyon para sa {store}. Susuriin ito ng Settlement Verifier at Supervisor — makakatanggap ka ng SMS kapag may desisyon na.',
  },
  'apply.backToHub': { en: 'Back to Hub', fil: 'Bumalik sa Hub' },
  'apply.intro': {
    en: 'Applying from your Merchant registration — your store details are not re-entered here.',
    fil: 'Nag-a-apply mula sa iyong Merchant registration — hindi na uulitin dito ang detalye ng iyong tindahan.',
  },
  'apply.catalogError': {
    en: 'Could not load the catalog.',
    fil: 'Hindi ma-load ang katalogo.',
  },
  'apply.goodsSold': { en: 'Goods Sold', fil: 'Mga Pinagbibiling Paninda' },
  'apply.catalogLoading': { en: 'Loading the catalog…', fil: 'Naglo-load ang katalogo…' },
  'apply.alwaysAvailable': { en: '{good} — always available', fil: '{good} — laging available' },
  'apply.documents': { en: 'Documents', fil: 'Mga Dokumento' },
  'apply.documentsHint': {
    en: 'Business Permit or Barangay Business Clearance.',
    fil: 'Business Permit o Barangay Business Clearance.',
  },
  'apply.needPermit': {
    en: 'Capture your business permit above before submitting.',
    fil: 'Kunan muna ng larawan ang iyong business permit sa itaas bago isumite.',
  },
  'apply.needGood': {
    en: 'Choose at least one good you sell before submitting.',
    fil: 'Pumili ng kahit isang paninda na iyong ibinebenta bago isumite.',
  },
  'apply.submit': { en: 'Submit Application', fil: 'Isumite ang Aplikasyon' },
  'apply.rateLimited': {
    en: 'Too many attempts. Please wait and try again.',
    fil: 'Masyadong maraming pagsubok. Maghintay muna at subukan muli.',
  },

  // ── Counter (US 6.02) — the busiest screen in the app ───────────────────
  'counter.titlePalitan': { en: 'Palitan', fil: 'Palitan' },
  'counter.titleScanning': { en: 'Scanning', fil: 'Nag-i-scan' },
  'counter.titleEnterCode': { en: 'Enter code', fil: 'Ilagay ang code' },
  'counter.titleWhatBuying': { en: 'What are they buying?', fil: 'Ano ang binibili nila?' },
  'counter.titleTicketFound': { en: 'Ticket found', fil: 'Nahanap ang ticket' },
  'counter.titleCustomerPin': { en: 'Customer PIN', fil: 'PIN ng customer' },
  'counter.titleSealed': { en: 'Sale sealed', fil: 'Tapos na ang benta' },
  'counter.tabPalitan': { en: 'Palitan', fil: 'Palitan' },
  'counter.tabSettlement': { en: 'Settlement', fil: 'Settlement' },

  'counter.scanPrompt': { en: 'Scan the customer’s QR', fil: 'I-scan ang QR ng customer' },
  'counter.scanSub': { en: 'ID card or claim ticket', fil: 'ID card o claim ticket' },
  'counter.openScanner': { en: 'Open scanner', fil: 'Buksan ang scanner' },
  'counter.idleNote': {
    en: 'Redemptions are billed to the LGU — never the customer.\n72 hours with no heartbeat = automatic lock.',
    fil: 'Sa LGU siningil ang mga redemption — hindi kailanman sa customer.\n72 oras na walang heartbeat = awtomatikong lock.',
  },
  'counter.goodsLink': { en: 'Goods I Sell', fil: 'Mga Paninda Ko' },
  'counter.reading': { en: 'Reading…', fil: 'Binabasa…' },
  'counter.scanningForQr': { en: 'Scanning for QR…', fil: 'Naghahanap ng QR…' },
  'counter.cameraOff': { en: 'Camera access is off', fil: 'Naka-off ang camera access' },
  'counter.cameraChecking': { en: 'Checking the camera…', fil: 'Sinusuri ang camera…' },
  'counter.cameraAskAgain': {
    en: 'SIGLA needs the camera to read a customer’s QR. Allow camera access when prompted, then try again.',
    fil: 'Kailangan ng SIGLA ang camera para mabasa ang QR ng customer. Payagan ang camera access kapag tinanong, tapos subukan muli.',
  },
  'counter.cameraSettings': {
    en: 'SIGLA needs the camera to read a customer’s QR. Enable it for this app in your device Settings, then come back here — or enter the code by hand.',
    fil: 'Kailangan ng SIGLA ang camera para mabasa ang QR ng customer. Paganahin ito para sa app na ito sa Settings ng iyong device, tapos bumalik dito — o ilagay ang code nang manu-mano.',
  },
  'counter.readingCode': { en: 'Reading that code…', fil: 'Binabasa ang code na iyon…' },
  'counter.aimHint': {
    en: 'Point the camera at the customer’s Claim Ticket or ID QR.',
    fil: 'Itutok ang camera sa Claim Ticket o ID QR ng customer.',
  },
  'counter.enterManually': { en: 'Enter code manually', fil: 'Ilagay ang code nang manu-mano' },
  'counter.enterTheCode': { en: 'Enter the code', fil: 'Ilagay ang code' },
  'counter.kindTicket': { en: 'Claim ticket', fil: 'Claim ticket' },
  'counter.kindId': { en: 'SIGLA ID', fil: 'SIGLA ID' },
  'counter.ticketCodeLabel': { en: 'Claim ticket code', fil: 'Code ng claim ticket' },
  'counter.idCodeLabel': { en: 'SIGLA ID code', fil: 'Code ng SIGLA ID' },
  'counter.idCodePlaceholder': { en: 'Paste the ID QR code', fil: 'I-paste ang ID QR code' },
  'counter.ticketCodeHint': {
    en: 'Type the code printed under the customer’s claim ticket QR.',
    fil: 'I-type ang code na nakalimbag sa ilalim ng QR ng claim ticket ng customer.',
  },
  'counter.idCodeHint': {
    en: 'Paste the customer’s SIGLA ID QR code. You will enter the item on the next step.',
    fil: 'I-paste ang SIGLA ID QR code ng customer. Ilalagay mo ang item sa susunod na hakbang.',
  },
  'counter.openCounter': { en: 'Open counter', fil: 'Buksan ang counter' },
  'counter.backToScanner': { en: 'Back to scanner', fil: 'Bumalik sa scanner' },

  'counter.declaredNote': {
    en: 'Only goods you have declared appear here. An item you have not declared is refused at the end of the sale, after the customer has already typed their PIN.',
    fil: 'Ang mga idineklara mo lang na paninda ang lumalabas dito. Ang hindi idineklarang item ay tinatanggihan sa dulo ng benta, matapos nang mag-type ng PIN ang customer.',
  },
  'counter.goodsLoading': { en: 'Loading your goods…', fil: 'Naglo-load ang iyong mga paninda…' },
  'counter.noGoods': {
    en: 'You have not declared any goods yet. Open Goods I Sell from the home screen first.',
    fil: 'Wala ka pang idineklarang paninda. Buksan muna ang Mga Paninda Ko mula sa home screen.',
  },
  'counter.itemLabel': { en: 'Item', fil: 'Item' },
  'counter.itemOption': { en: '{good} — {price} each', fil: '{good} — {price} bawat isa' },
  'counter.itemPlaceholder': { en: 'Choose an item…', fil: 'Pumili ng item…' },
  'counter.quantity': { en: 'Quantity', fil: 'Dami' },
  'counter.itemTotal': { en: 'Total {total}', fil: 'Kabuuan {total}' },
  'counter.addItem': { en: 'Add item', fil: 'Idagdag ang item' },
  'counter.cancelSale': { en: 'Cancel sale', fil: 'Kanselahin ang benta' },
  'counter.couldNotAddItem': {
    en: 'Could not add that item.',
    fil: 'Hindi maidagdag ang item na iyon.',
  },
  'counter.goodsLoadError': {
    en: 'Could not load your goods.',
    fil: 'Hindi ma-load ang iyong mga paninda.',
  },
  'counter.scanFailed': {
    en: 'Could not read that code. Scan it again.',
    fil: 'Hindi mabasa ang code na iyon. I-scan muli.',
  },

  'counter.registryPhoto': {
    en: 'Registry photo of {name}',
    fil: 'Larawan ni {name} mula sa registry',
  },
  'counter.photoUnavailable': { en: 'Photo unavailable', fil: 'Walang available na larawan' },
  'counter.photoUnavailableBody': {
    en: 'Ask for a physical ID and check the details below against it.',
    fil: 'Humingi ng pisikal na ID at itapat ang mga detalye sa ibaba dito.',
  },
  'counter.ticketItem': { en: 'Item', fil: 'Item' },
  'counter.ticketPrice': { en: 'Price', fil: 'Presyo' },
  'counter.ticketExpires': { en: 'Ticket expires', fil: 'Mag-e-expire ang ticket' },
  'counter.compareFace': {
    en: 'Compare the customer’s face against their ID photo above.',
    fil: 'Ihambing ang mukha ng customer sa larawan sa ID sa itaas.',
  },
  'counter.faceNoMatch': { en: 'Doesn’t match', fil: 'Hindi tugma' },
  'counter.faceMatches': { en: 'Matches', fil: 'Tugma' },
  'counter.faceDeclined': {
    en: 'Sale cancelled — the face did not match. Scan again to start over. Nothing was charged.',
    fil: 'Kinansela ang benta — hindi tugma ang mukha. Mag-scan ulit para magsimula muli. Walang siningil.',
  },
  'counter.faceDecisionFailed': {
    en: 'Could not record that decision. Try again.',
    fil: 'Hindi maitala ang desisyong iyon. Subukan muli.',
  },

  'counter.handoff': {
    en: 'Hand the device to the customer',
    fil: 'Iabot ang device sa customer',
  },
  'counter.handoffHintOne': {
    en: 'Ask them to enter their 4-digit PIN (1 attempt left)',
    fil: 'Pakiusapan silang ilagay ang kanilang 4-digit na PIN (1 pagsubok na lang)',
  },
  'counter.handoffHintMany': {
    en: 'Ask them to enter their 4-digit PIN ({attempts} attempts left)',
    fil: 'Pakiusapan silang ilagay ang kanilang 4-digit na PIN ({attempts} pagsubok na lang)',
  },
  'counter.customerPin': { en: 'Customer PIN', fil: 'PIN ng customer' },
  'counter.seal': { en: 'Seal sale', fil: 'Tapusin ang benta' },
  'counter.cancelled': {
    en: 'Sale cancelled. Nothing was charged.',
    fil: 'Kinansela ang benta. Walang siningil.',
  },

  'counter.redemptionId': { en: 'REDEMPTION ID', fil: 'REDEMPTION ID' },
  'counter.sealedBadge': { en: 'Sealed', fil: 'Tapos na' },
  'counter.receiptNote': {
    en: '5-minute void window is open. This EC is recorded as unsettled; you will be paid {payout} at your next settlement visit.',
    fil: 'Bukas ang 5-minutong void window. Naitala ang EC na ito bilang hindi pa nababayaran; babayaran ka ng {payout} sa susunod mong settlement.',
  },
  'counter.receiptNoteWithRate': {
    en: '5-minute void window is open. This EC is recorded as unsettled; you will be paid {payout} at your next settlement visit, at {rate} centavos per EC.',
    fil: 'Bukas ang 5-minutong void window. Naitala ang EC na ito bilang hindi pa nababayaran; babayaran ka ng {payout} sa susunod mong settlement, sa {rate} sentimo bawat EC.',
  },
  'counter.void': { en: 'Void sale', fil: 'Ibasura ang benta' },
  'counter.done': { en: 'Done', fil: 'Tapos na' },
  'counter.voidTitle': { en: 'Void this sale', fil: 'Ibasura ang bentang ito' },
  'counter.voidReason': { en: 'Reason', fil: 'Dahilan' },
  'counter.voidReasonPlaceholder': {
    en: 'e.g. wrong quantity keyed in',
    fil: 'hal. maling dami ang na-type',
  },
  'counter.voidReasonHint': {
    en: 'Required. A reversal of public money with no stated cause cannot be audited.',
    fil: 'Kailangan ito. Hindi maio-audit ang pagbawi ng pondong publiko na walang nakasaad na dahilan.',
  },
  'counter.voidDone': {
    en: 'Sale reversed. The EC is back in the customer’s wallet and you will not be paid for it.',
    fil: 'Naibalik ang benta. Nasa wallet na ulit ng customer ang EC at hindi ka babayaran para dito.',
  },
  'counter.voidUnknown': {
    en: 'That reversal did not come back, so it may still have gone through. Check Today’s sales below — if the sale is not marked Reversed, press Reverse the sale again. Retrying cannot refund twice.',
    fil: 'Hindi bumalik ang pagbawing iyon, kaya maaaring natuloy pa rin ito. Tingnan ang Benta ngayong araw sa ibaba — kung hindi nakamarkang Naibalik ang benta, pindutin muli ang Ibalik ang benta. Hindi makakapag-refund nang dalawang beses ang pag-ulit.',
  },
  'counter.voidFailed': {
    en: 'Could not reverse that sale.',
    fil: 'Hindi maibalik ang bentang iyon.',
  },
  'counter.reverseSale': { en: 'Reverse this sale', fil: 'Ibalik ang bentang ito' },
  'counter.reversedBadge': { en: 'Reversed', fil: 'Naibalik' },

  'counter.todaysSales': { en: 'Today’s sales', fil: 'Benta ngayong araw' },
  'counter.salesLoading': {
    en: 'Loading today’s sales…',
    fil: 'Naglo-load ang benta ngayong araw…',
  },
  'counter.noSales': { en: 'No sales yet today.', fil: 'Wala pang benta ngayong araw.' },
  'counter.saleLine': { en: '{good} × {qty}', fil: '{good} × {qty}' },
  'counter.saleSub': {
    en: '{time} · {ec} · you are owed {payout}',
    fil: '{time} · {ec} · may utang sa iyo na {payout}',
  },
  'settlementState.unsettled': { en: 'Unpaid', fil: 'Hindi pa bayad' },
  'settlementState.batched': { en: 'In review', fil: 'Sinusuri' },
  'settlementState.settled': { en: 'Paid', fil: 'Bayad na' },

  // ── Refusals the counter has to explain, not just report ────────────────
  'counter.sealUnknownError': {
    en: 'Something went wrong. Press Seal sale again.',
    fil: 'May naganap na problema. Pindutin muli ang Tapusin ang benta.',
  },
  'counter.pinIncorrect': {
    en: 'That PIN is not correct. Ask the customer to try again.',
    fil: 'Mali ang PIN na iyan. Pakiusapan ang customer na subukan muli.',
  },
  'counter.pinIncorrectOne': {
    en: 'That PIN is not correct. 1 attempt left before their account locks. Hand the device back and let them retype it.',
    fil: 'Mali ang PIN na iyan. 1 pagsubok na lang bago mag-lock ang kanilang account. Iabot muli ang device at hayaan silang mag-type ulit.',
  },
  'counter.pinIncorrectMany': {
    en: 'That PIN is not correct. {attempts} attempts left before their account locks. Hand the device back and let them retype it.',
    fil: 'Mali ang PIN na iyan. {attempts} pagsubok na lang bago mag-lock ang kanilang account. Iabot muli ang device at hayaan silang mag-type ulit.',
  },
  'counter.pinLocked': {
    en: 'Too many incorrect PIN attempts. This customer must wait for the cooldown, then present the same ticket again.',
    fil: 'Masyadong maraming maling PIN. Kailangang maghintay ng customer na matapos ang cooldown, tapos ipakita muli ang parehong ticket.',
  },
  'counter.pinLockedUntil': {
    en: 'Too many incorrect PIN attempts. This customer’s PIN unlocks at {when}. Their claim ticket is still valid — they can present it again after that.',
    fil: 'Masyadong maraming maling PIN. Mag-a-unlock ang PIN ng customer na ito sa {when}. Balido pa rin ang kanilang claim ticket — puwede nila itong ipakita muli pagkatapos noon.',
  },
  'counter.ticketExpired': {
    en: 'This claim ticket has expired. Ask the customer to generate a new one in their SIGLA app — there is no override.',
    fil: 'Nag-expire na ang claim ticket na ito. Pakiusapan ang customer na gumawa ng bago sa kanilang SIGLA app — walang puwedeng i-override.',
  },
  'counter.ticketUsed': {
    en: 'This ticket has already been redeemed. Check Today’s sales below before charging again — it may be yours.',
    fil: 'Nagamit na ang ticket na ito. Tingnan muna ang Benta ngayong araw sa ibaba bago maningil ulit — baka sa iyo rin ito.',
  },
  'counter.goodNotDeclared': {
    en: 'You have not declared this item, so you cannot accept EC for it. Add it in Goods I Sell, then scan again.',
    fil: 'Hindi mo idineklara ang item na ito, kaya hindi ka puwedeng tumanggap ng EC para dito. Idagdag ito sa Mga Paninda Ko, tapos mag-scan muli.',
  },
  'counter.goodNotEligible': {
    en: 'This item is no longer on the EC catalog. The customer can pay cash, or generate a ticket for a different item.',
    fil: 'Wala na ang item na ito sa katalogo ng EC. Puwedeng magbayad ng cash ang customer, o gumawa ng ticket para sa ibang item.',
  },
  'counter.weeklyLimit': {
    en: 'This customer has reached their weekly limit for this item.',
    fil: 'Naabot na ng customer na ito ang lingguhang limitasyon para sa item na ito.',
  },
  'counter.weeklyLimitResets': {
    en: 'This customer has reached their weekly limit for this item. It resets on {when}.',
    fil: 'Naabot na ng customer na ito ang lingguhang limitasyon para sa item na ito. Magre-reset ito sa {when}.',
  },
  'counter.insufficientEc': {
    en: 'The customer does not have enough EC for this ticket.',
    fil: 'Kulang ang EC ng customer para sa ticket na ito.',
  },
  'counter.insufficientEcAmount': {
    en: 'The customer has {available} — not enough for this ticket. They can generate a smaller ticket, or pay the difference in cash.',
    fil: 'May {available} ang customer — kulang para sa ticket na ito. Puwede silang gumawa ng mas maliit na ticket, o bayaran ang kulang sa cash.',
  },
  'counter.sealUnknownOutcome': {
    en: 'That attempt did not come back. Wait a moment, ask the customer to retype their PIN, and press Seal sale again — retrying cannot charge them twice. Do NOT start a new sale.',
    fil: 'Hindi bumalik ang pagsubok na iyon. Maghintay sandali, pakiusapan ang customer na i-type muli ang PIN, tapos pindutin muli ang Tapusin ang benta — hindi makakasingil nang dalawang beses ang pag-ulit. HUWAG magsimula ng bagong benta.',
  },
  'counter.sealDefault': {
    en: '{message} If nothing appears in Today’s sales, press Seal sale again — the retry cannot charge twice.',
    fil: '{message} Kung walang lumabas sa Benta ngayong araw, pindutin muli ang Tapusin ang benta — hindi makakasingil nang dalawang beses ang pag-ulit.',
  },
  'counter.lockdown': {
    en: 'EC redemption is paused for the COMELEC election period. Nothing you do here will lift it — cash sales are unaffected.',
    fil: 'Nakahinto ang EC redemption dahil sa panahon ng eleksyon ng COMELEC. Walang magagawa dito para maalis ito — hindi apektado ang benta na cash.',
  },
  'counter.idSuspended': {
    en: 'This SIGLA ID is suspended, so it cannot be used to pay. Their balance is safe — send them to the LGU office. Nothing was charged.',
    fil: 'Suspendido ang SIGLA ID na ito, kaya hindi ito puwedeng ipambayad. Ligtas ang kanilang balanse — papuntahin sila sa LGU office. Walang siningil.',
  },
  'counter.merchantSuspended': {
    en: 'Your store’s accreditation is suspended, so you cannot accept EC. Contact the LGU office. Nothing was charged.',
    fil: 'Suspendido ang akreditasyon ng iyong tindahan, kaya hindi ka puwedeng tumanggap ng EC. Makipag-ugnayan sa LGU office. Walang siningil.',
  },
  'counter.voidWindowExpired': {
    en: 'The reversal window for this sale has closed. Raise it at your next settlement visit — the Settlement Verifier can hold the line item for review.',
    fil: 'Sarado na ang window para ibalik ang bentang ito. Ibangon ito sa susunod mong settlement — puwedeng i-hold ng Settlement Verifier ang linyang ito para suriin.',
  },
  'counter.alreadyClosed': {
    en: 'This sale can no longer be reversed — it is already reversed, or already in a settlement batch.',
    fil: 'Hindi na maibabalik ang bentang ito — naibalik na ito, o nasa settlement batch na.',
  },
  'counter.goodNotEligibleShort': {
    en: 'That item is no longer on the EC catalog. Choose another, or take cash for it.',
    fil: 'Wala na ang item na iyon sa katalogo ng EC. Pumili ng iba, o tumanggap ng cash para dito.',
  },
  'counter.networkUnavailable': {
    en: 'Cannot reach SIGLA. Check your connection and try again — nothing has been charged.',
    fil: 'Hindi maabot ang SIGLA. Suriin ang iyong koneksyon at subukan muli — walang siningil.',
  },

  // ── Ayuda gate (pre-accreditation) ──────────────────────────────────────
  'ayuda.title': { en: 'Palitan', fil: 'Palitan' },
  'ayuda.headTitle': { en: 'Ayuda', fil: 'Ayuda' },
  'ayuda.settlementLocked': {
    en: 'Settlement locked — accreditation pending',
    fil: 'Naka-lock ang settlement — hinihintay ang akreditasyon',
  },
  'ayuda.underReview': {
    en: 'Application under review by a Settlement Verifier and Settlement Supervisor.',
    fil: 'Sinusuri ang aplikasyon ng Settlement Verifier at Settlement Supervisor.',
  },
  'ayuda.underReviewHint': {
    en: 'Settlement opens once your accreditation is approved. Nothing to do here until then.',
    fil: 'Bubukas ang settlement kapag aprubado na ang iyong akreditasyon. Wala munang magagawa dito hanggang doon.',
  },
  'ayuda.declined': {
    en: 'Your Ayuda EC accreditation was declined. You may apply again.',
    fil: 'Tinanggihan ang iyong akreditasyon sa Ayuda EC. Puwede kang mag-apply muli.',
  },
  'ayuda.notAccredited': {
    en: 'Not accredited for Ayuda EC settlement yet.',
    fil: 'Hindi pa akreditado para sa settlement ng Ayuda EC.',
  },
  'ayuda.pitch': {
    en: 'Apply separately to start scanning customer QR codes and settling EC redemptions at your store — this is judged on its own by a Settlement Verifier and Settlement Supervisor, apart from your registration.',
    fil: 'Mag-apply nang hiwalay para makapag-scan ng QR ng customer at makapag-settle ng EC redemptions sa iyong tindahan — hiwalay itong sinusuri ng Settlement Verifier at Settlement Supervisor, bukod sa iyong rehistrasyon.',
  },
  'ayuda.applyAgain': {
    en: 'Apply again for Ayuda EC Accreditation',
    fil: 'Mag-apply muli para sa Akreditasyon sa Ayuda EC',
  },
  'ayuda.apply': {
    en: 'Apply for Ayuda EC Accreditation',
    fil: 'Mag-apply para sa Akreditasyon sa Ayuda EC',
  },

  // ── Goods I Sell (US 2.08) ──────────────────────────────────────────────
  'goods.title': { en: 'Goods I Sell', fil: 'Mga Paninda Ko' },
  'goods.loadError': {
    en: 'Could not load your goods.',
    fil: 'Hindi ma-load ang iyong mga paninda.',
  },
  'goods.saveError': {
    en: 'Could not save your goods.',
    fil: 'Hindi ma-save ang iyong mga paninda.',
  },
  'goods.saved': {
    en: 'Saved. This takes effect on your next sale.',
    fil: 'Na-save. Iiral ito sa susunod mong benta.',
  },
  'goods.catalogLoading': { en: 'Loading the catalog…', fil: 'Naglo-load ang katalogo…' },
  'goods.catalogEmpty': {
    en: 'The catalog is empty. Contact the LGU programme coordinator.',
    fil: 'Walang laman ang katalogo. Makipag-ugnayan sa LGU programme coordinator.',
  },
  'goods.alwaysIncluded': {
    en: '{good} (always included)',
    fil: '{good} (laging kasama)',
  },
  'goods.catalogNote': {
    en: "This list is drawn live from the Program Coordinator's catalog. Water can never be unchecked, so at least one good is always available.",
    fil: 'Direktang kinukuha ang listahang ito mula sa katalogo ng Program Coordinator. Hindi puwedeng alisin ang tubig, kaya laging may kahit isang paninda na available.',
  },
  'goods.save': { en: 'Save Changes', fil: 'I-save ang mga Pagbabago' },

  // ── Settlement (US 6.03-6.04, merchant side) ────────────────────────────
  'settlement.title': { en: 'Settlement', fil: 'Settlement' },
  'settlement.loadError': {
    en: 'Could not load your settlement record.',
    fil: 'Hindi ma-load ang iyong settlement record.',
  },
  'settlement.unsettledEc': { en: 'Unsettled EC', fil: 'Hindi pa nababayarang EC' },
  'settlement.oneTransaction': {
    en: '1 transaction since your last settlement visit.',
    fil: '1 transaksyon mula noong huli mong settlement.',
  },
  'settlement.manyTransactions': {
    en: '{count} transactions since your last settlement visit.',
    fil: '{count} na transaksyon mula noong huli mong settlement.',
  },
  'settlement.myQr': { en: 'My Settlement QR', fil: 'Ang Aking Settlement QR' },
  'settlement.qrHint': {
    en: 'Show this to the Settlement Verifier at the LGU office. If the camera can’t read it, they can type this code instead:',
    fil: 'Ipakita ito sa Settlement Verifier sa LGU office. Kung hindi ito mabasa ng camera, puwede nilang i-type ang code na ito:',
  },
  'settlement.explainer': {
    en: 'Settlement happens in person at the LGU office, whenever you choose to visit — there is no fixed cadence or deadline. A Settlement Verifier reviews your record first, then a Settlement Supervisor releases the cash payout.',
    fil: 'Personal na ginagawa ang settlement sa LGU office, kahit kailan mo piliing pumunta — walang takdang iskedyul o deadline. Sinusuri muna ng Settlement Verifier ang iyong record, tapos ilalabas ng Settlement Supervisor ang bayad na cash.',
  },
  'settlement.viewRecord': {
    en: 'View my Settlement Record',
    fil: 'Tingnan ang aking Settlement Record',
  },
  'settlement.manageGoods': { en: 'Manage Goods I Sell', fil: 'Ayusin ang Mga Paninda Ko' },
  'settlement.manageGoodsSub': {
    en: 'Edit your declared-goods checklist',
    fil: 'Baguhin ang iyong listahan ng idineklarang paninda',
  },

  'settlementRecord.title': { en: 'Settlement Record', fil: 'Settlement Record' },
  'settlementRecord.payoutTotal': { en: 'Payout total', fil: 'Kabuuang bayad' },
  'settlementRecord.transactions': { en: 'Transactions', fil: 'Mga transaksyon' },
  'settlementRecord.flaggedItems': { en: 'Flagged items', fil: 'Mga na-flag na item' },
  'settlementRecord.filterAll': { en: 'All Transactions', fil: 'Lahat ng Transaksyon' },
  'settlementRecord.filterFlagged': { en: 'Flagged Only', fil: 'Na-flag Lang' },
  'settlementRecord.emptyAll': {
    en: 'No transactions in this record.',
    fil: 'Walang transaksyon sa record na ito.',
  },
  'settlementRecord.emptyFlagged': {
    en: 'No flagged transactions in this record.',
    fil: 'Walang na-flag na transaksyon sa record na ito.',
  },
  'settlementRecord.reviewNote': {
    en: 'This record is reviewed by a Settlement Verifier, then a Settlement Supervisor, both in person at the LGU office. You’re present throughout to discuss any flagged item.',
    fil: 'Sinusuri ang record na ito ng Settlement Verifier, tapos ng Settlement Supervisor, parehong personal sa LGU office. Kasama ka sa buong proseso para talakayin ang anumang na-flag na item.',
  },
  'settlementRecord.flagged': { en: 'Flagged', fil: 'Na-flag' },
  'settlementRecord.redemptionId': { en: 'Redemption ID', fil: 'Redemption ID' },
  'settlementRecord.good': { en: 'Good', fil: 'Paninda' },
  'settlementRecord.ecAmount': { en: 'EC Amount', fil: 'Halaga ng EC' },
  'settlementRecord.dateTime': { en: 'Date/Time', fil: 'Petsa/Oras' },
  'settlementRecord.flagReason': { en: 'Flag reason', fil: 'Dahilan ng flag' },

  // ── Tindahan — the Marketplace seller side (US 10.01-10.04) ─────────────
  'tindahan.title': { en: 'Tindahan', fil: 'Tindahan' },
  'tindahan.loadError': {
    en: 'Could not load your Marketplace listing.',
    fil: 'Hindi ma-load ang iyong listing sa Marketplace.',
  },
  'tindahan.loading': {
    en: 'Loading your Marketplace listing…',
    fil: 'Naglo-load ang iyong listing sa Marketplace…',
  },
  'tindahan.listingStatus': {
    en: 'This Marketplace listing is {status}.',
    fil: 'Ang listing na ito sa Marketplace ay {status}.',
  },
  'tindahan.declineReason': { en: ' Reason: {reason}', fil: ' Dahilan: {reason}' },
  'tindahan.notListed': {
    en: 'Not listed on the Marketplace yet.',
    fil: 'Hindi pa nakalista sa Marketplace.',
  },
  'tindahan.applyNote': {
    en: 'You’ll need a business permit or barangay business clearance on file to apply.',
    fil: 'Kailangan mong may nakasumiteng business permit o barangay business clearance para makapag-apply.',
  },
  'tindahan.applyCta': {
    en: 'Apply to list on the Marketplace',
    fil: 'Mag-apply para makalista sa Marketplace',
  },
  'tindahan.underReview': {
    en: 'Application under review by a Settlement Verifier and Settlement Supervisor — this is judged the same way as EC accreditation, as its own separate decision.',
    fil: 'Sinusuri ang aplikasyon ng Settlement Verifier at Settlement Supervisor — katulad ito ng pagsusuri sa akreditasyon sa EC, hiwalay na desisyon.',
  },
  'tindahan.underReviewHint': {
    en: 'Your product catalog opens once the listing is approved. Nothing to do here until then.',
    fil: 'Bubukas ang iyong katalogo ng produkto kapag aprubado na ang listing. Wala munang magagawa dito hanggang doon.',
  },
  'tindahan.live': { en: 'Live on the Marketplace', fil: 'Live na sa Marketplace' },
  'tindahan.productsLoading': {
    en: 'Loading your products…',
    fil: 'Naglo-load ang iyong mga produkto…',
  },
  'tindahan.noProducts': {
    en: 'No products yet. Add your first one below.',
    fil: 'Wala pang produkto. Magdagdag ng una mo sa ibaba.',
  },
  'tindahan.addProduct': { en: '+ Add a product', fil: '+ Magdagdag ng produkto' },
  'tindahan.catalogNote': {
    en: 'Managed separately from your Goods I Sell EC-eligible list — this catalog is your own products at your own prices.',
    fil: 'Hiwalay itong pinamamahalaan sa listahan mong Mga Paninda Ko para sa EC — ang katalogong ito ay sarili mong mga produkto sa sarili mong presyo.',
  },
  'tindahan.paused': { en: 'Paused', fil: 'Naka-pause' },
  'tindahan.stockLine': {
    en: '{stock} of {quota} left today · {prep}',
    fil: '{stock} sa {quota} ang natitira ngayong araw · {prep}',
  },
  'tindahan.tabTindahan': { en: 'Tindahan', fil: 'Tindahan' },
  'tindahan.tabOrders': { en: 'Orders', fil: 'Mga Order' },
  'tindahan.tabKita': { en: 'Kita', fil: 'Kita' },
  'tindahan.tabsLockedNote': {
    en: 'Orders and Kita open once your listing is approved',
    fil: 'Bubukas ang Mga Order at Kita kapag aprubado na ang iyong listing',
  },

  // ── Marketplace listing application (US 10.01) ──────────────────────────
  'mpApply.title': {
    en: 'List on the Marketplace',
    fil: 'Maglista sa Marketplace',
  },
  'mpApply.storefront': { en: 'Storefront details', fil: 'Detalye ng tindahan' },
  'mpApply.displayName': { en: 'Store display name', fil: 'Pangalang ipapakita ng tindahan' },
  'mpApply.displayNamePlaceholder': {
    en: 'What buyers will see in Palengke',
    fil: 'Ang makikita ng mga bumibili sa Palengke',
  },
  'mpApply.category': { en: 'Category', fil: 'Kategorya' },
  'mpApply.pickupBarangay': { en: 'Pickup barangay', fil: 'Barangay ng pickup' },
  'mpApply.hours': { en: 'Store hours', fil: 'Oras ng tindahan' },
  'mpApply.opens': { en: 'Opens', fil: 'Bukas' },
  'mpApply.closes': { en: 'Closes', fil: 'Sara' },
  'mpApply.payout': { en: 'Payout', fil: 'Bayad' },
  'mpApply.gcash': { en: 'GCash number for payouts', fil: 'GCash number para sa bayad' },
  'mpApply.permitReused': {
    en: 'Your business permit is already on file from EC accreditation — no need to upload it again.',
    fil: 'Nakasumite na ang iyong business permit mula sa akreditasyon sa EC — hindi na kailangang i-upload muli.',
  },
  'mpApply.permitRequired': {
    en: 'A business permit or barangay business clearance is required before this can be approved.',
    fil: 'Kailangan ng business permit o barangay business clearance bago ito maaprubahan.',
  },

  // ── Orders (US 10.03) ───────────────────────────────────────────────────
  'mpOrders.title': { en: 'Orders', fil: 'Mga Order' },
  'mpOrders.loadError': {
    en: 'Could not load your orders.',
    fil: 'Hindi ma-load ang iyong mga order.',
  },
  'mpOrders.loading': { en: 'Loading your orders…', fil: 'Naglo-load ang iyong mga order…' },
  'mpOrders.empty': { en: 'No orders right now.', fil: 'Walang order sa ngayon.' },
  'mpOrders.rowMeta': { en: '{items} · {status}', fil: '{items} · {status}' },

  'orderStatus.preparing': { en: 'Preparing', fil: 'Inihahanda' },
  'orderStatus.picked_up': { en: 'Picked up', fil: 'Nakuha na' },
  'orderStatus.delivered': { en: 'Delivered', fil: 'Naihatid na' },
  'orderStatus.cancelled': { en: 'Cancelled', fil: 'Kinansela' },

  'mpOrder.title': { en: 'Order', fil: 'Order' },
  'mpOrder.loadError': {
    en: 'Could not load that order.',
    fil: 'Hindi ma-load ang order na iyon.',
  },
  'mpOrder.loading': { en: 'Loading that order…', fil: 'Naglo-load ang order na iyon…' },
  'mpOrder.readyError': {
    en: 'Could not mark that order ready.',
    fil: 'Hindi mamarkahang handa ang order na iyon.',
  },
  'mpOrder.buyer': { en: 'Buyer', fil: 'Bumibili' },
  'mpOrder.items': { en: 'Item(s)', fil: 'Mga item' },
  'mpOrder.total': { en: 'Total', fil: 'Kabuuan' },
  'mpOrder.payment': { en: 'Payment', fil: 'Bayad' },
  'mpOrder.status': { en: 'Status', fil: 'Katayuan' },
  'mpOrder.readyNote': {
    en: 'Payment already cleared — there’s no accept step. A rider will come find this order; mark it ready once it’s packed.',
    fil: 'Bayad na — walang hakbang na pagtanggap. May rider na darating para kunin ang order na ito; markahang handa kapag nakabalot na.',
  },
  'mpOrder.markReady': { en: 'Mark ready for pickup', fil: 'Markahang handa nang kunin' },
  'mpOrder.handedOff': {
    en: 'Handed off — the rider has it now.',
    fil: 'Naibigay na — nasa rider na ito ngayon.',
  },

  // ── Kita — payouts (US 10.04) ───────────────────────────────────────────
  'kita.title': { en: 'Kita', fil: 'Kita' },
  'kita.loadError': {
    en: 'Could not load your payouts.',
    fil: 'Hindi ma-load ang iyong mga bayad.',
  },
  'kita.loading': { en: 'Loading your payouts…', fil: 'Naglo-load ang iyong mga bayad…' },
  'kita.payoutNote': {
    en: 'Payouts settle daily (T+1, ~10 AM), net of a {fee}% platform fee, straight to your linked GCash — and only once a rider has at least picked up the order, so payment follows proof the goods actually changed hands.',
    fil: 'Araw-araw ang bayad (T+1, mga 10 AM), matapos ibawas ang {fee}% na platform fee, diretso sa naka-link mong GCash — at kapag nakuha na ng rider ang order, para sumunod ang bayad sa patunay na talagang naibigay ang paninda.',
  },
  'kita.noPayable': {
    en: 'No payable orders yet — nothing has been picked up by a rider.',
    fil: 'Wala pang babayarang order — wala pang nakukuha ang rider.',
  },
  'kita.awaitingPickup': {
    en: 'Awaiting pickup — not yet payable',
    fil: 'Hinihintay makuha — hindi pa babayaran',
  },
  'kita.payoutLine': { en: 'gross {gross} · {status}', fil: 'gross {gross} · {status}' },
  'kita.payoutLineWithFee': {
    en: 'gross {gross} − {fee}% fee · {status}',
    fil: 'gross {gross} − {fee}% fee · {status}',
  },
  'kita.awaitingSuffix': {
    en: ' — payout starts once a rider picks this up',
    fil: ' — magsisimula ang bayad kapag nakuha na ito ng rider',
  },
  'kita.exportCsv': {
    en: 'Export sales ledger — BIR 2551Q CSV',
    fil: 'I-export ang sales ledger — BIR 2551Q CSV',
  },
  'kita.exportNotWired': {
    en: 'CSV export is not wired yet — the sales ledger format is pending confirmation.',
    fil: 'Hindi pa gumagana ang CSV export — hinihintay pa ang kumpirmasyon sa format ng sales ledger.',
  },
  'kita.disputeNote': {
    en: 'A dispute freezes only the disputed amount — the rest of the day’s payout still settles on schedule.',
    fil: 'Ang halagang pinagtatalunan lang ang mafi-freeze sa isang dispute — ang natitirang bayad sa araw na iyon ay tuloy pa rin sa iskedyul.',
  },

  // ── Product editor (US 10.02) ───────────────────────────────────────────
  'mpProduct.addTitle': { en: 'Add a product', fil: 'Magdagdag ng produkto' },
  'mpProduct.editTitle': { en: 'Edit product', fil: 'Baguhin ang produkto' },
  'mpProduct.loadError': {
    en: 'Could not load that product.',
    fil: 'Hindi ma-load ang produktong iyon.',
  },
  'mpProduct.saveError': {
    en: 'Could not save that product.',
    fil: 'Hindi ma-save ang produktong iyon.',
  },
  'mpProduct.changeError': {
    en: 'Could not change that product.',
    fil: 'Hindi mabago ang produktong iyon.',
  },
  'mpProduct.removeError': {
    en: 'Could not remove that product.',
    fil: 'Hindi maalis ang produktong iyon.',
  },
  'mpProduct.markedSoldOut': {
    en: 'Marked sold out for today. Buyers cannot add it to a cart.',
    fil: 'Namarkahang ubos na ngayong araw. Hindi ito maidadagdag ng bumibili sa cart.',
  },
  'mpProduct.availableAgain': { en: 'Available again.', fil: 'Available na muli.' },
  'mpProduct.name': { en: 'Product name', fil: 'Pangalan ng produkto' },
  'mpProduct.namePlaceholder': { en: 'e.g. Kutsinta (dozen)', fil: 'hal. Kutsinta (isang dosena)' },
  'mpProduct.price': { en: 'Price (₱)', fil: 'Presyo (₱)' },
  'mpProduct.pricePlaceholder': { en: 'e.g. 120', fil: 'hal. 120' },
  'mpProduct.prepTime': { en: 'Prep time', fil: 'Oras ng paghahanda' },
  'mpProduct.prepTimePlaceholder': {
    en: 'e.g. 2h prep, or Ready to ship',
    fil: 'hal. 2 oras na paghahanda, o Handa nang ipadala',
  },
  'mpProduct.quota': {
    en: 'Daily quota — how many you can make today',
    fil: 'Dami kada araw — ilan ang kaya mong gawin ngayon',
  },
  'mpProduct.quotaPlaceholder': { en: 'e.g. 12', fil: 'hal. 12' },
  'mpProduct.photo': { en: 'Product Photo', fil: 'Larawan ng Produkto' },
  'mpProduct.saveChanges': { en: 'Save changes', fil: 'I-save ang mga pagbabago' },
  'mpProduct.addToTindahan': { en: 'Add to Tindahan', fil: 'Idagdag sa Tindahan' },
  'mpProduct.needPhoto': { en: '{label} — take a photo first', fil: '{label} — kumuha muna ng larawan' },
  'mpProduct.markAvailable': { en: 'Mark available again', fil: 'Markahang available muli' },
  'mpProduct.markSoldOut': {
    en: 'Mark sold out for today',
    fil: 'Markahang ubos na ngayong araw',
  },
  'mpProduct.remove': { en: 'Remove this item', fil: 'Alisin ang item na ito' },

  'login.incorrectCredentials': {
    en: 'Incorrect contact number or password.',
    fil: 'Mali ang numero ng contact o password.',
  },
  'login.merchantSuspended': {
    en: '{message} Reinstatement is decided by a Settlement Verifier and Supervisor — contact the LGU settlement office.',
    fil: '{message} Ang Settlement Verifier at Supervisor ang magdedesisyon sa pagbabalik — makipag-ugnayan sa LGU settlement office.',
  },
  'login.registrationPending': {
    en: 'Your accreditation application is still under review. You will be notified once a Verifier and Supervisor have decided.',
    fil: 'Sinusuri pa ang iyong aplikasyon sa akreditasyon. Aabisuhan ka kapag nakapagdesisyon na ang Verifier at Supervisor.',
  },
  'login.setupIncomplete': {
    en: 'Your login setup was not finished. Contact the LGU settlement office to complete your accreditation.',
    fil: 'Hindi natapos ang pag-set up ng iyong login. Makipag-ugnayan sa LGU settlement office para tapusin ang iyong akreditasyon.',
  },

  'forgotPin.title': { en: 'Forgot PIN', fil: 'Nakalimutang PIN' },
  'forgotPin.notAvailable': {
    en: 'Resetting your PIN in the app is not available yet. Log in with your contact number and password instead — that also clears any PIN lockout.',
    fil: 'Hindi pa puwedeng i-reset ang PIN sa loob ng app. Mag-login gamit ang iyong numero ng contact at password — nauubos din nito ang anumang PIN lockout.',
  },
  'forgotPin.whatHappens': { en: 'What this will do', fil: 'Ano ang mangyayari' },
  'forgotPin.explain': {
    en: 'Once available, you will confirm your contact number and password, then choose a new 4-digit PIN. The new PIN may be the same as your old one.',
    fil: 'Kapag available na, kukumpirmahin mo ang iyong numero ng contact at password, tapos pipili ng bagong 4-digit na PIN. Puwedeng pareho ito ng dati mong PIN.',
  },
  'forgotPin.loginWithPassword': {
    en: 'Log in with password',
    fil: 'Mag-login gamit ang password',
  },

  'notFound.title': { en: 'Oops!', fil: 'Naku!' },
  'notFound.message': { en: 'This screen does not exist.', fil: 'Wala ang screen na ito.' },
  'notFound.goHome': { en: 'Go to SIGLA home', fil: 'Pumunta sa SIGLA home' },

  'permit.captured': {
    en: 'Business permit captured',
    fil: 'Nakuha ang business permit',
  },
  'permit.capture': {
    en: 'Capture business permit',
    fil: 'Kunan ang business permit',
  },
  'permit.devSkip': { en: 'Skip permit capture', fil: 'Laktawan ang pagkuha ng permit' },
  'productPhoto.captured': {
    en: 'Photo captured — buyers will see this in Palengke.',
    fil: 'Nakuha ang larawan — ito ang makikita ng mga bumibili sa Palengke.',
  },
  'productPhoto.take': { en: 'Take product photo', fil: 'Kunan ang produkto' },
  'productPhoto.devSkip': { en: 'Skip product photo', fil: 'Laktawan ang larawan ng produkto' },

  // ── Suspended terminal (US 2.06) ────────────────────────────────────────
  'suspended.title': { en: 'Account suspended', fil: 'Suspendido ang account' },
  'suspended.heading': { en: 'Account suspended.', fil: 'Suspendido ang account.' },
  'suspended.whatItMeans': {
    en: 'You cannot accept EC redemptions while this stands. Any EC already sealed is still owed to you and is safe — a suspension is not a forfeiture.',
    fil: 'Hindi ka puwedeng tumanggap ng EC redemptions habang nakabinbin ito. Ligtas pa rin at babayaran sa iyo ang EC na natapos na — ang suspensyon ay hindi pagkumpiska.',
  },
  'suspended.contact': {
    en: 'Reinstatement is decided by a Settlement Verifier and a Settlement Supervisor together. Contact the LGU settlement office to raise it.',
    fil: 'Ang Settlement Verifier at Settlement Supervisor ang magkasamang magdedesisyon sa pagbabalik. Makipag-ugnayan sa LGU settlement office para maiakyat ito.',
  },
  'suspended.backToLogin': { en: 'Back to login', fil: 'Bumalik sa login' },
};
