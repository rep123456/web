import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Electric Cooker Repair",
  description:
    "Electric cooker repair in Austria – fix heating problems, faulty hotplates and temperature issues. Professional diagnosis and on‑site repair.",
};

const issues = [
  "One or more hotplates no longer heat properly or only partially.",
  "The cooker heats unevenly or switches off by itself.",
  "Residual heat indicators or control lights no longer work correctly.",
  "Fuses trip when you switch the electric cooker on.",
  "Unusual smells, noises or discolouration on the hob or connections.",
];

export default function ElectricCookerRepairEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Electric cooker repair for your kitchen
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            If hotplates no longer heat correctly, fuses trip or the cooker
            behaves strangely, we check heating elements, controls and
            connections directly at your home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Typical faults on electric cookers
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Our technicians repair electric cookers and hobs from many
                manufacturers – from classic freestanding units to modern
                ceramic and induction hobs.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                For safety reasons, if you notice short circuits or burning
                smells, you should disconnect the cooker from the mains and not
                use it again until it has been checked.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Book an electric cooker repair appointment
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Briefly describe the fault – for example which plate is affected
                or which error message appears. We’ll respond with an initial
                assessment and a proposed appointment.
              </p>
              <div className="mt-6">
                <ContactForm lang="en" defaultApplianceKey="electricCooker" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

