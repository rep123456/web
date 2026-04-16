"use client";

import Link from "next/link";
import { useState } from "react";
import { trackContactFormSuccess } from "@/lib/gtag";

type Status = "idle" | "sending" | "success" | "error";
type Lang = "de" | "en";

const translations = {
  de: {
    title: "Schnellanfrage – wir rufen Sie zurück!",
    intro: "Hinterlassen Sie uns Ihre Kontaktdaten und eine kurze Problembeschreibung. Unser Service-Team meldet sich so rasch wie möglich telefonisch bei Ihnen.",
    firstName: "Vorname",
    lastName: "Nachname",
    phone: "Telefonnummer",
    email: "E-Mail-Adresse",
    location: "Standort / PLZ",
    appliance: "Gerätetyp",
    message: "Problembeschreibung",
    placeholderFirst: "Max",
    placeholderLast: "Mustermann",
    placeholderPhone: "+43 ...",
    placeholderEmail: "email@example.com",
    placeholderLocation: "Hamburg, 20095",
    placeholderMessage: "Beschreiben Sie kurz das Problem mit Ihrem Gerät...",
    selectPlaceholder: "Bitte wählen...",
    appliances: {
      washer: "Waschmaschine",
      dishwasher: "Geschirrspüler",
      fridge: "Kühlschrank / Gefrierschrank",
      oven: "Backofen / Herd",
      electricCooker: "Elektroherd",
      microwave: "Mikrowelle",
      dryer: "Trockner",
      other: "Anderes Gerät",
    },
    privacy: "Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer",
    privacyLink: "Datenschutzerklärung",
    privacySuffix: "zu.",
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    success: "Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns in Kürze bei Ihnen.",
    errorRequired: "Bitte füllen Sie alle Pflichtfelder aus.",
    errorGeneric: "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.",
    errorNetwork: "Anfrage konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung.",
  },
  en: {
    title: "Quick enquiry – we’ll call you back!",
    intro: "Leave your contact details and a short description of the problem. Our service team will get back to you by phone as soon as possible.",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone number",
    email: "Email address",
    location: "Location / postcode",
    appliance: "Appliance type",
    message: "Problem description",
    placeholderFirst: "John",
    placeholderLast: "Smith",
    placeholderPhone: "+43 ...",
    placeholderEmail: "email@example.com",
    placeholderLocation: "Hamburg, 20095",
    placeholderMessage: "Briefly describe the problem with your appliance...",
    selectPlaceholder: "Please select...",
    appliances: {
      washer: "Washing machine",
      dishwasher: "Dishwasher",
      fridge: "Fridge / freezer",
      oven: "Oven / cooker",
      electricCooker: "Electric cooker",
      microwave: "Microwave",
      dryer: "Dryer",
      other: "Other appliance",
    },
    privacy: "By submitting you agree to the processing of your data in accordance with our",
    privacyLink: "Privacy policy",
    privacySuffix: ".",
    submit: "Send enquiry",
    sending: "Sending…",
    success: "Thank you! Your enquiry has been sent. We’ll get back to you shortly.",
    errorRequired: "Please fill in all required fields.",
    errorGeneric: "Something went wrong. Please try again later.",
    errorNetwork: "Enquiry could not be sent. Please check your connection.",
  },
} as const;

type ApplianceKey = keyof (typeof translations)["de"]["appliances"];

type ContactFormProps = {
  lang?: Lang;
  defaultApplianceKey?: ApplianceKey;
};

export default function ContactForm({ lang = "de", defaultApplianceKey }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const t = translations[lang];
  const applianceOptions = t.appliances;
  const defaultApplianceValue = defaultApplianceKey ? applianceOptions[defaultApplianceKey] : "";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      vorname: (form.elements.namedItem("firstName") as HTMLInputElement).value.trim(),
      nachname: (form.elements.namedItem("lastName") as HTMLInputElement).value.trim(),
      telefon: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      plz: (form.elements.namedItem("location") as HTMLInputElement).value.trim(),
      geraetetyp: (form.elements.namedItem("appliance") as HTMLSelectElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    if (!data.vorname || !data.nachname || !data.telefon || !data.email || !data.plz || !data.geraetetyp || !data.message) {
      setStatus("error");
      setErrorMessage(t.errorRequired);
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json?.success) {
        setStatus("error");
        setErrorMessage(json.error || t.errorGeneric);
        return;
      }
      setStatus("success");
      

// Google Ads conversion event
if (typeof window !== "undefined" && window.gtag) {
  window.gtag("event", "conversion", {
    send_to: "AW-17863468955/8e1CCIhb-PsbEJvP-8VC",
    value: 1.0,
    currency: "EUR"
  });
}
      form.reset();
      trackContactFormSuccess();
    } catch {
      setStatus("error");
      setErrorMessage(t.errorNetwork);
    }
  }

  const privacyHref = "/datenschutz";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur-sm">
      <div className="border-b border-slate-100 px-6 pb-5 pt-7 sm:px-9">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {t.title}
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          {t.intro}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-7 px-6 py-7 sm:px-9 sm:py-8">
        {status === "success" && (
          <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {t.success}
          </div>
        )}
        {status === "error" && errorMessage && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
            {errorMessage}
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t.firstName} *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder={t.placeholderFirst}
              required
              disabled={status === "sending"}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t.lastName} *
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder={t.placeholderLast}
              required
              disabled={status === "sending"}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t.phone} *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t.placeholderPhone}
              required
              disabled={status === "sending"}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t.email} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.placeholderEmail}
              required
              disabled={status === "sending"}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="location" className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t.location} *
            </label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder={t.placeholderLocation}
              required
              disabled={status === "sending"}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="appliance" className="text-xs font-medium uppercase tracking-wide text-slate-600">
              {t.appliance} *
            </label>
            <select
              id="appliance"
              name="appliance"
              required
              disabled={status === "sending"}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
              defaultValue={defaultApplianceValue || ""}
            >
              <option value="" disabled>
                {t.selectPlaceholder}
              </option>
              <option value={applianceOptions.washer}>{applianceOptions.washer}</option>
              <option value={applianceOptions.dishwasher}>{applianceOptions.dishwasher}</option>
              <option value={applianceOptions.fridge}>{applianceOptions.fridge}</option>
              <option value={applianceOptions.oven}>{applianceOptions.oven}</option>
              <option value={applianceOptions.electricCooker}>{applianceOptions.electricCooker}</option>
              <option value={applianceOptions.microwave}>{applianceOptions.microwave}</option>
              <option value={applianceOptions.dryer}>{applianceOptions.dryer}</option>
              <option value={applianceOptions.other}>{applianceOptions.other}</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-slate-600">
            {t.message} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t.placeholderMessage}
            required
            disabled={status === "sending"}
            className="block w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            {t.privacy}{" "}
            <Link href={privacyHref} className="font-medium text-brand hover:text-brand-dark">
              {t.privacyLink}
            </Link>{" "}
            {t.privacySuffix}
          </p>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60"
          >
            {status === "sending" ? t.sending : t.submit}
          </button>
        </div>
      </form>
    </div>
  );
}
