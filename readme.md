
## Getting started

```bash
# Add the android platform to your Ionic project
ionic capacitor add android
# Build an Ionic project for the android platform
ionic capacitor build android
# Open android studio IDE
ionic capacitor open android
# run emulator, takes some time so be patient!
# according to the docs this runs `build`
ionic capacitor run android -l --external
```


#### Sync (copy + update) an Ionic project

```bash
ionic capacitor sync android
```


```bash
npm install @capacitor/geolocation
npm install @capacitor/google-maps
npx cap sync
```

## Splash Screens and Icons

```bash
npm install @capacitor/assets --save-dev
npx capacitor-assets generate --android
npm install @capacitor/splash-screen
npx cap sync
```
