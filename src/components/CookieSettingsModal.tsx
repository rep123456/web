"use client";

import { useEffect, useState } from "react";
import type { CookieConsent } from "@/hooks/useCookieConsent";

type Props = {
  isOpen: boolean;
  initialConsent: CookieConsent;
  onSave: (consent: CookieConsent) => void;
  onCancel: () => void;
};

export default function CookieSettingsModal({
  isOpen,
  initialConsent,
  onSave,
  onCancel,
}: Props) {
  const [localConsent, setLocalConsent] = useState<CookieConsent>(initialConsent);

  useEffect(() => {
    if (isOpen) {
      setLocalConsent(initialConsent);
    }
  }, [initialConsent, isOpen]);

  if (!isOpen) return null;

  const handleToggle = (key: "statistics" | "marketing") => {
    setLocalConsent((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    onSave(localConsent);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-slate-900">
          Cookie-Einstellungen
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Hier können Sie optionale Cookies für Statistiken und Marketing
          anpassen. Notwendige Cookies sind für den Betrieb der Website immer
          aktiv.
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-slate-900">
                Notwendige Cookies
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Erforderlich, um die Website und das Anfrageformular technisch
                bereitzustellen. Diese können nicht deaktiviert werden.
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
              Immer aktiv
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleToggle("statistics")}
            className="flex w-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <div>
              <p className="text-sm font-medium text-slate-900">
                Statistik (z.&nbsp;B. Google Analytics)
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Hilft uns zu verstehen, wie unsere Website für
                Haushaltsgeräte-Reparaturen genutzt wird, um sie laufend zu
                verbessern.
              </p>
            </div>
            <span
              className={`inline-flex h-6 w-11 items-center rounded-full transition ${
                localConsent.statistics ? "bg-brand" : "bg-slate-300"
              }`}
            >
              <span
                className={`h-5 w-5 rounded-full bg-white shadow transition ${
                  localConsent.statistics ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleToggle("marketing")}
            className="flex w-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <div>
              <p className="text-sm font-medium text-slate-900">
                Marketing
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Wird künftig für personalisierte Angebote und Remarketing
                verwendet (z.&nbsp;B. Werbeanzeigen).
              </p>
            </div>
            <span
              className={`inline-flex h-6 w-11 items-center rounded-full transition ${
                localConsent.marketing ? "bg-brand" : "bg-slate-300"
              }`}
            >
              <span
                className={`h-5 w-5 rounded-full bg-white shadow transition ${
                  localConsent.marketing ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </span>
          </button>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Abbrechen
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}

