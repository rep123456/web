"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CallLink from "@/components/CallLink";
import { SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

type EmergencyCTAProps = {
  compact?: boolean;
};

export default function EmergencyCTA({ compact }: EmergencyCTAProps) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const title = isEnglish ? "Prefer to talk to us?" : "Lieber direkt anrufen?";
  const description = isEnglish
    ? "For urgent questions or if you’re unsure whether a repair is worthwhile, give us a quick call."
    : "Bei dringenden Fragen oder wenn Sie unsicher sind, ob sich eine Reparatur lohnt, rufen Sie uns einfach an.";
  const callLabel = isEnglish ? "Call now" : "Jetzt anrufen";
  const contactLabel = isEnglish ? "Online enquiry" : "Online Anfrage";

  const baseClasses =
    "rounded-3xl border border-slate-200 bg-white shadow-sm";
  const paddingClasses = compact ? "p-4 md:p-5" : "p-6 md:p-7";

  return (
    <div className={`${baseClasses} ${paddingClasses}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            {description}
          </p>
          <p className="mt-2 text-sm font-medium text-slate-900">
            {isEnglish ? "Phone:" : "Telefon:"}{" "}
            <CallLink
              href={SERVICE_PHONE_HREF}
              className="text-brand-dark hover:text-brand"
            >
              {SERVICE_PHONE}
            </CallLink>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <CallLink
            href={SERVICE_PHONE_HREF}
            className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {callLabel}
          </CallLink>
          <Link
            href="/#kontaktformular"
            className="inline-flex items-center justify-center rounded-xl border border-brand/30 bg-white px-4 py-2.5 text-sm font-semibold text-brand-dark shadow-sm hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {contactLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}


