"use client";

import { trackGoogleAdsCallConversion } from "@/lib/gtag";

type CallLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Client-only link for tel: that fires Google Ads click-to-call conversion.
 * Renders a normal <a>; conversion is sent on click without blocking navigation.
 */
export default function CallLink({ href, onClick, children, ...rest }: CallLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href) {
      e.preventDefault();
      trackGoogleAdsCallConversion(href);
      // Fallback navigation in case event_callback does not fire quickly enough.
      window.setTimeout(() => {
        window.location.href = href;
      }, 800);
    } else {
      trackGoogleAdsCallConversion();
    }
    onClick?.(e);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
