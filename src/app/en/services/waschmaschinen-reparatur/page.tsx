import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Washing Machine Repair",
  description:
    "Washing machine repair in Austria – diagnosis, drum and pump repairs, replacement of defective parts. Transparent fixed prices and experienced technicians.",
};

const issues = [
  "The washing machine no longer drains or stops with water in the drum.",
  "Loud noises when spinning, strong vibrations or the machine ‘walking’ across the floor.",
  "Error codes on the display, programme aborts or problems starting.",
  "The drum no longer turns or gets stuck in one position.",
  "Water leaks from the machine or there is foam around the appliance.",
];

export default function WashingMachineRepairEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Washing machine repair at your home
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Your washing machine no longer spins, shows error codes or is
            leaking? Our technicians come to you, check the appliance on site
            and carry out professional repairs at clear fixed prices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Typical washing machine problems
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Whether front loader or top loader – we specialise in repairs
                for popular brands such as AEG, Bosch, Miele, Siemens, Bauknecht
                and many others.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                The more precisely you describe the fault, the better we can
                bring the right spare parts to the very first appointment.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Request a washing machine repair appointment
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Use the form to tell us about the appliance, the fault and your
                preferred time – we’ll respond with an initial assessment and a
                proposed appointment.
              </p>
              <div className="mt-6">
                <ContactForm lang="en" defaultApplianceKey="washer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

