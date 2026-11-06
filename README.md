# DL Rolls Ltd

A responsive React / Vite catalogue for DL Rolls Ltd. Thirty illustrative products across toilet paper, kitchen rolls and wipes, priced from £5 to £65. No backend, checkout or payment integration.

## Development

Requires Node 22.12+ (or a compatible current Node version).

```
npm ci
npm run dev
npm test
npm run build
```

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` uses a build-and-artifact GitHub Actions deployment. On push to main it installs with npm ci, checks catalogue logic, builds dist, and deploys to GitHub Pages. Repository Settings → Pages → Source must be **GitHub Actions**.

Vite base is `/DL-Rolls-Ltd/`. Hash routing makes product links and page refreshes reliable on Pages. `npm run deploy` is also provided for optional manual publishing to a gh-pages branch; use either this method or Actions, not both simultaneously. The default deployment uses Actions.

## Content

Edit `src/catalogue.js` for the catalogue and business details. The current brands, pack sizes, specifications, SKUs and prices are sample content and require client confirmation. The maximum single sample product price is £65; multiple selections may total more. Images are AI-generated category representations, not actual branded packaging. Update these with authorised product assets before using a confirmed live catalogue.

## Enquiries

Products can be added to a local enquiry list with quantities. The list and saved product IDs persist only in the visitor's browser. Both the general enquiry form and product enquiry form prepare a message; a visitor chooses to open their email application and send it. Copy and download options are available for the product enquiry. Nothing is transmitted by the form itself. No payment, order fulfilment, account or inventory backend is included.

Contact: dlrollsltd@hotmail.com · 07851 931615.

## Design and compatibility

Icons use Lucide inline SVG, not Unicode emojis. DM Sans is bundled locally. Responsive layouts, native accessible dialogs, keyboard focus, reduced motion, alt text, and compressed local WebP assets are included. Check on target browsers and replace illustrative commercial information before launch.
