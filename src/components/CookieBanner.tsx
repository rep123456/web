"use client";

/// <reference path="../gtag.d.ts" />
import Link from "next/link";
import { useState } from "react";
import {
  useCookieConsent,
  type CookieConsent,
} from "@/hooks/useCookieConsent";
import CookieSettingsModal from "@/components/CookieSettingsModal";

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  statistics: false,
  marketing: false,
};

export default function CookieBanner() {
  const {
    consent,
    isReady,
    hasConsent,
    acceptAll,
    acceptNecessaryOnly,
    updateConsent,
  } = useCookieConsent();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  if (!isReady) {
    // Avoid layout shift / hydration mismatch until localStorage has been checked
    return null;
  }

  const effectiveConsent = consent ?? DEFAULT_CONSENT;

  const handleSaveSettings = (next: CookieConsent) => {
    updateConsent(next);
    if (typeof window !== "undefined" && window.updateConsent) {
      window.updateConsent(
        next.statistics === true || next.marketing === true
      );
    }
    setIsSettingsOpen(false);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleAcceptAll = () => {
    acceptAll();
    if (typeof window !== "undefined" && window.updateConsent) {
      window.updateConsent(true);
    }
  };

  const handleAcceptNecessaryOnly = () => {
    acceptNecessaryOnly();
    if (typeof window !== "undefined" && window.updateConsent) {
      window.updateConsent(false);
    }
  };

  return (
    <>
      <CookieSettingsModal
        isOpen={isSettingsOpen}
        initialConsent={effectiveConsent}
        onSave={handleSaveSettings}
        onCancel={handleCloseSettings}
      />

      {!hasConsent && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 shadow-[0_-2px_12px_rgba(15,23,42,0.15)] backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-900">
                Cookie-Hinweis
              </p>
              <p className="text-xs text-slate-600 sm:text-[13px]">
                Wir verwenden Cookies, um unsere Website zuverlässig zu
                betreiben und zu verbessern. Mehr dazu in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="font-medium text-brand underline underline-offset-2 hover:text-brand/90"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>

            <div className="mt-1 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={handleAcceptNecessaryOnly}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-xs"
              >
                Nur notwendig
              </button>
              <button
                type="button"
                onClick={handleOpenSettings}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-xs"
              >
                Auswahl
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="inline-flex items-center justify-center rounded-full bg-brand px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-xs"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

