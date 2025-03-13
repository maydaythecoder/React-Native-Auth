import * as Sentry from '@sentry/react-native';

export const initSentry = () => {
  if (!__DEV__) { // Only enable in production builds
    Sentry.init({
      dsn: "https://8de9334dbd2fb39235dbbf8eaf418bab@o4508967046545408.ingest.us.sentry.io/4508967056310272",
      enableNative: false,
      tracesSampleRate: 1.0,
      beforeSend(event) {
        if (event.exception?.values?.[0]?.value?.includes('SplashModule')) {
          return null;
        }
        return event;
      }
    });
  }
};

// Utility function to log errors manually
export const logError = (error: Error, context?: Record<string, any>) => {
  if (__DEV__) {
    console.error(error);
  }
  Sentry.captureException(error, {
    extra: context
  });
};
