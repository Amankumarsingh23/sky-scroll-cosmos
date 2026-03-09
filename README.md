# 🌌 APOD Explorer

<div align="center">

![APOD Explorer Banner](https://img.shields.io/badge/NASA-APOD%20Explorer-0d6efd?style=for-the-badge&logo=nasa&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-198754?style=for-the-badge&logo=pwa&logoColor=white)
![Android](https://img.shields.io/badge/Android-TWA-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![React](https://img.shields.io/badge/React-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Netlify](https://img.shields.io/badge/Hosted-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**Your daily window to the universe — powered by NASA's APOD API**

[🌐 Live Demo](https://regal-sunflower-8519b7.netlify.app) • [📱 Download App](#) • [🐛 Report Bug](https://github.com/Amankumarsingh23/sky-scroll-cosmos/issues)

</div>

---

## 🚀 What is APOD Explorer?

APOD Explorer brings NASA's iconic **Astronomy Picture of the Day** to your fingertips — every single day. Explore breathtaking images of our universe, from distant galaxies to nearby planets, from solar flares to the Northern Lights.

> NASA's APOD has been running since 1995 and is one of the most visited websites in the world.

---

## ✨ Features

- 🌠 **Daily NASA Image** — fresh astronomy picture delivered every day
- 📚 **Archive Browser** — explore years of stunning space photography  
- ❤️ **Favorites** — save your most loved images
- 📤 **Share** — share stunning space photos with friends
- 📶 **Works Offline** — view saved images without internet
- 🖥️ **Fullscreen Immersive** — distraction-free viewing experience
- 📱 **Installable** — works as a native Android app via TWA

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| PWA | Web App Manifest + Service Worker |
| Android | Trusted Web Activity (TWA) via Bubblewrap |
| Hosting | Netlify |
| Data | NASA APOD API |

---

## 📱 Android App

This project is also published as a native Android app using **Trusted Web Activity (TWA)** — Google's officially supported method for publishing PWAs to the Play Store.

### How it works
```
Your Website (PWA) → Bubblewrap → Android AAB → Google Play Store
```

No WebView hacks. No React Native rewrite. Just Google's official PWA-to-Android pipeline.

---

## 🏃 Running Locally

```bash
# Clone the repo
git clone https://github.com/Amankumarsingh23/sky-scroll-cosmos.git
cd sky-scroll-cosmos

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
sky-scroll-cosmos/
├── public/
│   ├── icons/
│   │   ├── icon-192.png        # PWA icon
│   │   └── icon-512.png        # PWA icon (large)
│   ├── .well-known/
│   │   └── assetlinks.json     # Android Digital Asset Links
│   ├── manifest.json           # PWA manifest
│   └── sw.js                   # Service worker
├── src/
│   ├── components/             # React components
│   ├── pages/                  # App pages
│   ├── hooks/                  # Custom hooks
│   └── main.tsx                # Entry point + SW registration
├── index.html                  # HTML with PWA meta tags
└── vite.config.ts              # Vite configuration
```

---

## 🌐 PWA Setup

This app is a fully compliant Progressive Web App with:

- ✅ `manifest.json` with icons, theme color, display mode
- ✅ Service Worker for offline caching
- ✅ HTTPS via Netlify
- ✅ Installable on Android and Desktop
- ✅ Digital Asset Links for TWA verification

---

## 🔒 Digital Asset Links

The file at `public/.well-known/assetlinks.json` links the Android app to this website, enabling the app to run fullscreen without a browser address bar.

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "app.lovable.sky_scroll_cosmos.twa",
    "sha256_cert_fingerprints": ["..."]
  }
}]
```

---

## 📦 Building the Android App

```bash
# Install Bubblewrap
npm install -g @bubblewrap/cli

# Initialize (reads manifest from live site)
mkdir apod-android && cd apod-android
bubblewrap init --manifest https://regal-sunflower-8519b7.netlify.app/manifest.json

