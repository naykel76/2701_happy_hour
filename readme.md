
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



## Splash Screens and Icons

https://capacitorjs.com/docs/apis/splash-screen

```bash
# install packages
npm install @capacitor/assets --save-dev
npm install @capacitor/splash-screen
# generate assets from resource dir
npx capacitor-assets generate --android
# (copy + update) an Ionic project
ionic capacitor sync android
```




```bash
npm install @capacitor/geolocation
npm install @capacitor/google-maps
npx cap sync
```
