
import * as Sentry from '@sentry/react-native';

export const initSentry = () => {
  // You should replace this with your actual Sentry DSN
  // from the Sentry dashboard after setting up your project
  Sentry.init({
    dsn: "https://8de9334dbd2fb39235dbbf8eaf418bab@o4508967046545408.ingest.us.sentry.io/4508967056310272",
    // Enable this for development to verify Sentry is working
    debug: __DEV__, 
    // Set this to 1.0 for development, lower it in production
    tracesSampleRate: 1.0,
    // Add additional context information
    integrations: [],
    sendDefaultPii: true,

    // Optional: Add app version for tracking errors across versions
    // release: "your-app-name@" + process.env.npm_package_version,
  });
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
