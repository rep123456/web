"use client";

import CallLink from "@/components/CallLink";
import { SERVICE_PHONE, SERVICE_PHONE_HREF } from "@/lib/contact";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] md:hidden">
      <div className="mx-auto max-w-6xl px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2">
        <CallLink
          href={SERVICE_PHONE_HREF}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 4H6.5C5.67157 4 5 4.67157 5 5.5C5 13.5081 11.4919 20 19.5 20C20.3284 20 21 19.3284 21 18.5V17L17 15.5L15.5 17C13.5 16 12 14.5 11 12.5L12.5 11L11 7H8Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Call now · {SERVICE_PHONE}</span>
        </CallLink>
      </div>
    </div>
  );
}

