import type { Metadata } from "next";
import Link from "next/link";
import EmergencyCTA from "@/components/common/EmergencyCTA";

export const metadata: Metadata = {
  title: "About us",
  description:
    "GeräteProfi – Your partner for household appliance repairs in Austria. Experienced technicians, fair prices, fast service. Learn more about us.",
};

const values = [
  {
    title: "Speed",
    description:
      "Appointments usually within 24 hours. For urgent cases – e.g. refrigeration – we aim for the same day.",
    icon: "⚡",
  },
  {
    title: "Transparency",
    description:
      "Fixed rates for call-out and diagnosis. Before any repair you receive a binding quote – no surprises.",
    icon: "€",
  },
  {
    title: "Quality",
    description:
      "Experienced technicians, quality parts and warranty on our work. We repair for the long term, not just a quick fix.",
    icon: "✓",
  },
  {
    title: "Customer focus",
    description:
      "We come to you. Personal advice, clear communication and someone who takes you seriously.",
    icon: "👤",
  },
];

const highlights = [
  "Repairs for all major brands – AEG, Bosch, Miele, Siemens, Bauknecht and more",
  "Fixed price for call-out and diagnosis – then you decide in peace",
  "Emergency service for urgent cases – evenings and weekends",
  "Warranty on parts and work carried out",
];

export default function AboutUsEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-6 md:pb-16 md:pt-14 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">About us</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]">
            Who we are – and why you can trust us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            GeräteProfi stands for fast, fair and transparent repairs of
            household appliances in Austria. We come to you – with experienced
            technicians, clear pricing and the aim of getting your appliance
            running reliably again.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Our mission
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              When the washing machine stops, the dishwasher no longer cleans
              or the fridge gets warm, you need reliable help. That’s what we’re
              here for: we repair household appliances from all major brands –
              at your home, at fair prices and with no hidden costs.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our goal is simple: your appliance should work reliably again. We
              rely on qualified technicians, quality parts and honest advice. If
              a repair isn’t economical, we’ll tell you – and help you decide.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              What we offer
            </h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {highlights.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What we stand for
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Four principles we follow for every repair.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-brand/30 hover:shadow-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-xl text-brand-dark">
                  {v.icon}
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Why customers choose us
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            We know that broken appliances mean stress. So we focus on clear
            processes, straightforward communication and fair value.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light font-semibold text-brand-dark">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Clear communication
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  You know what’s needed and what it costs before we start. No
                  fine print, no hidden charges.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light font-semibold text-brand-dark">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Fair pricing</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Fixed rate for call-out and diagnosis. The repair quote is
                  binding – you decide in your own time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light font-semibold text-brand-dark">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Quality & warranty
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Parts and work are covered. We repair so your appliance runs
                  reliably again for a long time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-10">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Questions or need a repair?
          </h2>
          <p className="mt-3 text-slate-600">
            Call us or send an online enquiry – we’ll get back to you soon.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#kontaktformular"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Online enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6 lg:px-8" />
    </div>
  );
}
