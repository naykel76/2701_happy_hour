import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'xzy.nathanwatts.happy_hour',
    appName: 'Happy Hour',
    webDir: 'www',
    server: {
        androidScheme: 'https'
    },
    plugins: {
        SplashScreen: {
            launchShowDuration: 3000,
            // launchAutoHide: true,
            // launchFadeOutDuration: 3000,
            // backgroundColor: "#ffd000",
            // androidSplashResourceName: "splash",
            // androidScaleType: "CENTER_CROP",
            // showSpinner: true,
            // androidSpinnerStyle: "large",
            // iosSpinnerStyle: "small",
            // spinnerColor: "#999999",
            // splashFullScreen: true,
            // splashImmersive: true,
            // layoutName: "launch_screen",
            // useDialog: true,
        },
    },
};

export default config;
