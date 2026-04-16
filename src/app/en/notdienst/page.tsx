import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency service",
  description:
    "Emergency repair for household appliances in Austria – fridge down, washing machine leaking? Fast help evenings and weekends. Transparent emergency surcharges.",
};

const urgentCases = [
  {
    title: "Fridge or freezer not working",
    description: "Food at risk – we’ll try to get to you quickly.",
  },
  {
    title: "Washing machine leaking or not draining",
    description: "Avoid water damage – we prioritise leaks.",
  },
  {
    title: "Dishwasher leaking",
    description: "Water in the machine or on the floor – we’ll check and secure it.",
  },
  {
    title: "Other urgent breakdowns",
    description: "If you can’t manage without the appliance, you can use our emergency service.",
  },
];

const steps = [
  {
    step: 1,
    title: "Call",
    text: "Call our emergency number. You’ll reach us directly – no call centre. We’ll briefly clarify the problem and agree a time slot.",
  },
  {
    step: 2,
    title: "Call-out & diagnosis",
    text: "A technician comes to you. Call-out and diagnosis are charged as an emergency fee – we’ll tell you the amount on the phone.",
  },
  {
    step: 3,
    title: "Quote & repair",
    text: "After the check you’ll get a clear quote. We only carry out the repair once you’ve agreed.",
  },
];

export default function EmergencyPage() {
  return (
    <div className="bg-slate-50">
      {/* Hero with phone CTA */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-brand-dark to-brand text-brand-light">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-light/90">
            Emergency – household appliances
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            Urgent breakdown? We’ll come quickly.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-light/90 sm:text-lg">
            The emergency service is currently not available. For urgent issues,
            please send us an enquiry via the contact form – we will try to find
            the earliest possible appointment during normal service hours.
          </p>
          <div className="mt-8" />
        </div>
      </section>

      {/* When to use emergency */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          When is the emergency service right for you?
        </h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          In these situations it’s worth calling our emergency line – we’ll
          prioritise you and try to come as soon as possible.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {urgentCases.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-sm font-semibold text-brand-dark">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How the emergency service works
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Three steps from your call to the completed repair.
          </p>
          <ol className="mt-8 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            {steps.map((s) => (
              <li
                key={s.step}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Availability & costs */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Availability & service areas
            </h2>
            <p className="mt-3 text-slate-600">
              Our emergency service is available on weekday evenings and at
              weekends. We come to you in Hamburg and many regions around Hamburg.
              Whether we can travel to your location and in what time frame is
              something we’ll clarify on the phone.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Please call – we can’t coordinate time-critical jobs by email or
              contact form.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Emergency surcharge & transparency
            </h2>
            <p className="mt-3 text-slate-600">
              For the emergency service we charge a surcharge on call-out and
              diagnosis. We’ll tell you the exact amount on the phone before
              arranging an appointment, so you know what to expect from the
              start.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              The repair itself is carried out as usual after a quote – you
              decide in your own time whether to go ahead.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            Emergency service currently not available
          </h2>
          <p className="mt-3 text-slate-600">
            For all enquiries – including urgent ones – please use our{" "}
            <Link href="/en/kontakt" className="font-medium text-brand-dark hover:text-brand">
              contact page
            </Link>{" "}
            or the{" "}
            <Link href="/en#kontaktformular" className="font-medium text-brand-dark hover:text-brand">
              contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
