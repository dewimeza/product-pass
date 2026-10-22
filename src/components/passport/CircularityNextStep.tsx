"use client";

import { useState } from "react";
import type { ProductPassport } from "@/types";
import {
  getCircularitySuggestion,
  type GarmentCondition,
} from "@/lib/circularity";

const OPTIONS: { value: GarmentCondition; label: string }[] = [
  { value: "good", label: "Good" },
  { value: "damaged", label: "Damaged" },
  { value: "unknown", label: "Unknown" },
];

interface Props {
  passport: ProductPassport;
}

export default function CircularityNextStep({ passport }: Props) {
  const [condition, setCondition] = useState<GarmentCondition | null>(null);
  const suggestion = condition
    ? getCircularitySuggestion(passport, condition)
    : null;

  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
      <div className="mb-4">
        <h3 className="pp-subheading">What should I do with my garment?</h3>
        <p className="mt-1 text-sm pp-text">
          Tell us the condition of your {passport.productName} and we will
          suggest one first step.
        </p>
      </div>

      <div
        role="group"
        aria-label="Condition of your garment"
        className="flex flex-wrap gap-2"
      >
        {OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            aria-pressed={condition === value}
            onClick={() => setCondition(value)}
            className={
              condition === value
                ? "rounded-lg border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-medium text-white"
                : "rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            }
          >
            {label}
          </button>
        ))}
      </div>

      {suggestion && (
        <div
          aria-live="polite"
          className="mt-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            Suggested first step
          </p>
          <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
            {suggestion.action}
          </p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            {suggestion.reason}
          </p>
          <dl className="mt-3 space-y-2 text-sm">
            <div>
              <dt className="font-medium text-slate-800 dark:text-slate-200">
                What I still need to know
              </dt>
              <dd className="text-slate-600 dark:text-slate-400">
                {suggestion.missingInformation}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800 dark:text-slate-200">
                What I can&apos;t know
              </dt>
              <dd className="text-slate-600 dark:text-slate-400">
                {suggestion.limitation}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </section>
  );
}
