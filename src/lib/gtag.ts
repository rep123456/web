const GOOGLE_ADS_ID = "AW-17749754706";
const CLICK_TO_CALL_SEND_TO = "AW-17749754706/sOWrCNefhqAcENKG349C";
const FORM_CONVERSION_SEND_TO = "AW-17749754706/ye4TCPOshqAcENKG349C";

/**
 * Fires Google Ads conversion event for click-to-call.
 * Safe to call from client only; no-op during SSR or if gtag is not loaded.
 */
export function trackGoogleAdsCallConversion(url?: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  const callback = () => {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };

  window.gtag("event", "conversion", {
    send_to: CLICK_TO_CALL_SEND_TO,
    value: 1.0,
    currency: "EUR",
    event_callback: callback,
  });
}

/**
 * Fires GA4 generate_lead and Google Ads conversion after successful contact form submission.
 * Call only on client after successful API response.
 */
export function trackContactFormSuccess(): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "generate_lead", {
    event_category: "Contact",
    event_label: "Contact Form Submission",
  });
  window.gtag("event", "conversion", {
    send_to: FORM_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "EUR",
  });
}

export { GOOGLE_ADS_ID };
