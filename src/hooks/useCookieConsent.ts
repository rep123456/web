"use client";

import { useCallback, useEffect, useState } from "react";

export type CookieConsent = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

type UseCookieConsentReturn = {
  consent: CookieConsent | null;
  isReady: boolean;
  hasConsent: boolean;
  updateConsent: (consent: CookieConsent) => void;
  acceptAll: () => void;
  acceptNecessaryOnly: () => void;
};

const STORAGE_KEY = "cookie_consent";

function parseStoredConsent(value: string | null): CookieConsent | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value);
    if (!parsed || typeof parsed !== "object") return null;

    return {
      necessary: true,
      statistics: Boolean((parsed as CookieConsent).statistics),
      marketing: Boolean((parsed as CookieConsent).marketing),
    };
  } catch {
    return null;
  }
}

export function useCookieConsent(): UseCookieConsentReturn {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed = parseStoredConsent(stored);

    if (parsed) {
      setConsent(parsed);
    }

    setIsReady(true);
  }, []);

  const updateConsent = useCallback((next: CookieConsent) => {
    setConsent(next);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }, []);

  const acceptAll = useCallback(() => {
    updateConsent({
      necessary: true,
      statistics: true,
      marketing: true,
    });
  }, [updateConsent]);

  const acceptNecessaryOnly = useCallback(() => {
    updateConsent({
      necessary: true,
      statistics: false,
      marketing: false,
    });
  }, [updateConsent]);

  return {
    consent,
    isReady,
    hasConsent: !!consent,
    updateConsent,
    acceptAll,
    acceptNecessaryOnly,
  };
}

