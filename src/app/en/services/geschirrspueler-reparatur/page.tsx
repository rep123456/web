import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Dishwasher Repair",
  description:
    "Dishwasher repair in Austria – diagnosis for pump problems, leaks and electronic faults. Transparent fixed prices and professional on-site repair.",
};

const issues = [
  "Dishes are no longer properly clean or remain wet.",
  "Programmes stop or run on endlessly.",
  "Error codes on the display, often combined with beeps.",
  "Water in the appliance, in the door seal or on the floor.",
  "Unusual noises from the pump, spray arms or fan.",
];

export default function DishwasherRepairEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Dishwasher repair for all major brands
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Your dishwasher no longer cleans properly, stops mid‑programme or
            leaks? We provide professional on‑site repairs across many brands,
            with clear and transparent pricing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Common dishwasher problems
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We repair built‑in and freestanding dishwashers from many
                manufacturers – such as AEG, Bosch, Siemens, Miele, Bauknecht
                and other brands.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Photos of the display or error code help us prepare the repair –
                feel free to attach them to your enquiry.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Request a dishwasher repair appointment
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Briefly describe the fault, brand and model – we’ll check
                whether a repair is economical and get back to you with a
                proposed appointment.
              </p>
              <div className="mt-6">
                <ContactForm lang="en" defaultApplianceKey="dishwasher" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

