# Legal & compliance checklist (Greece / EU)

Practical checklist for running this site for a Greek audience. Not legal advice — confirm business/licensing items with an accountant (λογιστής).

## Current state of the site

- Contact form posts name, email, message to **Web3Forms** (third-party processor).
- No analytics, no tracking pixels, no cookies.
- Fonts self-hosted in `fonts/`: Noto Serif Display, Literata, Manrope (OFL, Latin + Greek).
- Greek is the default language (root pages, `lang="el"`); English lives under `/en/`.

## Checklist

### 1. GDPR — Privacy Policy (required)
GDPR + Greek Law 4624/2019. A Privacy Policy page, in Greek (and English), stating:
- [ ] Data controller: who you are and how to contact you
- [ ] What is collected (name, email, message) and why (answering enquiries)
- [ ] Legal basis (pre-contractual steps / legitimate interest)
- [ ] Processors: Web3Forms, email provider, hosting provider
- [ ] International transfers (Web3Forms may process data outside the EU) and safeguards
- [ ] Retention period
- [ ] Data subject rights (access, rectification, erasure, etc.) and right to complain to the **Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα** (dpa.gr)
- [ ] Short notice under the contact form linking to the policy, e.g. *«Τα στοιχεία σας χρησιμοποιούνται μόνο για να απαντήσουμε στο αίτημά σας. Πολιτική Απορρήτου»*

### 2. Google Fonts — self-host
- [x] Serve fonts from our own server instead of `fonts.googleapis.com` (loading from Google sends visitor IPs to Google without consent; see LG München, 2022).

### 3. Cookies
- [x] No cookies/trackers → no cookie banner needed today.
- [ ] If Google Analytics, Meta Pixel, Instagram/YouTube embeds, etc. are added later: add a proper consent banner (Reject as easy as Accept, nothing loads before consent — per Greek DPA guidance).

### 4. Business identification (required for commercial sites)
Greek e-commerce law (Π.Δ. 131/2003). Visible in the footer or on a «Στοιχεία Επιχείρησης» page:
- [ ] Legal / trade name
- [ ] Physical address
- [ ] Email and phone
- [ ] ΑΦΜ and ΔΟΥ
- [ ] ΓΕΜΗ number (if registered)
- [ ] Any prices shown include VAT (ΦΠΑ)

### 5. Greek language
- [x] Site content available in Greek (root) with English under `/en/`.
- [ ] Key information (terms, prices, privacy policy) available in Greek (consumer law Ν. 2251/1994). A Greek or bilingual EL/EN version also helps local SEO.

### 6. Alcohol-related
- [ ] No content targeting minors; avoid imagery suggesting excessive drinking.
- [ ] Optional «Απολαύστε υπεύθυνα» note.
- [ ] Business holds the necessary licences for beverage/catering services and events (offline, but required before advertising).

### 7. Photos & content rights
- [ ] Rights/licence for every image, including `images/samples/`.
- [ ] Consent from identifiable people in real event photos (GDPR + portrait rights).

### 8. Nice to have
- [ ] Basic accessibility (European Accessibility Act, Ν. 4994/2022 — micro-enterprises < 10 staff and < €2M turnover are exempt, but still good practice).
- [ ] Check/register the "The Sip Society" trademark (ΟΒΙ / EUIPO).
- [ ] `.gr` domain registered in your own / your company's name.
