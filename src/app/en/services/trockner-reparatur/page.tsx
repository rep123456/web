import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Dryer Repair",
  description:
    "Dryer repair in Austria – fix heating issues, long drying times and programme interruptions. Professional diagnosis and cleaning of airways and sensors.",
};

const issues = [
  "The dryer no longer heats or the laundry stays damp.",
  "Programmes stop or run much longer than usual.",
  "The dryer reports full tanks or blocked filters even after cleaning.",
  "Unusual noises or vibrations during operation.",
  "Error codes on the display, especially with heat‑pump and condenser dryers.",
];

export default function DryerRepairEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Dryer repair for condenser and heat‑pump dryers
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Your dryer takes forever, doesn’t get warm or stops mid‑cycle? We
            repair dryers on site and thoroughly check heating, sensors and air
            ducts.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Common dryer problems
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We repair condenser and heat‑pump dryers from many brands –
                including AEG, Bosch, Siemens, Miele, Beko and other
                manufacturers.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Please clean fluff filters and easily accessible filters before
                our visit – this allows us to concentrate fully on the actual
                repair.
              </p>
            </div>
          </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Book a dryer repair appointment
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Send us your enquiry online – we’ll advise you whether a repair is
              economical and plan the next available appointment.
            </p>
            <div className="mt-6">
              <ContactForm lang="en" defaultApplianceKey="dryer" />
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

