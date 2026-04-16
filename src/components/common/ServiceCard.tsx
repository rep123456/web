import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ServiceCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      <div className="relative aspect-[3/2] w-full bg-slate-50 p-4 flex items-center justify-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-brand">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-dark">
          Mehr erfahren
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 8H12M12 8L9 5M12 8L9 11"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

