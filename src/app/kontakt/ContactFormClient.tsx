"use client";

import { useState } from "react";

export default function ContactFormClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const allFilled =
      firstName.trim() &&
      lastName.trim() &&
      phone.trim() &&
      email.trim() &&
      location.trim() &&
      deviceType.trim() &&
      message.trim();

    if (!allFilled || !email.includes("@")) {
      setErrorMessage("Bitte alle Pflichtfelder korrekt ausfüllen.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          phone,
          message: `Name: ${firstName} ${lastName}
Telefon: ${phone}
Standort: ${location}
Gerätetyp: ${deviceType}

Problembeschreibung:
${message}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSuccessMessage("Anfrage erfolgreich gesendet!");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setLocation("");
      setDeviceType("");
      setMessage("");
    } catch {
      setErrorMessage("E-Mail konnte nicht gesendet werden.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur-sm">
      <div className="border-b border-slate-100 px-6 pb-5 pt-7 sm:px-9">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Schnellanfrage – wir rufen Sie zurück!
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Hinterlassen Sie uns Ihre Kontaktdaten und eine kurze Problembeschreibung. Unser Service-Team meldet sich so rasch wie möglich
          telefonisch bei Ihnen.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7 px-6 py-7 sm:px-9 sm:py-8">
        {successMessage && (
          <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
            {errorMessage}
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="vorname"
              className="text-xs font-medium uppercase tracking-wide text-slate-600"
            >
              Vorname *
            </label>
            <input
              id="vorname"
              name="vorname"
              type="text"
              placeholder="Max"
              required
              disabled={loading}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="nachname"
              className="text-xs font-medium uppercase tracking-wide text-slate-600"
            >
              Nachname *
            </label>
            <input
              id="nachname"
              name="nachname"
              type="text"
              placeholder="Mustermann"
              required
              disabled={loading}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="telefonnummer"
              className="text-xs font-medium uppercase tracking-wide text-slate-600"
            >
              Telefonnummer *
            </label>
            <input
              id="telefonnummer"
              name="telefonnummer"
              type="tel"
              placeholder="+49 ..."
              required
              disabled={loading}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-wide text-slate-600"
            >
              E-Mail-Adresse *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              required
              disabled={loading}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label
              htmlFor="standort_plz"
              className="text-xs font-medium uppercase tracking-wide text-slate-600"
            >
              Standort / PLZ *
            </label>
            <input
              id="standort_plz"
              name="standort_plz"
              type="text"
              placeholder="Hamburg, 20095"
              required
              disabled={loading}
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="geraetetyp"
              className="text-xs font-medium uppercase tracking-wide text-slate-600"
            >
              Gerätetyp *
            </label>
            <input
              id="geraetetyp"
              name="geraetetyp"
              type="text"
              placeholder="Waschmaschine, Geschirrspüler, ..."
              required
              disabled={loading}
              value={deviceType}
              onChange={(event) => setDeviceType(event.target.value)}
              className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="problembeschreibung"
            className="text-xs font-medium uppercase tracking-wide text-slate-600"
          >
            Problembeschreibung *
          </label>
          <textarea
            id="problembeschreibung"
            name="problembeschreibung"
            rows={4}
            placeholder="Beschreiben Sie kurz das Problem mit Ihrem Gerät..."
            required
            disabled={loading}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition focus:border-brand focus:bg-white focus:ring-1 focus:ring-brand disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
            <a
              href="/datenschutz"
              className="font-medium text-brand-dark hover:text-brand"
            >
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Wird gesendet..." : "Anfrage senden"}
          </button>
        </div>
      </form>
    </div>
  );
}

