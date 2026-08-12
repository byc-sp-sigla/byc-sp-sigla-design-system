import type { Dictionary } from './types';

/**
 * Citizen Portal copy — US 1.11.
 *
 * ── WHAT IS DELIBERATELY NOT IN HERE ──
 * Text the API sends: error messages, status words, barangay names, goods names, mission titles.
 * The backend has no i18n, so those arrive in English whatever this dictionary says. Translating
 * the shell around them is still worth doing; pretending the whole screen is Filipino is not.
 *
 * ── PRODUCT NOUNS STAY IN ENGLISH ──
 * wallet, EC, QR, login, PIN, password, barangay. These are what residents already say. A literal
 * Filipino coinage for "wallet" would be less understood than the English word, not more.
 */
export const STRINGS_CITIZEN: Dictionary = {
  'landing.greeting': { en: 'Kumusta! Welcome to SIGLA.', fil: 'Kumusta! Maligayang pagdating sa SIGLA.' },
  'landing.tagline': {
    en: "Echague, Isabela's digital ID and welfare wallet.",
    fil: 'Ang digital ID at welfare wallet ng Echague, Isabela.',
  },
  'landing.registerCta': { en: 'Register for a SIGLA ID', fil: 'Magparehistro para sa SIGLA ID' },
  'landing.loginCta': { en: 'I already have an account', fil: 'May account na ako' },
  'landing.setupCta': {
    en: 'Approved? Set up your login',
    fil: 'Naaprubahan na? I-set up ang iyong login',
  },
  'login.subheading': {
    en: 'Log in with the phone number you registered with.',
    fil: 'Mag-login gamit ang numero ng telepono na ginamit mo sa pagpaparehistro.',
  },
  'login.phoneLabel': { en: 'Phone Number', fil: 'Numero ng Telepono' },
  'login.phoneHint': {
    en: 'The number on your registration — 09XXXXXXXXX or +639XXXXXXXXX.',
    fil: 'Ang numerong nakarehistro — 09XXXXXXXXX o +639XXXXXXXXX.',
  },
  'login.forgotFootnote': {
    en: 'Forgot your password? Visit your barangay office for help.',
    fil: 'Nakalimutan ang password? Bumisita sa inyong barangay office para sa tulong.',
  },

  'unlock.pinLabel': { en: 'Your 4-digit SIGLA PIN', fil: 'Ang iyong 4-digit na SIGLA PIN' },

  // ── Launcher — the app picker ────────────────────────────────────────────
  'launcher.greeting': { en: 'Kumusta, {name}.', fil: 'Kumusta, {name}.' },
  'launcher.pick': {
    en: 'Pick an app — your account, ID and permit stay the same in both.',
    fil: 'Pumili ng app — pareho lang ang iyong account, ID at permit sa dalawa.',
  },
  'launcher.ayudaTitle': { en: 'Ayuda', fil: 'Ayuda' },
  'launcher.ayudaSub': {
    en: 'Digital ID, welfare wallet, missions and notices',
    fil: 'Digital ID, welfare wallet, mga misyon at abiso',
  },
  'launcher.marketplaceTitle': { en: 'Marketplace', fil: 'Marketplace' },
  'launcher.marketplaceSub': {
    en: 'Buy from BPLO-verified Echague sellers',
    fil: 'Bumili sa mga BPLO-verified na tindera at tindero ng Echague',
  },
  'launcher.loadError': {
    en: 'Could not load your account.',
    fil: 'Hindi ma-load ang iyong account.',
  },

  // ── My SIGLA ID ──────────────────────────────────────────────────────────
  'id.title': { en: 'My SIGLA ID', fil: 'Ang Aking SIGLA ID' },
  /**
   * Filipino drops `{part}` on purpose — "Magandang araw" covers the whole day, so a Filipino
   * reader is never told good afternoon at nine in the morning. `fill` leaves an unused
   * placeholder alone, so the English template keeps its time-of-day word.
   */
  'id.greeting': { en: 'Magandang {part}, {name}.', fil: 'Magandang araw, {name}.' },
  'id.loading': { en: 'Loading your ID…', fil: 'Naglo-load ang iyong ID…' },
  'id.loadError': { en: 'Could not load your ID.', fil: 'Hindi ma-load ang iyong ID.' },
  'id.suspended': {
    en: 'Your SIGLA ID is suspended. Your wallet balance is preserved. Visit the LGU office to appeal.',
    fil: 'Suspendido ang iyong SIGLA ID. Ligtas ang laman ng iyong wallet. Bumisita sa LGU office para umapela.',
  },
  'id.cardKicker': { en: 'REPUBLIKA NG PILIPINAS · SIGLA', fil: 'REPUBLIKA NG PILIPINAS · SIGLA' },
  'id.cardBarangay': { en: 'Barangay', fil: 'Barangay' },
  'id.cardSex': { en: 'Sex', fil: 'Kasarian' },
  'id.cardDateOfBirth': { en: 'Date of birth', fil: 'Petsa ng kapanganakan' },
  'id.verifiedBadge': { en: 'Beripikado / Verified', fil: 'Beripikado / Verified' },
  'id.qrLoading': { en: 'Loading your QR code…', fil: 'Naglo-load ang iyong QR code…' },
  'id.qrError': {
    en: 'Could not refresh your QR code.',
    fil: 'Hindi ma-refresh ang iyong QR code.',
  },
  'id.qrGraceExpired': {
    en: 'This code is no longer valid. Reconnect to the internet so it can re-sign.',
    fil: 'Hindi na balido ang code na ito. Kumonekta muli sa internet upang ma-sign ulit.',
  },
  'id.qrOffline': {
    en: 'You are offline. This code stays valid until {when}.',
    fil: 'Offline ka ngayon. Balido ang code na ito hanggang {when}.',
  },
  'id.qrRules': {
    en: 'QR re-signs every 2 minutes online · valid 24 hours offline · a validated scan holds through the rest of the transaction.',
    fil: 'Nag-si-sign ulit ang QR kada 2 minuto kapag online · balido ng 24 oras kapag offline · ang na-validate na scan ay tumatagal hanggang matapos ang transaksyon.',
  },
  'id.devOnly': { en: 'Dev only', fil: 'Dev only' },
  'id.devScanned': {
    en: 'This is what a merchant or Officer scans:',
    fil: 'Ito ang ini-scan ng merchant o Officer:',
  },
  'id.printCard': { en: 'Print Card (CR80 PDF)', fil: 'I-print ang Card (CR80 PDF)' },
  'id.printSoon': {
    en: 'Printable ID export is coming soon. Show your QR code to a merchant or Officer for verification in the meantime.',
    fil: 'Malapit nang dumating ang printable na ID. Sa ngayon, ipakita ang iyong QR code sa merchant o Officer para sa beripikasyon.',
  },
  'id.myDetailsTitle': { en: 'My details', fil: 'Aking impormasyon' },
  'id.myDetailsSub': {
    en: 'Your record, contact details and classifications',
    fil: 'Ang iyong rekord, kontak at mga klasipikasyon',
  },

  // ── My details ───────────────────────────────────────────────────────────
  'me.title': { en: 'My details', fil: 'Aking impormasyon' },
  'me.loading': {
    en: 'Loading your details…',
    fil: 'Naglo-load ang iyong impormasyon…',
  },
  'me.loadError': {
    en: 'Could not load your details.',
    fil: 'Hindi ma-load ang iyong impormasyon.',
  },
  'me.suspended': {
    en: 'Your ID is suspended. Your details and your balance are safe — visit your barangay office to sort it out.',
    fil: 'Suspendido ang iyong ID. Ligtas ang iyong impormasyon at balanse — bumisita sa inyong barangay office para maayos ito.',
  },
  'me.sectionYou': { en: 'You', fil: 'Ikaw' },
  'me.name': { en: 'Name', fil: 'Pangalan' },
  'me.dateOfBirth': { en: 'Date of birth', fil: 'Petsa ng kapanganakan' },
  'me.sex': { en: 'Sex', fil: 'Kasarian' },
  'me.barangay': { en: 'Barangay', fil: 'Barangay' },
  'me.sectionContact': { en: 'Contact', fil: 'Kontak' },
  'me.mobile': { en: 'Mobile', fil: 'Mobile' },
  'me.email': { en: 'Email', fil: 'Email' },
  'me.sectionClassifications': { en: 'Classifications', fil: 'Mga klasipikasyon' },
  'me.noClassifications': { en: 'None recorded.', fil: 'Walang nakatala.' },
  'me.classificationsHint': {
    en: 'Classifications decide which programmes you can join. Only your barangay Officer can change them, and they need a supporting document — bring it to the barangay office.',
    fil: 'Ang mga klasipikasyon ang nagtatakda kung aling programa ang maaari mong salihan. Ang barangay Officer lang ang makakapagbago nito, at kailangan nila ng dokumentong pansuporta — dalhin ito sa barangay office.',
  },

  // ── Registration (US 1.01) ───────────────────────────────────────────────
  'register.title': { en: 'Register', fil: 'Magparehistro' },
  'register.intro': {
    en: "Apply for a SIGLA ID. An Officer at your barangay reviews every application — you'll be notified by SMS once a decision is made.",
    fil: 'Mag-apply para sa SIGLA ID. Sinusuri ng Officer sa inyong barangay ang bawat aplikasyon — makakatanggap ka ng SMS kapag may desisyon na.',
  },
  'register.sectionDetails': { en: 'Your details', fil: 'Iyong impormasyon' },
  'register.fullName': { en: 'Full Name', fil: 'Buong Pangalan' },
  'register.dateOfBirth': { en: 'Date of Birth', fil: 'Petsa ng Kapanganakan' },
  'register.sex': { en: 'Sex', fil: 'Kasarian' },
  'register.barangay': { en: 'Barangay', fil: 'Barangay' },
  'register.phoneNumber': { en: 'Phone Number', fil: 'Numero ng Telepono' },
  'register.emailAddress': {
    en: 'Email Address (optional)',
    fil: 'Email Address (opsyonal)',
  },
  'register.sectionIdentity': { en: 'Identity verification', fil: 'Beripikasyon ng pagkakakilanlan' },
  'register.photoNote': {
    en: "Take a live photo of yourself — a photo of a photo, or one from your gallery, won't be accepted.",
    fil: 'Kumuha ng live na larawan ng iyong sarili — hindi tinatanggap ang larawan ng larawan o kuha mula sa gallery.',
  },
  'register.submit': { en: 'Submit application', fil: 'Isumite ang aplikasyon' },
  'register.rateLimited': {
    en: 'Too many attempts from this connection. Please wait about an hour and try again.',
    fil: 'Masyadong maraming pagsubok mula sa koneksyong ito. Maghintay ng humigit-kumulang isang oras at subukan muli.',
  },

  // ── Credential setup (US 1.05) ───────────────────────────────────────────
  'setup.title': { en: 'Set up your account', fil: 'I-set up ang iyong account' },
  'setup.heading': {
    en: 'Welcome — your ID is approved.',
    fil: 'Maligayang pagdating — aprubado na ang iyong ID.',
  },
  'setup.subheading': {
    en: 'Confirm your phone number and the setup code sent to it, then create a password and PIN.',
    fil: 'Kumpirmahin ang iyong numero ng telepono at ang setup code na ipinadala rito, pagkatapos ay gumawa ng password at PIN.',
  },
  'setup.sectionIdentity': {
    en: 'Confirm your identity',
    fil: 'Kumpirmahin ang iyong pagkakakilanlan',
  },
  'setup.phone': { en: 'Phone Number', fil: 'Numero ng Telepono' },
  'setup.setupCode': { en: 'Setup Code', fil: 'Setup Code' },
  'setup.setupCodePlaceholder': {
    en: 'Code sent to your phone',
    fil: 'Code na ipinadala sa iyong telepono',
  },
  'setup.sectionPassword': { en: 'Password', fil: 'Password' },
  'setup.passwordRule': {
    en: '8+ characters · 1 uppercase · 1 number · 1 special character',
    fil: '8+ na karakter · 1 malaking letra · 1 numero · 1 espesyal na karakter',
  },
  'setup.confirmPassword': { en: 'Confirm Password', fil: 'Kumpirmahin ang Password' },
  'setup.passwordsMismatch': {
    en: 'The two passwords do not match.',
    fil: 'Hindi magkatugma ang dalawang password.',
  },
  'setup.stillNeeds': { en: 'Still needs: {missing}', fil: 'Kailangan pa: {missing}' },
  'setup.req8': { en: '8+ characters', fil: '8+ na karakter' },
  'setup.reqUppercase': { en: '1 uppercase letter', fil: '1 malaking letra' },
  'setup.reqNumber': { en: '1 number', fil: '1 numero' },
  'setup.reqSpecial': { en: '1 special character', fil: '1 espesyal na karakter' },
  'setup.sectionPin': { en: '4-Digit PIN', fil: '4-Digit na PIN' },
  'setup.pinPurpose': {
    en: 'Used to unlock the app and confirm redemptions',
    fil: 'Ginagamit para i-unlock ang app at kumpirmahin ang mga redemption',
  },
  'setup.pin': { en: 'PIN', fil: 'PIN' },
  'setup.confirmPin': { en: 'Confirm PIN', fil: 'Kumpirmahin ang PIN' },
  'setup.pinLength': {
    en: 'Your PIN must be exactly 4 digits.',
    fil: 'Dapat eksaktong 4 na digit ang iyong PIN.',
  },
  'setup.pinsMismatch': {
    en: 'The two PINs do not match.',
    fil: 'Hindi magkatugma ang dalawang PIN.',
  },
  'setup.submit': { en: 'Finish setup', fil: 'Tapusin ang setup' },
  'setup.invalidCode': {
    en: 'That setup code is not valid.',
    fil: 'Hindi balido ang setup code na iyan.',
  },
  'setup.idSuspended': {
    en: '{message} There is no in-app appeal — visit your barangay LGU office to file a reinstatement request.',
    fil: '{message} Walang apela sa loob ng app — bumisita sa inyong barangay LGU office para maghain ng reinstatement request.',
  },
  'setup.rateLimited': {
    en: 'Too many attempts. Please wait about 15 minutes before trying again.',
    fil: 'Masyadong maraming pagsubok. Maghintay ng humigit-kumulang 15 minuto bago subukan muli.',
  },

  // ── Pending approval (US 1.02) ───────────────────────────────────────────
  'pending.statusTitle': { en: 'Registration status', fil: 'Katayuan ng rehistrasyon' },
  'pending.title': { en: 'Pending Approval', fil: 'Naghihintay ng Aprubasyon' },
  'pending.statusError': {
    en: 'Could not check your registration status.',
    fil: 'Hindi masuri ang katayuan ng iyong rehistrasyon.',
  },
  'pending.questsError': {
    en: 'Could not load missions.',
    fil: 'Hindi ma-load ang mga misyon.',
  },
  'pending.noticesError': {
    en: 'Could not load notices.',
    fil: 'Hindi ma-load ang mga abiso.',
  },
  'pending.noApplication': {
    en: 'You have not submitted a SIGLA ID application yet.',
    fil: 'Wala ka pang naisusumiteng aplikasyon para sa SIGLA ID.',
  },
  'pending.registerNow': { en: 'Register Now', fil: 'Magparehistro Na' },
  'pending.merged': {
    en: 'Your submission was matched to an existing SIGLA ID record rather than creating a new one. If you believe this is a mistake, please visit your barangay office.',
    fil: 'Itinugma ang iyong isinumite sa isang umiiral nang SIGLA ID record sa halip na gumawa ng bago. Kung sa tingin mo ay mali ito, bumisita sa inyong barangay office.',
  },
  'pending.approved': {
    en: 'Congratulations — your SIGLA ID application has been approved!',
    fil: 'Binabati kita — aprubado na ang iyong aplikasyon para sa SIGLA ID!',
  },
  'pending.approvedHint': {
    en: 'Set up a password and PIN to start using your SIGLA ID. You can also come back to the homepage first — this screen will be waiting for you next time.',
    fil: 'Gumawa ng password at PIN para magamit na ang iyong SIGLA ID. Puwede ka rin munang bumalik sa homepage — naghihintay pa rin ang screen na ito sa susunod.',
  },
  'pending.finishSetup': {
    en: 'Finish setting up your account',
    fil: 'Tapusin ang pag-set up ng iyong account',
  },
  'pending.backHome': { en: 'Back to homepage', fil: 'Bumalik sa homepage' },
  'pending.logOut': { en: 'Log out', fil: 'Mag-log out' },
  'pending.underReview': {
    en: 'Application under review. You will get a notification once a decision is made — usually within a few days.',
    fil: 'Sinusuri pa ang aplikasyon. Makakatanggap ka ng abiso kapag may desisyon na — karaniwang ilang araw lang.',
  },
  'pending.cardHint': {
    en: 'Your Digital ID will appear here once your registration is approved.',
    fil: 'Lalabas dito ang iyong Digital ID kapag aprubado na ang iyong rehistrasyon.',
  },
  'pending.checkAgain': { en: 'Check again', fil: 'Suriin muli' },
  'pending.gatedFeature': {
    en: '{feature} requires an approved registration.',
    fil: 'Kailangan ng aprubadong rehistrasyon para sa {feature}.',
  },
  'pending.viewStatus': {
    en: 'View Registration Status',
    fil: 'Tingnan ang Katayuan ng Rehistrasyon',
  },
  'pending.noMissions': {
    en: 'No missions are running right now. Check back soon.',
    fil: 'Walang tumatakbong misyon sa ngayon. Bumalik ka mamaya.',
  },
  'pending.noNotices': { en: 'No notices yet.', fil: 'Wala pang abiso.' },

  // ── Mission kinds — used by the Pending and signed-in Misyon lists ───────
  'quest.kindQuiz': { en: 'Quiz quest', fil: 'Misyong quiz' },
  'quest.kindEvent': { en: 'Event quest', fil: 'Misyong event' },
  'quest.kindForm': { en: 'Form quest', fil: 'Misyong form' },
  'quest.kindSocialMedia': { en: 'Social Media quest', fil: 'Misyong social media' },

  // ── Marketplace — Palengke, cart, orders, Suki (US 9.01-9.05) ───────────
  'mp.palengkeTitle': { en: 'Market', fil: 'Palengke' },
  'mp.orderInProgress': {
    en: 'Order in progress — from {seller}.',
    fil: 'May order kang kasalukuyang isinasagawa — mula kay {seller}.',
  },
  'mp.trackOrder': { en: 'Track your order', fil: 'Subaybayan ang iyong order' },
  'mp.search': { en: 'Search', fil: 'Maghanap' },
  'mp.searchPlaceholder': {
    en: 'e.g. suman, pinipig, abaca',
    fil: 'hal. suman, pinipig, abaca',
  },
  'mp.scope': {
    en: 'Showing BPLO-verified sellers near Brgy. {barangay}.',
    fil: 'Ipinapakita ang mga BPLO-verified na nagtitinda malapit sa Brgy. {barangay}.',
  },
  'mp.noSellers': {
    en: 'No sellers match "{query}".',
    fil: 'Walang nagtitindang tugma sa "{query}".',
  },
  'mp.sellerMeta': {
    en: '★{rating} ({reviews}) · Brgy. {barangay} · delivery {fee}',
    fil: '★{rating} ({reviews}) · Brgy. {barangay} · delivery {fee}',
  },

  'mp.sellerUnavailable': {
    en: 'This seller is no longer available.',
    fil: 'Wala nang available ang nagtitindang ito.',
  },
  'mp.bploVerified': { en: 'BPLO-Verified', fil: 'BPLO-Verified' },
  'mp.sellerHeaderMeta': {
    en: '★{rating} ({reviews}) · Brgy. {barangay}',
    fil: '★{rating} ({reviews}) · Brgy. {barangay}',
  },
  'mp.cartReplaceWarning': {
    en: "Adding here replaces what's in your cart from another seller.",
    fil: 'Papalitan nito ang laman ng iyong cart mula sa ibang nagtitinda.',
  },
  'mp.productMeta': { en: '{prep} · {stock} left today', fil: '{prep} · {stock} na lang ngayon' },
  'mp.inCart': { en: 'In cart ×{qty}', fil: 'Nasa cart ×{qty}' },
  'mp.addToCart': { en: 'Add to cart', fil: 'Idagdag sa cart' },
  'mp.viewCart': { en: 'View Cart ({qty})', fil: 'Tingnan ang Cart ({qty})' },

  'mp.cartTitle': { en: 'Cart', fil: 'Cart' },
  'mp.cartEmpty': {
    en: 'Your cart is empty. Add something from Palengke.',
    fil: 'Walang laman ang iyong cart. Magdagdag ng bibilhin mula sa Palengke.',
  },
  'mp.cartSellerLine': { en: '{seller} · Brgy. {barangay}', fil: '{seller} · Brgy. {barangay}' },
  'mp.item': { en: 'Item', fil: 'Item' },
  'mp.deliveryRoute': { en: 'Delivery — {from} → {to}', fil: 'Delivery — {from} → {to}' },
  'mp.total': { en: 'Total', fil: 'Kabuuan' },
  'mp.payment': { en: 'Payment', fil: 'Bayad' },
  'mp.payGcash': { en: 'Pay with GCash', fil: 'Magbayad gamit ang GCash' },
  'mp.payMaya': { en: 'Pay with Maya', fil: 'Magbayad gamit ang Maya' },
  'mp.payCod': { en: 'Cash on Delivery', fil: 'Cash on Delivery' },
  'mp.payCodOverCap': {
    en: 'Cash on Delivery (unavailable — over {cap} cap)',
    fil: 'Cash on Delivery (hindi available — lampas sa {cap} na limitasyon)',
  },

  'mp.ordersTitle': { en: 'Orders', fil: 'Mga Order' },
  'mp.tapToTrack': { en: 'Tap to track your order', fil: 'Pindutin para subaybayan ang order' },
  'mp.noOrders': {
    en: 'No orders yet — place your first one from Palengke.',
    fil: 'Wala pang order — mag-order ng una mo mula sa Palengke.',
  },
  'mp.orderHistory': { en: 'Order history', fil: 'Kasaysayan ng mga order' },

  'mp.orderTitle': { en: 'Order', fil: 'Order' },
  'mp.orderNotFound': {
    en: 'This order could not be found.',
    fil: 'Hindi mahanap ang order na ito.',
  },
  'mp.yourOrder': { en: 'Your order', fil: 'Ang iyong order' },
  'mp.noActiveOrder': {
    en: 'You have no order in progress.',
    fil: 'Wala kang kasalukuyang order.',
  },
  'mp.backToPalengke': { en: 'Back to Palengke', fil: 'Bumalik sa Palengke' },
  'mp.lookingForRider': {
    en: 'Looking for a nearby rider…',
    fil: 'Naghahanap ng rider na malapit…',
  },
  'mp.items': { en: 'Items', fil: 'Mga item' },
  'mp.deliveryFee': { en: 'Delivery fee', fil: 'Bayad sa delivery' },
  'mp.refreshStatus': { en: 'Refresh status', fil: 'I-refresh ang katayuan' },
  'mp.simulateNext': { en: 'Simulate next update', fil: 'I-simulate ang susunod na update' },
  'mp.rateOrder': { en: 'Rate this order', fil: 'I-rate ang order na ito' },
  'mp.done': { en: 'Done', fil: 'Tapos na' },
  'mp.submitRating': { en: 'Submit rating', fil: 'Isumite ang rating' },
  'mp.youRated': { en: 'You rated this order {stars}★', fil: 'Binigyan mo ito ng {stars}★' },

  'mp.sukiTitle': { en: 'Rewards', fil: 'Suki' },
  'mp.sukiCard': { en: 'Suki card this month', fil: 'Suki card ngayong buwan' },
  'mp.sukiOrders': {
    en: 'Orders from BPLO-verified sellers',
    fil: 'Mga order mula sa BPLO-verified na nagtitinda',
  },
  'mp.sukiNote': {
    en: '{target} orders in a month → ₱60 off delivery fees, funded by the Municipal Marketplace Fund (currently ₱46,200 available).',
    fil: '{target} order sa isang buwan → ₱60 bawas sa bayad sa delivery, pinopondohan ng Municipal Marketplace Fund (₱46,200 ang available ngayon).',
  },
  'mp.sukiHowTitle': { en: 'How it works', fil: 'Paano ito gumagana' },
  'mp.sukiHow': {
    en: 'Buy from BPLO-verified Echague sellers · {target} orders in a month earns a delivery-fee credit · pauses automatically once the Fund hits its monthly cap of ₱50,000.',
    fil: 'Bumili sa mga BPLO-verified na nagtitinda ng Echague · {target} order sa isang buwan ay may credit sa bayad sa delivery · awtomatikong humihinto kapag naabot ng Fund ang buwanang limitasyon na ₱50,000.',
  },

  // ── Order stages — the tracking timeline and every status line ───────────
  'order.stage.placed': { en: 'Order placed', fil: 'Naisumite ang order' },
  'order.stage.preparing': {
    en: 'Preparing your order',
    fil: 'Inihahanda ang iyong order',
  },
  'order.stage.rider_assigned': {
    en: 'Rider is heading to the seller',
    fil: 'Papunta na ang rider sa nagtitinda',
  },
  'order.stage.picked_up': {
    en: 'Rider picked up your order',
    fil: 'Nakuha na ng rider ang iyong order',
  },
  'order.stage.delivered': { en: 'Delivered', fil: 'Naihatid na' },

  // ── Classifications (US 4.01) and programme states ──────────────────────
  'classification.Senior': { en: 'Senior citizen', fil: 'Senior citizen' },
  'classification.PWD': { en: 'Person with disability', fil: 'May kapansanan' },
  'classification.SoloParent': { en: 'Solo parent', fil: 'Solo parent' },
  'classification.FourPs': { en: '4Ps beneficiary', fil: 'Benepisyaryo ng 4Ps' },

  'programState.Claimable': { en: 'Ready to claim', fil: 'Puwede nang kunin' },
  'programState.Claimed': { en: 'Claimed', fil: 'Nakuha na' },
  'programState.SlotsFull': { en: 'Slots full', fil: 'Puno na ang slot' },
  'programState.Closed': { en: 'Closed', fil: 'Sarado na' },
  'programState.NotEnrolled': { en: 'Not enrolled', fil: 'Hindi kasama' },

  // ── Misyon (US 5.02-5.03) ───────────────────────────────────────────────
  'missions.title': { en: 'Misyon', fil: 'Misyon' },
  'missions.credited': { en: '{ec} EC is now in your wallet.', fil: 'Nasa wallet mo na ang {ec} EC.' },
  'missions.recordedNoEc': {
    en: 'Recorded. This one paid no EC — see the mission for why.',
    fil: 'Naitala. Walang EC ang misyong ito — tingnan ang misyon para sa dahilan.',
  },
  'missions.loadError': {
    en: 'Could not load missions.',
    fil: 'Hindi ma-load ang mga misyon.',
  },
  'missions.weekly': {
    en: 'Earned this week: {earned}/{cap} EC',
    fil: 'Kinita ngayong linggo: {earned}/{cap} EC',
  },
  'missions.empty': {
    en: 'No missions are running right now. Check back soon.',
    fil: 'Walang tumatakbong misyon sa ngayon. Bumalik ka mamaya.',
  },
  'missions.completed': { en: 'Completed', fil: 'Tapos na' },

  // ── Pitaka — wallet and programmes (US 4.04) ────────────────────────────
  'programs.title': { en: 'Pitaka', fil: 'Pitaka' },
  'programs.claimed': { en: '{ec} EC is now in your wallet.', fil: 'Nasa wallet mo na ang {ec} EC.' },
  'programs.loadError': {
    en: 'Could not load your programmes.',
    fil: 'Hindi ma-load ang iyong mga programa.',
  },
  'programs.walletBalance': { en: 'Wallet balance', fil: 'Laman ng wallet' },
  'programs.ecRule': {
    en: '1 EC = ₱1 of goods · spendable at any accredited merchant',
    fil: '1 EC = ₱1 na halaga ng bilihin · magagamit sa alinmang akreditadong merchant',
  },
  'programs.yourPrograms': { en: 'Your Programs', fil: 'Iyong mga Programa' },
  'programs.empty': {
    en: 'No programs have been published yet.',
    fil: 'Wala pang programang nailalabas.',
  },

  'programDetail.title': { en: 'Program', fil: 'Programa' },
  'programDetail.notAvailable': {
    en: 'This program is no longer available.',
    fil: 'Wala nang available ang programang ito.',
  },
  'programDetail.loadError': {
    en: 'Could not load this program.',
    fil: 'Hindi ma-load ang programang ito.',
  },
  'programDetail.eligibleAs': { en: 'Eligible as: {reason}', fil: 'Kwalipikado bilang: {reason}' },
  'programDetail.claim': { en: 'Claim', fil: 'Kunin' },
  'programDetail.notEnrolledNote': {
    en: 'Not included? Ask your barangay officer.',
    fil: 'Hindi kasama? Magtanong sa inyong barangay officer.',
  },
  'programDetail.alreadyClaimed': {
    en: 'You have already claimed this program. Each program can be claimed once.',
    fil: 'Nakuha mo na ang programang ito. Isang beses lang ito puwedeng kunin.',
  },
  'programDetail.slotsFull': {
    en: 'All slots for this program have been taken. Slots are first-come-first-served.',
    fil: 'Naubos na ang mga slot para sa programang ito. Unang dating, unang serbisyo.',
  },
  'programDetail.closed': { en: 'This program has closed.', fil: 'Sarado na ang programang ito.' },
  'programDetail.notEligible': {
    en: 'You are not enrolled in this program. Visit your barangay office to ask about your classifications for future programs.',
    fil: 'Hindi ka kasama sa programang ito. Bumisita sa inyong barangay office para itanong ang iyong mga klasipikasyon para sa mga susunod na programa.',
  },

  // ── Abiso (Flow 7) ──────────────────────────────────────────────────────
  'abiso.title': { en: 'Abiso', fil: 'Abiso' },
  'abiso.loadError': { en: 'Could not load Abiso.', fil: 'Hindi ma-load ang Abiso.' },
  'abiso.empty': { en: 'No notices yet.', fil: 'Wala pang abiso.' },
  'notice.title': { en: 'Notice', fil: 'Abiso' },
  'notice.notAvailable': {
    en: 'This notice is no longer available.',
    fil: 'Wala nang available ang abisong ito.',
  },
  'notice.loadError': {
    en: 'Could not load this notice.',
    fil: 'Hindi ma-load ang abisong ito.',
  },
  'notice.issuedBy': { en: 'Issued by {issuer}', fil: 'Inilabas ni {issuer}' },

  // ── Mission detail screens ──────────────────────────────────────────────
  'quest.notAvailable': {
    en: 'This mission is no longer available.',
    fil: 'Wala nang available ang misyong ito.',
  },
  'quest.loadError': {
    en: 'Could not load this mission.',
    fil: 'Hindi ma-load ang misyong ito.',
  },
  'quest.completedShort': { en: 'Completed.', fil: 'Tapos na.' },

  'quiz.title': { en: 'Quiz', fil: 'Quiz' },
  'quiz.alreadyCompleted': {
    en: 'Completed. EC already credited for this quiz.',
    fil: 'Tapos na. Nai-kredito na ang EC para sa quiz na ito.',
  },
  'quiz.yourAnswer': { en: 'Your answer', fil: 'Iyong sagot' },
  'quiz.answerAll': {
    en: 'Every question has to be answered to submit.',
    fil: 'Kailangang masagot ang lahat ng tanong bago isumite.',
  },
  'quiz.submit': { en: 'Submit Quiz', fil: 'Isumite ang Quiz' },
  'quiz.questClosed': {
    en: 'This mission closed before your answers arrived, so nothing was recorded.',
    fil: 'Nagsara ang misyong ito bago dumating ang iyong mga sagot, kaya walang naitala.',
  },
  'quiz.lockdown': {
    en: 'Missions cannot pay out during the election period. Your answers were not recorded.',
    fil: 'Hindi puwedeng magbayad ang mga misyon sa panahon ng eleksyon. Hindi naitala ang iyong mga sagot.',
  },
  'quiz.answerEvery': {
    en: 'Answer every question before submitting.',
    fil: 'Sagutin ang lahat ng tanong bago isumite.',
  },

  'event.title': { en: 'Event', fil: 'Event' },
  'event.location': { en: 'Location', fil: 'Lugar' },
  'event.when': { en: 'When', fil: 'Kailan' },
  'event.reward': { en: 'Reward', fil: 'Gantimpala' },
  'event.alreadyCompleted': {
    en: 'You have already completed this mission.',
    fil: 'Natapos mo na ang misyong ito.',
  },
  'event.officerScans': {
    en: 'An Officer scans your SIGLA ID at the venue — there is nothing to submit here.',
    fil: 'Ini-scan ng Officer ang iyong SIGLA ID sa lugar ng event — walang isusumite dito.',
  },

  'form.title': { en: 'Form', fil: 'Form' },
  'form.notAvailableYet': {
    en: 'Filling it in from the app is not available yet.',
    fil: 'Hindi pa puwedeng sagutan ito sa loob ng app.',
  },
  'formField.ShortText': { en: 'Short text', fil: 'Maikling teksto' },
  'formField.Number': { en: 'Number', fil: 'Numero' },
  'formField.Date': { en: 'Date', fil: 'Petsa' },
  'formField.MultipleChoice': { en: 'Multiple choice', fil: 'Maramihang pagpipilian' },
  'formField.Checkboxes': { en: 'Checkboxes', fil: 'Mga checkbox' },

  'social.title': { en: 'Social Media', fil: 'Social Media' },
  'social.openLink': {
    en: '{ec} EC · opening this link is what completes the mission:',
    fil: '{ec} EC · ang pagbukas ng link na ito ang tumatapos sa misyon:',
  },
  'social.notAvailableYet': {
    en: 'Completing it from the app is not available yet.',
    fil: 'Hindi pa puwedeng tapusin ito sa loob ng app.',
  },

  // ── Palitan — goods catalog and claim tickets (US 6.01-6.02) ────────────
  'tickets.title': { en: 'Palitan', fil: 'Palitan' },
  'tickets.catalogError': {
    en: 'Could not load the catalog.',
    fil: 'Hindi ma-load ang katalogo.',
  },
  'tickets.catalog': { en: 'Goods catalog', fil: 'Katalogo ng mga bilihin' },
  'tickets.catalogLoading': {
    en: 'Loading the catalog…',
    fil: 'Naglo-load ang katalogo…',
  },
  'tickets.catalogEmpty': {
    en: 'No items are available with EC right now.',
    fil: 'Walang bilihin na mabibili gamit ang EC sa ngayon.',
  },
  'tickets.weeklyLimit': { en: 'Weekly limit: {limit}', fil: 'Lingguhang limitasyon: {limit}' },
  'tickets.catalogNote': {
    en: 'Tap a good to generate a QR Claim Ticket, valid 72 hours at any accredited merchant that carries it.',
    fil: 'Pindutin ang bilihin para gumawa ng QR Claim Ticket, balido ng 72 oras sa alinmang akreditadong merchant na may stock nito.',
  },
  'tickets.active': { en: 'Your active tickets', fil: 'Iyong mga aktibong ticket' },
  'tickets.noneActive': {
    en: 'No active tickets. Generate one above before you go to the store.',
    fil: 'Walang aktibong ticket. Gumawa ng isa sa itaas bago pumunta sa tindahan.',
  },
  'tickets.viewQr': { en: 'View QR code for {good}', fil: 'Tingnan ang QR code para sa {good}' },
  'tickets.line': { en: '{qty} × {good}', fil: '{qty} × {good}' },
  'tickets.meta': {
    en: '{ec} EC · Use before {when}',
    fil: '{ec} EC · Gamitin bago mag-{when}',
  },
  'tickets.cancel': { en: 'Cancel this ticket', fil: 'Kanselahin ang ticket na ito' },
  'tickets.cancelled': {
    en: 'Cancelled the ticket for {good}.',
    fil: 'Kinansela ang ticket para sa {good}.',
  },
  'tickets.alreadyUsed': {
    en: 'That ticket has already been used, so there is nothing to cancel.',
    fil: 'Nagamit na ang ticket na iyon, kaya wala nang makakansela.',
  },
  'tickets.expired': { en: 'That ticket has expired.', fil: 'Nag-expire na ang ticket na iyon.' },
  'tickets.weeklyReached': {
    en: 'You have reached this week’s limit for this item.',
    fil: 'Naabot mo na ang lingguhang limitasyon para sa bilihing ito.',
  },
  'tickets.weeklyReachedResets': {
    en: 'You have reached this week’s limit for this item. It resets on {when}.',
    fil: 'Naabot mo na ang lingguhang limitasyon para sa bilihing ito. Magre-reset ito sa {when}.',
  },
  'tickets.notEcEligible': {
    en: 'This item is no longer available with EC.',
    fil: 'Hindi na mabibili ang item na ito gamit ang EC.',
  },

  'claimTicket.title': { en: 'Claim Ticket', fil: 'Claim Ticket' },
  'claimTicket.meta': {
    en: '{ec} EC · Claim Ticket · Valid until {when}',
    fil: '{ec} EC · Claim Ticket · Balido hanggang {when}',
  },
  'claimTicket.done': { en: 'Done', fil: 'Tapos na' },

  // ── Biometric offer, forgot PIN, not found ──────────────────────────────
  'biometric.title': { en: 'Biometric unlock', fil: 'Biometric unlock' },
  'biometric.prompt': {
    en: 'Enable fingerprint or face unlock?',
    fil: 'Paganahin ang fingerprint o face unlock?',
  },
  'biometric.hint': {
    en: 'Skip typing your PIN every time you open SIGLA. Your PIN still works as a fallback, and you can turn this off anytime in Settings.',
    fil: 'Hindi mo na kailangang mag-type ng PIN sa tuwing bubuksan ang SIGLA. Gumagana pa rin ang PIN bilang alternatibo, at puwede mo itong patayin anumang oras sa Settings.',
  },
  'biometric.enable': { en: 'Enable Biometric Unlock', fil: 'Paganahin ang Biometric Unlock' },
  'biometric.skip': { en: 'Skip for now', fil: 'Laktawan muna' },

  'forgotPin.title': { en: 'Forgot PIN', fil: 'Nakalimutang PIN' },
  'forgotPin.notAvailable': {
    en: 'Resetting your PIN in the app is not available yet. Log in with your phone number and password instead — that also clears any PIN lockout.',
    fil: 'Hindi pa puwedeng i-reset ang PIN sa loob ng app. Mag-login gamit ang iyong numero ng telepono at password — nauubos din nito ang anumang PIN lockout.',
  },
  'forgotPin.whatHappens': { en: 'What this will do', fil: 'Ano ang mangyayari' },
  'forgotPin.explain': {
    en: 'Once available, you will confirm your phone number and password, then choose a new 4-digit PIN. The new PIN may be the same as your old one.',
    fil: 'Kapag available na, kukumpirmahin mo ang iyong numero ng telepono at password, tapos pipili ng bagong 4-digit na PIN. Puwedeng pareho ito ng dati mong PIN.',
  },
  'forgotPin.loginWithPassword': {
    en: 'Log in with password',
    fil: 'Mag-login gamit ang password',
  },

  'notFound.title': { en: 'Oops!', fil: 'Naku!' },
  'notFound.message': {
    en: 'This screen does not exist.',
    fil: 'Wala ang screen na ito.',
  },
  'notFound.goHome': { en: 'Go to SIGLA home', fil: 'Pumunta sa SIGLA home' },

  'login.incorrectCredentials': {
    en: 'Incorrect phone number or password.',
    fil: 'Mali ang numero ng telepono o password.',
  },
  'login.idSuspended': {
    en: '{message} There is no in-app appeal — visit your barangay LGU office to file a reinstatement request.',
    fil: '{message} Walang apela sa loob ng app — bumisita sa inyong barangay LGU office para maghain ng reinstatement request.',
  },
  'login.registrationPending': {
    en: 'Your registration is still under review. You will be notified once a decision is made.',
    fil: 'Sinusuri pa ang iyong rehistrasyon. Aabisuhan ka kapag may desisyon na.',
  },
  'login.setupIncomplete': {
    en: 'Your login setup was not finished. Ask your barangay office to complete your registration.',
    fil: 'Hindi natapos ang pag-set up ng iyong login. Pakiusapan ang inyong barangay office na tapusin ang iyong rehistrasyon.',
  },

  'capture.deniedAskAgain': {
    en: 'SIGLA needs camera access to capture your live photo. Allow camera access when prompted, then try again.',
    fil: 'Kailangan ng SIGLA ang camera para makuha ang iyong live na larawan. Payagan ang camera access kapag tinanong, tapos subukan muli.',
  },
  'capture.deniedSettings': {
    en: 'SIGLA needs camera access to capture your live photo. Enable it for this app in your device Settings, then come back here.',
    fil: 'Kailangan ng SIGLA ang camera para makuha ang iyong live na larawan. Paganahin ito para sa app na ito sa Settings ng iyong device, tapos bumalik dito.',
  },
  'capture.devSkipIdentity': {
    en: 'Skip identity verification',
    fil: 'Laktawan ang beripikasyon ng pagkakakilanlan',
  },
  'dateField.placeholder': {
    en: 'Select your date of birth',
    fil: 'Piliin ang iyong petsa ng kapanganakan',
  },
  'dateField.done': { en: 'Done', fil: 'Tapos na' },

  // ── The Ayuda tab bar (86d40pqf2) ───────────────────────────────────────
  'tab.id': { en: 'ID', fil: 'ID' },
  'tab.pitaka': { en: 'Wallet', fil: 'Pitaka' },
  'tab.palitan': { en: 'Exchange', fil: 'Palitan' },
  'tab.misyon': { en: 'Missions', fil: 'Misyon' },
  'tab.abiso': { en: 'Notices', fil: 'Abiso' },
};
