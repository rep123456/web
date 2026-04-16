import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Oven & Cooker Repair",
  description:
    "Oven and cooker repair in Austria – fix heating problems, uneven baking and electronic faults. Professional diagnosis and on‑site repair.",
};

const issues = [
  "The oven no longer heats or does not reach the set temperature.",
  "Food burns on one side or bakes unevenly.",
  "Hobs stop working or switch off on their own.",
  "Error codes on the display, problems with controls or timer.",
  "Fuses trip when you switch the appliance on.",
];

export default function OvenRepairEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Oven & cooker repair for your kitchen
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Whether classic oven, ceramic hob or induction hob – we repair
            ovens and cookers so you can cook and bake reliably again.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Typical faults with ovens & cookers
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Our technicians repair electric cookers and ovens from many
                manufacturers – from classic freestanding units to modern
                built‑in appliances.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {issues.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                For safety reasons, if you notice burning smells or short
                circuits, you should disconnect the appliance from the mains and
                contact us promptly.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Book an oven & cooker repair appointment
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Briefly describe the fault with your oven or cooker – we’ll
                respond with an initial assessment and a proposed appointment.
              </p>
              <div className="mt-6">
                <ContactForm lang="en" defaultApplianceKey="oven" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

