import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Microwave Repair",
  description:
    "Microwave repair in Austria – fix heating problems, turntable faults and electronic issues. Professional diagnosis and on‑site repair.",
};

const issues = [
  "The microwave no longer heats or only heats very unevenly.",
  "The turntable does not rotate or jerks strongly.",
  "Unusual noises or sparking inside the cavity.",
  "Door switch faults: the appliance will not start or stops immediately.",
  "Error codes on the display or problems with the controls.",
];

export default function MicrowaveRepairEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Microwave repair for home & office
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            If your microwave no longer heats reliably, the turntable stops or
            error messages appear, we check the electronics, door safety
            switches and magnetron directly on site.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Common microwave problems
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We repair many common microwave models – from simple solo
                appliances to combination units with grill or hot‑air
                functions.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Please do not continue to use defective microwaves – especially
                if you see sparking or discolouration inside the cavity. Safety
                comes first.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Book a microwave repair appointment
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Briefly describe the fault and model of your microwave – we’ll
                respond with an initial assessment and a suitable proposed
                appointment.
              </p>
              <div className="mt-6">
                <ContactForm lang="en" defaultApplianceKey="microwave" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

