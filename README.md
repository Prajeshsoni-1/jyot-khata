# Jyot Khata

Client ledger (khata) + ready payment messages in Hindi / English / Gujarati.
Works on Android and iPhone as an installable web app (PWA). No server, no build step, no login:
every file here is static.

## Files
- `index.html` — the whole app (HTML + CSS + JS)
- `manifest.webmanifest`, `sw.js`, `icons/` — make it installable and able to open offline

## Run on your Mac (to try it)
```bash
cd jyot-khata
python3 -m http.server 5173
```
Open http://localhost:5173

## Put it on your phone (needs one free hosting account)
The folder must be served over **https** so the phone can install it and keep it offline.
Any of these is free for a static folder:
- **Cloudflare Pages** → Create project → Direct upload → drop the `jyot-khata` folder
- **Netlify** → Add new site → Deploy manually → drop the folder
- **GitHub Pages** → push the folder to a repo → Settings → Pages

Then open the link on the phone:
- **Android (Chrome):** menu ⋮ → Install app / Add to Home screen
- **iPhone (Safari):** Share → Add to Home Screen

## Where is the data?
On the phone only (browser storage). Nothing is uploaded anywhere.
Use **Settings → Download backup** regularly. To move to a new phone (Android → iPhone),
download a backup on the old phone and use **Restore from backup** on the new one.

## Money rules
- **Received** reduces what the client owes.
- **Bill / Due** and **Given** (refund / paid out) increase what the client owes.
- Pending = Bill + Given − Received. Negative pending is shown as *Advance*.
- Every received payment gets a receipt number (`JE-0001`, …) — ready for PDF receipts later.

## Template fields
`{name} {amount} {mode} {date} {receipt_no} {total} {received} {pending} {statement} {business} {owner} {phone} {upi} {address}`
A line that contains a field with no value (for example `UPI: {upi}` when no UPI ID is saved) is dropped automatically.

## Next steps (not built yet)
- PDF receipt (with Jyot Enterprise name, date, client, amount, mode, receipt no.) shared on WhatsApp
- Cloud sync so Android and iPhone share one live ledger
- App lock (PIN / fingerprint)
