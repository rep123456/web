import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Old Appliance Disposal | Professional & Eco-Friendly Service",
  description:
    "We safely collect and dispose of old appliances in an environmentally responsible way. Contact us today for fast service.",
};

export default function OldApplianceDisposalPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-dark">
            Appliance repair & service
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Old Appliance Disposal
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Professional and environmentally responsible disposal of old and
            defective appliances – from collection at your home to proper
            recycling through certified partners.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10 md:py-12">
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Legally compliant disposal
            </h2>
            <p className="text-sm text-slate-600">
              Electrical and electronic waste must not be disposed of with
              household rubbish. We organise disposal in line with legal
              requirements and take your appliances to official collection and
              recycling centres.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              On-site collection
            </h2>
            <p className="text-sm text-slate-600">
              On request, we collect old or defective appliances directly from
              your home or business. This saves you transport effort, heavy
              lifting and waiting times at collection points.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Recycling & environment
            </h2>
            <p className="text-sm text-slate-600">
              Valuable materials such as metals, plastics and electronic
              components are recycled, while problematic substances are handled
              separately. This helps protect the environment and conserve
              resources.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Transparent pricing
            </h2>
            <p className="text-sm text-slate-600">
              You receive clear information about collection and disposal costs
              in advance. Depending on appliance size, quantity and distance, we
              provide a fair fixed-price quote.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Arrange professional disposal of old appliances now
        </h2>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Briefly describe which appliances should be disposed of and where
          they are located. We will respond with a non-binding quote and
          proposed appointment.
        </p>
        <div className="mt-6">
          <ContactForm lang="en" defaultApplianceKey="other" />
        </div>
      </section>
    </div>
  );
}

