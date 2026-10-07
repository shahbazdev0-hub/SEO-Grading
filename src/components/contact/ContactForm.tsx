"use client";

import { FormEvent, ReactNode, useState, useSyncExternalStore } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-ink-200 bg-ink-50 px-4 py-3 text-[15px] text-ink-950 placeholder:text-ink-400 transition-all duration-200 hover:border-ink-300 focus:border-primary-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary-100";

const labelClasses = "font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-600";

type FieldKind = "text" | "email" | "select" | "textarea";

const fields: {
  id: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  placeholder: string;
  wide?: boolean;
}[] = [
  { id: "name", label: "Full Name", kind: "text", required: true, placeholder: "Jane Doe" },
  { id: "email", label: "Email Address", kind: "email", required: true, placeholder: "jane@company.com" },
  { id: "website", label: "Website URL", kind: "text", placeholder: "yourwebsite.com" },
  { id: "service", label: "Service Needed", kind: "select", placeholder: "Select a service" },
  { id: "keywords", label: "Target Keywords", kind: "text", placeholder: "e.g. project management software" },
  { id: "market", label: "Target Country / Market", kind: "text", placeholder: "e.g. United States" },
  {
    id: "message",
    label: "Campaign Requirements",
    kind: "textarea",
    required: true,
    placeholder: "Tell us about your goals, preferred landing pages, and any specific questions or instructions.",
    wide: true,
  },
];

const submitClasses =
  "group/btn inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-primary-600 px-7 text-[15px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(31,79,224,0.7)] transition-all duration-200 hover:-translate-y-px hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2";

// True only after hydration. The server (and the hydration pass) render a static placeholder,
// so browser extensions that inject markup into form inputs (password managers, Surfshark,
// Grammarly, etc.) can't cause a hydration mismatch — the real inputs only exist client-side.
const subscribe = () => () => {};
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

function FieldShell({ id, label, required, wide, children }: { id: string; label: string; required?: boolean; wide?: boolean; children: ReactNode }) {
  return (
    <div className={`flex flex-col gap-1.5 ${wide ? "sm:col-span-2" : ""}`}>
      <label htmlFor={id} className={labelClasses}>
        {label} {required && <span className="text-primary-600" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

/** Same footprint as the real form, with no inputs for extensions to latch onto. */
function FormPlaceholder() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2" aria-hidden="true">
      {fields.map((f) => (
        <div key={f.id} className={`flex flex-col gap-1.5 ${f.wide ? "sm:col-span-2" : ""}`}>
          <span className={labelClasses}>
            {f.label} {f.required && <span className="text-primary-600">*</span>}
          </span>
          <div className={`${inputClasses} truncate text-ink-400 ${f.kind === "textarea" ? "h-[146px]" : "h-[50px]"}`}>
            {f.placeholder}
          </div>
        </div>
      ))}
      <div className={`${submitClasses} opacity-70`}>Send Your Requirements</div>
    </div>
  );
}

export function ContactForm() {
  const hydrated = useHydrated();
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

  if (!hydrated) return <FormPlaceholder />;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-mist px-6 py-16 text-center">
        <CheckCircle2 className="size-10 text-primary-600" aria-hidden="true" />
        <h3 className="text-xl font-bold text-ink-950">Thanks — we&apos;ve got your message</h3>
        <p className="max-w-sm text-sm text-ink-600">
          Our team will review your requirements and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <FieldShell key={f.id} id={f.id} label={f.label} required={f.required} wide={f.wide}>
          {f.kind === "select" ? (
            <select id={f.id} name={f.id} className={inputClasses} defaultValue="">
              <option value="" disabled>
                {f.placeholder}
              </option>
              {services.map((s) => (
                <option key={s.key} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Custom SEO Solution">Custom SEO Solution</option>
            </select>
          ) : f.kind === "textarea" ? (
            <textarea
              id={f.id}
              name={f.id}
              required={f.required}
              rows={5}
              className={inputClasses}
              placeholder={f.placeholder}
            />
          ) : (
            <input
              id={f.id}
              name={f.id}
              type={f.kind}
              required={f.required}
              className={inputClasses}
              placeholder={f.placeholder}
            />
          )}
        </FieldShell>
      ))}

      {status === "error" && (
        <div role="alert" className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your message. Please try again or email us directly.
        </div>
      )}

      <button type="submit" disabled={status === "submitting"} className={submitClasses}>
        {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Send Your Requirements"}
      </button>
    </form>
  );
}
