"use client";

import React from "react";



export default function StickyWhatsAppButton({
  phone = "+923279008806",
  message = "Hello! I found your website and would like to chat.",
  className = "",
}) {
  const normalizedPhone = phone ? phone.replace(/[^0-9]/g, "") : "";
  const encodedMessage = encodeURIComponent(message || "");
  const href = normalizedPhone ? `https://wa.me/${normalizedPhone}?text=${encodedMessage}` : "#";

  // If phone number is invalid/empty, don't render the button (avoids broken links)
  if (!normalizedPhone) return null;

  return (
    <div className={`fixed right-6 bottom-6 z-50 ${className}`} aria-hidden={false}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="group flex items-center gap-3 focus:outline-none"
      >
        {/* Tooltip (desktop): visible on hover or when focused via keyboard */}
        <div
          className="inline-flex items-center rounded-full bg-green-600 backdrop-blur-md text-white px-5 py-2 shadow-lg border border-white/20 transition-all duration-500 transform scale-95 opacity-100  group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100"
          role="status"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <path
              fill="#fff"
              d="M16 3C9.373 3 4 7.589 4 13.25c0 2.198.7 4.233 1.906 5.934L4 29l9.067-2.352A9.795 9.795 0 0 0 16 25.75C22.627 25.75 28 21.161 28 15.5S22.627 3 16 3z"
            />
          </svg>
          <span className="ml-2 font-medium text-sm tracking-wide">Chat on WhatsApp</span>
        </div>

        {/* Floating round button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl flex items-center justify-center overflow-visible transition-transform duration-200 transform-gpu hover:scale-110 active:scale-95 focus-within:ring-2 focus-within:ring-green-300">
          {/* Glow / ping (pointer-events-none so it doesn't block clicks) */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none" aria-hidden="true" />

          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            className="relative z-10"
            aria-hidden="true"
          >
            <path
              fill="#ffffff"
              d="M20.52 3.48A11.94 11.94 0 0 0 12.02 1a11.94 11.94 0 0 0-8.5 2.48A11.94 11.94 0 0 0 1 12c0 2.02.53 3.95 1.54 5.66L1 23l5.69-1.46A11.94 11.94 0 0 0 12 23c3.18 0 6.16-1.24 8.48-3.48A11.94 11.94 0 0 0 23 12c0-3.19-1.24-6.16-3.48-8.52zM17.3 15.06c-.33.93-1.9 1.77-2.62 1.88-.69.11-1.56.16-3.25-.68-2.52-1.33-4.14-4.2-4.36-4.47-.22-.27-1.79-2.13-1.79-3.84 0-1.71.9-2.56 1.22-2.83.32-.27.71-.33.96-.33.25 0 .5 0 .72.01.23.01.66-.09 1.03.7.37.79 1.25 2.72 1.35 2.92.11.19.18.42.04.68-.14.26-.2.42-.4.65-.2.23-.42.49-.6.77-.2.28-.42.59-.19 1 0 0 .72 1.18 1.54 1.92 1.06.95 1.94 1.15 2.78.93.43-.12 1.27-.52 1.45-1.02.18-.5.18-.92.13-1.02-.05-.1-.17-.16-.36-.28-.19-.12-1.12-.55-1.29-.62-.17-.07-.29-.1-.41.1-.12.2-.46.62-.56.75-.1.13-.2.2-.02.39.18.18 1.02.92 1.93 1.5 1.06.68 1.98 1.14 2.29 1.27.3.13.5.11.68-.07.18-.18 1.08-1.27 1.33-1.79.25-.52.02-.78-.16-.93z"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}