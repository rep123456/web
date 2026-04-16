import type { Metadata } from "next";
import ServiceCard from "@/components/common/ServiceCard";
import EmergencyCTA from "@/components/common/EmergencyCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Repairs: washing machine, dishwasher, fridge, oven, dryer – all brands, transparent prices. Appliance repair in Austria.",
};

export default function ServicesEnPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Services
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Whether it’s a broken washing machine, a faulty dishwasher or a
            fridge with temperature issues – we offer specialist repair
            services for all major household appliances in Austria.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Washing machine repair"
            description="If the drum is stuck, water won’t drain or the motor has failed, we’ll get your washes running reliably again."
            href="/en/services/waschmaschinen-reparatur"
            imageSrc="/washaingmachine.jpg"
            imageAlt="Washing machine repair"
          />
          <ServiceCard
            title="Dishwasher repair"
            description="Not cleaning properly, programme stuck or error codes on the display? We’ll find the cause."
            href="/en/services/geschirrspueler-reparatur"
            imageSrc="/dishwasher.jpg"
            imageAlt="Dishwasher repair"
          />
          <ServiceCard
            title="Fridge repair"
            description="Fridge, fridge-freezer or American-style – we act quickly on cooling problems so your food stays safe."
            href="/en/services/kuehlschrank-reparatur"
            imageSrc="/Refrigerator.jpg"
            imageAlt="Fridge repair"
          />
          <ServiceCard
            title="Oven & cooker repair"
            description="Not heating properly, uneven heat or switching off on its own? We handle electronics, heating elements and sensors."
            href="/en/services/backofen-reparatur"
            imageSrc="/Oven.jpg"
            imageAlt="Oven and cooker repair"
          />
          <ServiceCard
            title="Electric cooker repair"
            description="We repair faulty hotplates, heating elements and temperature controls on electric cookers directly at your home."
            href="/en/services/electric-cooker-repair"
            imageSrc="/Elektroherd.png"
            imageAlt="Electric cooker repair"
          />
          <ServiceCard
            title="Dryer repair"
            description="Not drying, running too hot or programme stopping? We check airflow, sensors and heating units."
            href="/en/services/trockner-reparatur"
            imageSrc="/dryperrepair.jpeg"
            imageAlt="Dryer repair"
          />
          <ServiceCard
            title="Microwave repair"
            description="If your microwave no longer heats evenly, the turntable stops or strange noises occur, we check the electronics, door safety switches and magnetron."
            href="/en/services/microwave-repair"
            imageSrc="/microwave.jpg"
            imageAlt="Microwave repair"
          />
          <ServiceCard
            title="Old appliance disposal"
            description="Professional and environmentally responsible disposal of old and defective appliances. We collect your appliance and ensure proper recycling according to legal regulations."
            href="/en/services/old-appliance-disposal"
            imageSrc="/altgeräte.png"
            imageAlt="Old appliance disposal"
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Brands we work with every day
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our technicians are familiar with most brands commonly used in
              Austria. These include:
            </p>
            <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 md:grid-cols-3">
              {[
                "AEG",
                "Bauknecht",
                "Bosch",
                "Miele",
                "Siemens",
                "Electrolux",
                "Gorenje",
                "Neff",
                "Privileg",
              ].map((brand) => (
                <div
                  key={brand}
                  className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Your brand isn’t listed? Get in touch – we can often still order
              parts or find a suitable solution.
            </p>
          </div>

          <EmergencyCTA compact />
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            How your repair works – from enquiry to completion
          </h2>
          <ol className="mt-3 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
            <li>
              <p className="font-semibold text-slate-900">
                1. Contact & fault description
              </p>
              <p className="mt-1">
                You describe the problem by phone or form, give brand and model
                and, if possible, send a photo of the rating plate.
              </p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">
                2. Appointment & fixed-price call-out
              </p>
              <p className="mt-1">
                We agree a time slot and come to you at the agreed time. Call-out
                and diagnosis are shown as a fixed fee.
              </p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">
                3. Quote & repair
              </p>
              <p className="mt-1">
                After diagnosis you receive a clear quote. We only carry out the
                repair once you’ve agreed.
              </p>
            </li>
          </ol>
          <p className="mt-3 text-xs text-slate-500">
            Tip: The more precise your description, the better we can plan parts
            in advance and complete the repair in a single visit.
          </p>
        </div>
      </section>
    </div>
  );
}
