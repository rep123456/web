const GOOGLE_ADS_ID = "AW-17863468955";
const CLICK_TO_CALL_SEND_TO = "AW-17863468955/Pv3hCL_qif4bEJvP-8VC";
/** Replace with your form conversion label from Google Ads when available. */
const FORM_CONVERSION_SEND_TO = "AW-17863468955/_80ICJWg7_sbEJvP-8VC";

/**
 * Fires Google Ads conversion event for click-to-call.
 * Safe to call from client only; no-op during SSR or if gtag is not loaded.
 */
export function trackGoogleAdsCallConversion(): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: CLICK_TO_CALL_SEND_TO,
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
  });
}

export { GOOGLE_ADS_ID };
