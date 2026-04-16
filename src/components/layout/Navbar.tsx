"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CallLink from "@/components/CallLink";
import { SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

const LOGO_VERSION = "20260416-1250";

const navLinks = [
  { href: "/", label: "Startseite", enHref: "/en", enLabel: "Home" },
  { href: "/services", label: "Leistungen", enHref: "/en/services", enLabel: "Services", hasDropdown: true },
  { href: "/ueber-uns", label: "Über uns", enHref: "/en/ueber-uns", enLabel: "About us" },
  { href: "/kontakt", label: "Kontakt", enHref: "/en/kontakt", enLabel: "Contact" },
];

const serviceSubLinks = [
  { href: "/services/waschmaschinen-reparatur", label: "Waschmaschinen Reparatur", enHref: "/en/services/waschmaschinen-reparatur", enLabel: "Washing machine repair" },
  { href: "/services/geschirrspueler-reparatur", label: "Geschirrspüler Reparatur", enHref: "/en/services/geschirrspueler-reparatur", enLabel: "Dishwasher repair" },
  { href: "/services/kuehlschrank-reparatur", label: "Kühlschrank Reparatur", enHref: "/en/services/kuehlschrank-reparatur", enLabel: "Fridge repair" },
  { href: "/services/backofen-reparatur", label: "Herd & Backofen Reparatur", enHref: "/en/services/backofen-reparatur", enLabel: "Stove & oven repair" },
  { href: "/services/elektroherd-reparatur", label: "Elektroherd Reparatur", enHref: "/en/services/electric-cooker-repair", enLabel: "Electric cooker repair" },
  { href: "/services/mikrowellen-reparatur", label: "Mikrowellen Reparatur", enHref: "/en/services/microwave-repair", enLabel: "Microwave repair" },
  { href: "/services/trockner-reparatur", label: "Trockner Reparatur", enHref: "/en/services/trockner-reparatur", enLabel: "Dryer repair" },
  { href: "/services/altgeraete-entsorgen", label: "Altgeräte Entsorgen", enHref: "/en/services/old-appliance-disposal", enLabel: "Old appliance disposal" },
];

function classNames(...classes: Array<string | boolean | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Map current path to the same page in the other language (DE ↔ EN). */
function getAlternateLanguageHref(pathname: string, toEnglish: boolean): string {
  if (toEnglish) {
    if (pathname === "/") return "/en";
    if (pathname === "/ueber-uns") return "/en/ueber-uns";
    if (pathname === "/services") return "/en/services";
    if (pathname === "/kontakt") return "/en/kontakt";
    if (pathname === "/services/waschmaschinen-reparatur") return "/en/services/waschmaschinen-reparatur";
    if (pathname === "/services/geschirrspueler-reparatur") return "/en/services/geschirrspueler-reparatur";
    if (pathname === "/services/kuehlschrank-reparatur") return "/en/services/kuehlschrank-reparatur";
    if (pathname === "/services/backofen-reparatur") return "/en/services/backofen-reparatur";
    if (pathname === "/services/elektroherd-reparatur") return "/en/services/electric-cooker-repair";
    if (pathname === "/services/mikrowellen-reparatur") return "/en/services/microwave-repair";
    if (pathname === "/services/trockner-reparatur") return "/en/services/trockner-reparatur";
    if (pathname === "/services/altgeraete-entsorgen") return "/en/services/old-appliance-disposal";
    return "/en";
  } else {
    if (pathname === "/en" || pathname === "/en/") return "/";
    if (pathname === "/en/ueber-uns") return "/ueber-uns";
    if (pathname === "/en/services") return "/services";
    if (pathname === "/en/kontakt") return "/kontakt";
    if (pathname === "/en/services/waschmaschinen-reparatur") return "/services/waschmaschinen-reparatur";
    if (pathname === "/en/services/geschirrspueler-reparatur") return "/services/geschirrspueler-reparatur";
    if (pathname === "/en/services/kuehlschrank-reparatur") return "/services/kuehlschrank-reparatur";
    if (pathname === "/en/services/backofen-reparatur") return "/services/backofen-reparatur";
    if (pathname === "/en/services/electric-cooker-repair") return "/services/elektroherd-reparatur";
    if (pathname === "/en/services/microwave-repair") return "/services/mikrowellen-reparatur";
    if (pathname === "/en/services/trockner-reparatur") return "/services/trockner-reparatur";
    if (pathname === "/en/services/old-appliance-disposal") return "/services/altgeraete-entsorgen";
    return "/";
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isEnglish = pathname.startsWith("/en");
  const hrefDe = getAlternateLanguageHref(pathname, false);
  const hrefEn = getAlternateLanguageHref(pathname, true);

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-4 md:relative md:px-8 lg:px-10">
        <Link href="/" className="flex items-center shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image
            src={`/logo_repair_expert.png?v=${LOGO_VERSION}`}
            alt="Rrepair Expert"
            width={249}
            height={68}
            className="h-[68px] w-auto logo-tint-brand"
            quality={100}
            sizes="249px"
            priority
          />
        </Link>

        <button
          type="button"
          aria-label="Navigation öffnen"
          className="ml-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menü</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2.5 4H13.5M2.5 8H13.5M2.5 12H13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-6 md:flex md:flex-1 md:justify-start">
          {navLinks.map((link) => {
            const href = isEnglish && "enHref" in link ? link.enHref : link.href;
            const label = isEnglish && "enLabel" in link ? link.enLabel : link.label;
            const active =
              href === "/" || href === "/en"
                ? pathname === href
                : pathname === href || pathname.startsWith(href + "/");
            const isServices = "hasDropdown" in link && link.hasDropdown;

            if (isServices) {
              return (
                <div key={href} className="relative group">
                  <Link
                    href={href}
                    className={classNames(
                      "inline-flex items-center gap-0.5 text-sm font-medium tracking-tight transition-colors",
                      active ? "text-brand" : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {label}
                    <svg className="ml-0.5 h-3.5 w-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-full z-50 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-150">
                    <div className="min-w-[220px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                      <Link
                        href={href}
                        className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      >
                        {isEnglish ? "All services" : "Alle Leistungen"}
                      </Link>
                      {serviceSubLinks.map((sub) => {
                        const subHref = isEnglish ? sub.enHref : sub.href;
                        const subLabel = isEnglish ? sub.enLabel : sub.label;
                        const subActive = pathname === subHref;
                        return (
                          <Link
                            key={subHref}
                            href={subHref}
                            className={classNames(
                              "block px-4 py-2 text-sm",
                              subActive ? "bg-brand-light font-medium text-brand-dark" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                            )}
                          >
                            {subLabel}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className={classNames(
                  "text-sm font-medium tracking-tight transition-colors",
                  active ? "text-brand" : "text-slate-600 hover:text-slate-900"
                )}
              >
                {label}
              </Link>
            );
          })}

          <div className="ml-auto flex items-center gap-4 pl-4">
            <div className="flex items-center gap-1 text-sm font-medium" role="group" aria-label="Sprache wählen">
              <Link
                href={hrefDe}
                className={classNames(
                  "px-1.5 py-0.5 transition-colors",
                  !isEnglish ? "text-brand" : "text-slate-400 hover:text-slate-600"
                )}
              >
                DE
              </Link>
              <span className="text-slate-300 select-none" aria-hidden="true">|</span>
              <Link
                href={hrefEn}
                className={classNames(
                  "px-1.5 py-0.5 transition-colors",
                  isEnglish ? "text-brand" : "text-slate-400 hover:text-slate-600"
                )}
              >
                EN
              </Link>
            </div>
            <CallLink
              href={SERVICE_PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 4H6.5C5.67157 4 5 4.67157 5 5.5C5 13.5081 11.4919 20 19.5 20C20.3284 20 21 19.3284 21 18.5V17L17 15.5L15.5 17C13.5 16 12 14.5 11 12.5L12.5 11L11 7H8Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="whitespace-nowrap">{SERVICE_PHONE}</span>
            </CallLink>
          </div>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const href = isEnglish && "enHref" in link ? link.enHref : link.href;
              const label = isEnglish && "enLabel" in link ? link.enLabel : link.label;
              const active =
                href === "/" || href === "/en"
                  ? pathname === href
                  : pathname === href || pathname.startsWith(href + "/");
              const isServices = "hasDropdown" in link && link.hasDropdown;

              if (isServices) {
                return (
                  <div key={href} className="flex flex-col gap-0.5">
                    <Link
                      href={href}
                      className={classNames(
                        "rounded-md px-2 py-2 text-sm font-medium",
                        active ? "bg-brand-light text-brand-dark" : "text-slate-700 hover:bg-slate-50"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                    {serviceSubLinks.map((sub) => {
                      const subHref = isEnglish ? sub.enHref : sub.href;
                      const subLabel = isEnglish ? sub.enLabel : sub.label;
                      const subActive = pathname === subHref;
                      return (
                        <Link
                          key={subHref}
                          href={subHref}
                          className={classNames(
                            "rounded-md py-2 pl-5 pr-2 text-sm",
                            subActive ? "bg-brand-light font-medium text-brand-dark" : "text-slate-600 hover:bg-slate-50"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {subLabel}
                        </Link>
                      );
                    })}
                  </div>
                );
              }

              return (
                <Link
                  key={href}
                  href={href}
                  className={classNames(
                    "rounded-md px-2 py-2 text-sm font-medium",
                    active
                      ? "bg-brand-light text-brand-dark"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-1 border-t border-slate-100 pt-3 text-sm font-medium">
              <Link href={hrefDe} className={classNames("px-2 py-1.5 rounded", !isEnglish ? "text-brand bg-brand-light" : "text-slate-500")} onClick={() => setOpen(false)}>DE</Link>
              <span className="text-slate-300">|</span>
              <Link href={hrefEn} className={classNames("px-2 py-1.5 rounded", isEnglish ? "text-brand bg-brand-light" : "text-slate-500")} onClick={() => setOpen(false)}>EN</Link>
            </div>
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
              <CallLink
                href={SERVICE_PHONE_HREF}
                className="inline-flex items-center justify-center rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
              >
                {SERVICE_PHONE}
              </CallLink>
              <Link
                href="/#kontaktformular"
                className="inline-flex items-center justify-center rounded-xl border border-brand/30 bg-white px-4 py-2 text-sm font-semibold text-brand-dark shadow-sm hover:border-brand hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {isEnglish ? "Online enquiry" : "Online Anfrage"}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

