import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import EmergencyCTA from "@/components/common/EmergencyCTA";
import CallLink from "@/components/CallLink";
import { SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Repair Austria",
  description:
    "Appliance repair in Austria – washing machines, dishwashers, fridges, ovens, dryers. Fast, transparent, experienced technicians.",
};

export default function HomeEn() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
          <div className="mx-auto max-w-xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-light/40 px-3 py-1 text-xs font-semibold text-brand-dark ring-1 ring-brand/20">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[0.65rem] text-white">
                ✓
              </span>
              <span>GeräteProfi appliance service Hamburg</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              Appliance
              <br />
              <span className="text-brand">Repair</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Our technicians come to your home – transparent pricing, honest advice and specialist repairs for all common household appliances.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallLink
                href={SERVICE_PHONE_HREF}
                className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 3.5L6.5 3.25L8 6.75L6.25 7.75C6.83282 9.17223 7.82777 10.4172 9.25 11L10.25 9.25L13.75 10.75L13.5 12.5C13.3895 13.2312 12.7688 13.8105 12.0376 13.921L11.25 14C8.35051 13.8421 6.1579 12.6495 4.75 11.25C3.35051 9.8421 2.1579 7.64949 2 4.75L2.07902 3.96236C2.18949 3.23116 2.76884 2.61051 3.5 2.5L4.75 3.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                Call now: {SERVICE_PHONE}
              </CallLink>
              <Link
                href="/#kontaktformular"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Online request
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Mon–Fri 08:00–18:00 · Service across Hamburg
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 px-4 text-sm text-slate-600 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark">✓</span>
            <div className="min-w-0 text-left">
              <dt className="font-semibold text-slate-900">Fast response</dt>
              <dd className="mt-0.5">Appointments usually within 24 hours</dd>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark">€</span>
            <div className="min-w-0 text-left">
              <dt className="font-semibold text-slate-900">Transparent pricing</dt>
              <dd className="mt-0.5">Fixed call-out & diagnosis fee</dd>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark">★</span>
            <div className="min-w-0 text-left">
              <dt className="font-semibold text-slate-900">Experienced technicians</dt>
              <dd className="mt-0.5">Multi-brand know‑how</dd>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form intro (English only, reuse German form from /) */}
      <section
        id="kontaktformular"
        className="mx-auto -mt-4 max-w-5xl px-4 pb-8 md:-mt-8 md:px-8 lg:px-10"
      >
        <div className="rounded-3xl border border-slate-200 bg-white/95 px-6 py-7 shadow-lg backdrop-blur-sm sm:px-9 sm:py-8">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Quick inquiry – we&apos;ll call you back!
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Use the short German form on our main page to request a callback.
            Our team also speaks English and can answer your questions about the
            repair.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/#kontaktformular"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Open callback form
            </Link>
          </div>
        </div>
      </section>

      {/* Services summary (English descriptions) */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Our appliance repair services
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Specialised technicians for all common household appliances –
              trained across many brands and working with genuine or
              equivalent‑quality spare parts.
            </p>
          </div>
          <Link
            href="/services"
            className="mt-2 text-sm font-semibold text-brand-dark hover:text-brand"
          >
            View all services (German)
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Oven repair"
            description="If your oven no longer heats properly or bakes unevenly, we calibrate, repair or replace defective components."
            href="/services/backofen-reparatur"
            imageSrc="/Oven.jpg"
            imageAlt="Oven repair"
          />
          <ServiceCard
            title="Washing machine repair"
            description="We fix draining issues, loud noises, error codes and more – so your laundry runs smoothly again."
            href="/services/waschmaschinen-reparatur"
            imageSrc="/washaingmachine.jpg"
            imageAlt="Washing machine repair"
          />
          <ServiceCard
            title="Dryer repair"
            description="Dryer not heating, stopping mid‑cycle or taking too long? We check heating, sensors and air flow."
            href="/services/trockner-reparatur"
            imageSrc="/dryperrepair.jpeg"
            imageAlt="Dryer repair"
          />
          <ServiceCard
            title="Electric cooker repair"
            description="We repair faulty hotplates, heating elements and temperature controls on electric cookers directly at your home."
            href="/services/backofen-reparatur"
            imageSrc="/Elektroherd.png"
            imageAlt="Electric cooker repair"
          />
          <ServiceCard
            title="Microwave repair"
            description="If your microwave no longer heats evenly, the turntable stops or strange noises occur, we check the electronics, door safety switches and magnetron."
            href="/en/services/microwave-repair"
            imageSrc="/microwave.jpg"
            imageAlt="Microwave repair"
          />
          <ServiceCard
            title="Old appliance disposal"
            description="Professional and environmentally responsible disposal of old and defective appliances. We collect your appliance and ensure proper recycling according to legal regulations."
            href="/en/services/old-appliance-disposal"
            imageSrc="/altgeräte.png"
            imageAlt="Old appliance disposal"
          />
          <ServiceCard
            title="Dishwasher repair"
            description="Poor cleaning results, stopped programmes or leaking water – we diagnose and fix the cause on site."
            href="/en/services/geschirrspueler-reparatur"
            imageSrc="/dishwasher.jpg"
            imageAlt="Dishwasher repair"
          />
          <ServiceCard
            title="Fridge repair"
            description="Temperature problems, heavy ice build‑up or unusual compressor noises – we react quickly to protect your food."
            href="/en/services/kuehlschrank-reparatur"
            imageSrc="/Refrigerator.jpg"
            imageAlt="Fridge repair"
          />
        </div>
      </section>

      {/* Reuse existing German sections for process & FAQ */}
    </div>
  );
}

