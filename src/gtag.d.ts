declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    updateConsent?: (granted: boolean) => void;
  }
}

export {};
