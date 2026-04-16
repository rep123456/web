import Image from "next/image";
import Link from "next/link";
import CallLink from "@/components/CallLink";
import { SERVICE_EMAIL, SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

const LOGO_VERSION = "20260416-1250";

const footerLinks = {
  services: [
    { href: "/services/waschmaschinen-reparatur", label: "Waschmaschine" },
    { href: "/services/geschirrspueler-reparatur", label: "Geschirrspüler" },
    { href: "/services/kuehlschrank-reparatur", label: "Kühlschrank" },
    { href: "/services/backofen-reparatur", label: "Herd & Backofen" },
    { href: "/services/trockner-reparatur", label: "Trockner" },
    { href: "/services/altgeraete-entsorgen", label: "Altgeräte Entsorgen" },
  ],
  company: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  legal: [],
};

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={`/logo_repair_expert.png?v=${LOGO_VERSION}`}
                alt="Rrepair Expert"
                width={249}
                height={68}
                className="h-[68px] w-auto logo-tint-brand"
                quality={100}
                sizes="249px"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Schnelle, faire und transparente Hilfe für Waschmaschinen,
              Geschirrspüler, Kühlschränke, Backöfen und Trockner – direkt
              bei Ihnen vor Ort.
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-700">Telefon:</span>{" "}
                <CallLink
                  href={SERVICE_PHONE_HREF}
                  className="font-medium text-brand-dark hover:text-brand"
                >
                  {SERVICE_PHONE}
                </CallLink>
              </p>
              <p>
                <span className="font-medium text-slate-700">E-Mail:</span>{" "}
                <a
                  href={`mailto:${SERVICE_EMAIL}`}
                  className="font-medium text-brand-dark hover:text-brand"
                >
                  {SERVICE_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Leistungen
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Recht & Info
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex md:items-center md:justify-between">
          <p>
            <span className="block">© 2026 GeräteProfi Kundendienst. Alle Rechte vorbehalten.</span>
            <span className="mt-1 block">
              <Link href="/impressum" className="hover:text-brand hover:underline">
                Impressum
              </Link>
              <span className="mx-2 text-slate-300" aria-hidden="true">
                |
              </span>
              <Link href="/datenschutz" className="hover:text-brand hover:underline">
                Datenschutz
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}


