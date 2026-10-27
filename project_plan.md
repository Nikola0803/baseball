# Medvednica Baseball Club

## 1. Project Description
Official website for the Medvednica baseball club (Zagreb, Croatia). The site introduces the club, its teams, the 2026 season schedule and news, and showcases the official promotional merchandise line with suggested retail prices in EUR. Target audience: local players, parents, fans, sponsors and anyone looking to buy club merch.

Core value: a bold, high-energy club identity (blood red / white / black) that works as a club homepage and as a lightweight merchandise showcase, English only.

## 2. Page Structure
- `/` - Home (hero, club intro + numbers, four squads, 2026 season schedule, merch highlights, news, closing CTA)
- `/about` - About the club (club story, four squads, how the club runs + timeline, gallery, CTA)
- `/shop` - Official merchandise catalog (full price list, category filters, size selection, order bag)
- `/contact` - Contact (club details, message form, how to find the field + map, FAQ)
- `*` - 404

## 3. Core Features
- [x] Sticky navigation that turns solid on scroll + mobile menu
- [x] Hero with season badge and club call-to-actions
- [x] Club story and key numbers
- [x] Team roster of squads
- [x] 2026 season schedule with home/away filter
- [x] Merchandise highlights on home + full catalog page
- [x] Category filtering, size selection, order bag with subtotal
- [x] Photo gallery
- [x] News & stories
- [x] Contact form (built-in forms) + club info + map + FAQ
- [ ] Online checkout / payments (future phase)
- [ ] Member area & registration (future phase)

## 4. Data Model Design
No database needed yet. Merchandise, schedule, teams and news are stored as local content files so the site can be published immediately.

Future (if orders go online): products, product_variants, orders, order_items, members.

## 5. Backend / Third-party Integration Plan
- Database: not connected — demo catalog data, ready to swap for a real source later
- Shopify / Readdy Shop: not connected — recommended later for real product & stock management
- Stripe / Toss / PayPal / Square: not needed yet, would power checkout in a later phase
- Forms: built-in form used for the contact section

## 6. Development Phase Plan

### Phase 1: Visual identity + home page
- Goal: deliver the complete club homepage with the red/white/black visual language
- Deliverable: hero, club story, teams, schedule, merch highlights, gallery, news, contact, footer

### Phase 2: Merchandise catalog
- Goal: full price list browsing experience
- Deliverable: `/shop` page with categories, sizes, order bag

### Phase 2.5: Four-page structure
- Goal: split the site into Home / About / Shop / Contact with shared sections
- Deliverable: reusable page hero, CTA band, gallery, team and story sections

### Phase 3: Commerce & club operations (later)
- Goal: real orders, stock and member sign-up
- Deliverable: connected shop + checkout, member registration

## 7. Visual Direction
- Style: clean, sporty American baseball/softball — premium and minimal, never sterile
- Palette: white page (#FFFFFF) as the base, ink (#171717) for type and contrast, light grey (#E8E8E8) for cards, panels and washes, club red (#C62828) as the only accent (marks, rules, CTAs, small tags)
- Character comes from details: hairline rules, sharp corners on cards and buttons, big daylight sports photography, condensed athletic labels
- Type: Archivo Black display headlines, Inter Tight body copy, Barlow Condensed labels, Instrument Serif for pull quotes
- Avoid: dark full-page surfaces, extra dominant colours, rounded "app" cards