# HeartBeat Studio

Turn your pulse into music — camera PPG heartbeat detection + generative music.

## Deploy to GitHub Pages (3 steps)

1. **Create a GitHub repository** (or use your existing one)

2. **Upload all files** — drag and drop the entire folder contents into your repo:
   ```
   index.html          ← main app
   manifest.json       ← PWA config
   service-worker.js   ← offline support
   _config.yml         ← GitHub Pages config
   _headers            ← security headers
   .nojekyll           ← disables Jekyll processing
   icons/
     icon-192.png
     icon-512.png
     apple-touch-icon.png
     favicon-32.png
   ```

3. **Enable GitHub Pages**
   - Go to repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`, folder: `/ (root)`
   - Click Save

Your app will be live at:
`https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Important

**Camera requires HTTPS** — the app will NOT work when opened as a local file.
Always use the GitHub Pages URL (https://...).

## How to use

1. Open the URL in Safari on iPhone
2. Tap "Add to Home Screen" for the full app experience
3. Press **Begin Heart Scan**
4. Cover your rear camera lens completely with your fingertip
5. Hold still for 30 seconds — the app detects your heartbeat
6. Music generates automatically from your pulse data

## Features

- 📷 PPG (photoplethysmography) via rear camera
- 🎵 6 music genres: Raga, Pop, Hip-Hop, EDM, Rock, Latin
- 📊 Real-time BPM + HRV measurement
- 💾 Save and replay sessions
- 📱 Installable PWA (works offline after first load)
