import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import CallLink from "@/components/CallLink";
import { SERVICE_EMAIL, SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GeräteProfi for household appliance repairs in Austria. Phone, email or quick enquiry – we’ll get back to you soon.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-6 md:pb-12 md:pt-12 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">Contact</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            How to reach us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Broken washing machine, faulty dishwasher or another issue with your
            appliance? Call us, send an email or use the contact form – we’ll
            get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Phone & email
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Our service team is here for you. For urgent cases we recommend
                calling.
              </p>
              <div className="mt-5 space-y-4 text-sm">
                <p>
                  <span className="font-medium text-slate-700">Phone:</span>{" "}
                  <CallLink
                    href={SERVICE_PHONE_HREF}
                    className="font-medium text-brand-dark hover:text-brand"
                  >
                    {SERVICE_PHONE}
                  </CallLink>
                </p>
                <p>
                  <span className="font-medium text-slate-700">Email:</span>{" "}
                  <a
                    href={`mailto:${SERVICE_EMAIL}`}
                    className="font-medium text-brand-dark hover:text-brand"
                  >
                    {SERVICE_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                About the contact form
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Please give as much detail as you can – appliance type, brand,
                model and a short description of the fault. That way we can
                call you back sooner and prepare for the visit.
              </p>
            </div>
          </div>

          <div id="kontaktformular">
            <ContactForm lang="en" />
          </div>
        </div>
      </section>
    </div>
  );
}
