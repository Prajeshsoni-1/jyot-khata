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

## More than one user (your own business, your own name)
Anyone who opens the link gets **their own private khata**. On first open they see a short setup screen
(business name, optional logo, language). Their name and logo then appear in the app header, on receipts and on statements,
and receipts are numbered from their own initials (e.g. `ST-0001` for "Sharma Traders").
- **Settings → Invite others** shares the app link (WhatsApp / any app) in the owner's chosen language.
- **Settings → Your logo** changes or removes the logo (without a logo, a monogram of the business initial is used).
- There is **no login and no server**: each person's data lives only on their own phone and is never uploaded.
  That also means no sync between a person's phones — they move data with Backup / Restore.
- Installs made before this feature keep their data, their Jyot Enterprise details and the Jyot logo untouched.

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

## Receipts (PDF)
Open any **Received** entry (or tap **Receipt PDF** right after saving a payment) to get an A5 payment receipt
in Hindi, English or Gujarati: logo, business details, receipt no., date, client, amount (with amount in words),
mode / reference / note, and the account summary **as it stood right after that payment**.
- **Share PDF** opens the phone's share sheet (pick WhatsApp, then the client). The thank-you message is added as the caption.
- **Share as image** sends the same receipt as a picture, which WhatsApp shows inline.
- **Download** saves the PDF (this is also what happens on a computer).
- Business name, address, phone, UPI and an optional footer note come from **Settings**.
- The receipt is drawn on a canvas and wrapped in a one-page PDF — no library, works offline, and Hindi/Gujarati text is shaped by the phone's own fonts.
  The PDF is an image, so the text can't be selected.

## Statements (PDF)
On a client's page tap **Statement PDF** for an A4 account statement in Hindi, English or Gujarati:
every entry with date, type, mode, reference / note, charges, received and the **running balance**, plus totals.
- Pick the period: **All time**, **This FY** (1 Apr – 31 Mar), **This month** or **Last month**.
  For a period, an **Opening balance** row carries over what was pending before it started.
- Long statements run to as many pages as needed; each page repeats the table header and shows "Page x / y".
- **Share PDF** opens the phone's share sheet (WhatsApp etc.). If the client still owes money, the caption is the
  reminder message in the chosen language; otherwise a thank-you greeting.
- Same Settings as receipts (business name, address, phone, UPI, footer note).

## Next steps (not built yet)
- Cloud sync so Android and iPhone share one live ledger
- App lock (PIN / fingerprint)