# Build APK + AAB
bubblewrap build
```

Output files:
- `app-release-signed.apk` — install directly on Android
- `app-release-bundle.aab` — upload to Google Play Store

---

## 🚀 Deployment

### Website (Netlify)
Automatically deployed from the `main` branch on GitHub.

### Android App (Google Play)
1. Build AAB with Bubblewrap
2. Upload to Google Play Console
3. Complete store listing
4. Run closed test with 12 testers for 14 days
5. Apply for production access

---

## 📸 Screenshots

> _Coming soon_

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [NASA APOD API](https://api.nasa.gov/) — for the incredible daily astronomy images
- [Google Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) — for the PWA to Android conversion
- [Lovable](https://lovable.dev) — where this project was initially built
- [Netlify](https://netlify.com) — for hosting

---

<div align="center">
Made with ❤️ and a love for the cosmos — Aman Singh
</div># 🌌 APOD Explorer

<div align="center">

![APOD Explorer Banner](https://img.shields.io/badge/NASA-APOD%20Explorer-0d6efd?style=for-the-badge&logo=nasa&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-198754?style=for-the-badge&logo=pwa&logoColor=white)
![Android](https://img.shields.io/badge/Android-TWA-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![React](https://img.shields.io/badge/React-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Netlify](https://img.shields.io/badge/Hosted-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**Your daily window to the universe — powered by NASA's APOD API**

[🌐 Live Demo](https://regal-sunflower-8519b7.netlify.app) • [📱 Download App](#) • [🐛 Report Bug](https://github.com/Amankumarsingh23/sky-scroll-cosmos/issues)

</div>

---

## 🚀 What is APOD Explorer?

APOD Explorer brings NASA's iconic **Astronomy Picture of the Day** to your fingertips — every single day. Explore breathtaking images of our universe, from distant galaxies to nearby planets, from solar flares to the Northern Lights.

> NASA's APOD has been running since 1995 and is one of the most visited websites in the world.

---

## ✨ Features

- 🌠 **Daily NASA Image** — fresh astronomy picture delivered every day
- 📚 **Archive Browser** — explore years of stunning space photography  
- ❤️ **Favorites** — save your most loved images
- 📤 **Share** — share stunning space photos with friends
- 📶 **Works Offline** — view saved images without internet
- 🖥️ **Fullscreen Immersive** — distraction-free viewing experience
- 📱 **Installable** — works as a native Android app via TWA

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| PWA | Web App Manifest + Service Worker |
| Android | Trusted Web Activity (TWA) via Bubblewrap |
| Hosting | Netlify |
| Data | NASA APOD API |

---

## 📱 Android App

This project is also published as a native Android app using **Trusted Web Activity (TWA)** — Google's officially supported method for publishing PWAs to the Play Store.

### How it works
```
Your Website (PWA) → Bubblewrap → Android AAB → Google Play Store
```

No WebView hacks. No React Native rewrite. Just Google's official PWA-to-Android pipeline.

---

## 🏃 Running Locally

```bash
# Clone the repo
git clone https://github.com/Amankumarsingh23/sky-scroll-cosmos.git
cd sky-scroll-cosmos

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
sky-scroll-cosmos/
├── public/
│   ├── icons/
│   │   ├── icon-192.png        # PWA icon
│   │   └── icon-512.png        # PWA icon (large)
│   ├── .well-known/
│   │   └── assetlinks.json     # Android Digital Asset Links
│   ├── manifest.json           # PWA manifest
│   └── sw.js                   # Service worker
├── src/
│   ├── components/             # React components
│   ├── pages/                  # App pages
│   ├── hooks/                  # Custom hooks
│   └── main.tsx                # Entry point + SW registration
├── index.html                  # HTML with PWA meta tags
└── vite.config.ts              # Vite configuration
```

---

## 🌐 PWA Setup

This app is a fully compliant Progressive Web App with:

- ✅ `manifest.json` with icons, theme color, display mode
- ✅ Service Worker for offline caching
- ✅ HTTPS via Netlify
- ✅ Installable on Android and Desktop
- ✅ Digital Asset Links for TWA verification

---

## 🔒 Digital Asset Links

The file at `public/.well-known/assetlinks.json` links the Android app to this website, enabling the app to run fullscreen without a browser address bar.

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "app.lovable.sky_scroll_cosmos.twa",
    "sha256_cert_fingerprints": ["..."]
  }
}]
```

---

## 📦 Building the Android App

```bash
# Install Bubblewrap
npm install -g @bubblewrap/cli

# Initialize (reads manifest from live site)
mkdir apod-android && cd apod-android
bubblewrap init --manifest https://regal-sunflower-8519b7.netlify.app/manifest.json

# Build APK + AAB
bubblewrap build
```

Output files:
- `app-release-signed.apk` — install directly on Android
- `app-release-bundle.aab` — upload to Google Play Store

---

## 🚀 Deployment

### Website (Netlify)
Automatically deployed from the `main` branch on GitHub.

### Android App (Google Play)
1. Build AAB with Bubblewrap
2. Upload to Google Play Console
3. Complete store listing
4. Run closed test with 12 testers for 14 days
5. Apply for production access

---

## 📸 Screenshots

> ![d35be55f-656b-433e-b954-e4f513aa8776](https://github.com/user-attachments/assets/6697a0a6-7d09-4511-b19b-8108fc1497d7)
> ![10c3f2e4-7eda-45bc-99ab-4f8974e304d7](https://github.com/user-attachments/assets/c81b638b-cb6d-4838-91c6-f5fc311ac296)
> ![7a96df16-1b85-4d33-a2d2-bf0854f4e871](https://github.com/user-attachments/assets/e556cbfe-0143-4214-83b6-4ebdcea572d5)
> ![78cb3cb9-6a38-4f59-ab6a-b6fd107ff204](https://github.com/user-attachments/assets/d4a85de1-cc9a-486c-99af-901c3bed5c6f)




---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [NASA APOD API](https://api.nasa.gov/) — for the incredible daily astronomy images
- [Google Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) — for the PWA to Android conversion

- [Netlify](https://netlify.com) — for hosting

---

<div align="center">
Made with ❤️ and a love for the cosmos — Aman kumar Singh
</div>
