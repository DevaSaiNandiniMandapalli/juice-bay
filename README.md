# JUICE BAY — website concept

A bright, modern, youthful one-page site for **JUICE BAY**, Santosh Nagar, Hyderabad.
This is an **independent design concept — not the official website** and not affiliated with Swiggy.

**Live site:** https://juice-bay.vercel.app

## Run it

Double-click `index.html`, or serve the folder:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

No build step, no dependencies. Works from `file://` too.

**Deploy:** the folder is a static site, so Vercel serves it as-is (no build command, output directory = root). Pushing to `main` is the update path.

## What is verified vs. demo

**Verified from the shop's own Swiggy listing** (restaurant id `1135541`, checked Nov 2026):

- Shop name: Juice bay (shown here as JUICE BAY)
- Address: Shop 17-1-376/14, Ground Floor, Sai Ratna Arcade, Santosh Nagar Main Road, New Santoshnagar, Santosh Nagar, Hyderabad, Telangana 500059
- Phone: 090634 31159 (as provided); `tel:+919063431159`
- Listing facts: ₹100 for two, 3.8★ from 121 ratings, 72 vegetarian items, cuisines include Juices, Beverages, Desserts, Ice Cream, Chaat, Sweets
- 26 menu items with their **real names, descriptions and prices**, and the shop's own product photos

**Not verified — deliberately left editable or omitted:**

- Opening hours (the listing does not publish a reliable schedule) → the site says “call to confirm”
- WhatsApp availability → no WhatsApp button is shown, with a note explaining why
- Email, Instagram, official socials → not manufactured
- Customer reviews / testimonials → none invented
- Prices: shown with a “listed” tag and a note that they may change; update them in `assets/js/data.js`

## Editing content

Everything runs from `assets/js/data.js`:

```js
const JB = {
  business: { phone, address, hours: null, whatsapp: null, ... },
  menu: [ { id, name, category, price, desc, img, tags } ]
};
window.JB_DATA = JB;
```

- Set `hours` to a string (e.g. `"10:00 am – 11:30 pm daily"`) once confirmed.
- Set `whatsapp` to the number to render a WhatsApp button automatically.
- Add/remove `menu` entries freely — cards, counts, filters and the juice rail all re-render.

## Structure

```
├── index.html
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/data.js        ← all editable content
    ├── js/main.js        ← rendering + interactions
    └── img/*.webp        ← optimised shop photos (2 sizes each)
```

## Notes

- Responsive at 320 / 360 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 px with no horizontal overflow.
- SEO title, meta description and `Store` structured data; no fake ratings or prices in schema.
- Filters, gallery lightbox, mobile menu and the enquiry form are all keyboard accessible; motion respects `prefers-reduced-motion`.
- The enquiry form validates and confirms on the client but **does not send** anywhere yet.
- Photos are the shop's own listing images, used here for the concept with a visible credit.
