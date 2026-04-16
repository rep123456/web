import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Fridge Repair",
  description:
    "Fridge repair in Austria – fast help with temperature problems, heavy ice build‑up and noisy compressors. Professional diagnosis and on‑site repair.",
};

const issues = [
  "The fridge no longer cools properly or cools unevenly.",
  "Heavy ice build‑up in the interior or freezer compartment.",
  "The compressor runs constantly or is unusually loud.",
  "Water accumulates inside the appliance or underneath it.",
  "Error codes on the display or problems with no‑frost systems.",
];

export default function FridgeRepairEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Fridge repair – to keep your food safe
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            A faulty fridge is always urgent. We repair freestanding fridges,
            built‑in units and fridge‑freezer combinations so that your food is
            safely stored again.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Common fridge faults
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We repair appliances from many brands – from AEG, Bosch, Siemens
                and Miele to side‑by‑side and no‑frost units from other
                manufacturers.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                For fridge problems, we recommend getting in touch quickly – this
                helps keep any interruption to the cold chain as short as
                possible.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Priority appointments for fridge repair
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We treat faulty cooling appliances as priority cases whenever
                possible. Send us your enquiry and we’ll respond with the next
                available appointments and helpful interim measures.
              </p>
              <div className="mt-6">
                <ContactForm lang="en" defaultApplianceKey="fridge" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

