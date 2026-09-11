"use client";

import { FormEvent, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-2.75 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-200 hover:border-ink-300 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary-100 bg-primary-50 px-6 py-16 text-center">
        <CheckCircle2 className="size-10 text-primary-600" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-ink-900">Thanks — we've got your message</h3>
        <p className="max-w-sm text-sm text-ink-600">
          Our team will review your requirements and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-ink-800">
          Full Name <span className="text-primary-600">*</span>
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} placeholder="Jane Doe" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-ink-800">
          Email Address <span className="text-primary-600">*</span>
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} placeholder="jane@company.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="website" className="text-sm font-medium text-ink-800">
          Website URL
        </label>
        <input id="website" name="website" type="text" className={inputClasses} placeholder="yourwebsite.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-ink-800">
          Service Needed
        </label>
        <select id="service" name="service" className={inputClasses} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.key} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Custom SEO Solution">Custom SEO Solution</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="keywords" className="text-sm font-medium text-ink-800">
          Target Keywords
        </label>
        <input id="keywords" name="keywords" type="text" className={inputClasses} placeholder="e.g. project management software" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="market" className="text-sm font-medium text-ink-800">
          Target Country / Market
        </label>
        <input id="market" name="market" type="text" className={inputClasses} placeholder="e.g. United States" />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-ink-800">
          Campaign Requirements <span className="text-primary-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your goals, preferred landing pages, and any specific questions or instructions."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your message. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-b from-primary-500 to-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_10px_30px_-8px_rgba(37,99,235,0.55)] transition-all duration-200 hover:brightness-[1.04] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2 sm:w-fit"
      >
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
          aria-hidden="true"
        />
        <span className="relative inline-flex items-center gap-2">
          {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
          {status === "submitting" ? "Sending..." : "Send Your Requirements"}
        </span>
      </button>
    </form>
  );
}
