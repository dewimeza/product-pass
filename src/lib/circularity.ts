// Circularity Next Step, version 1.
// Fixed rules, no AI: the same condition always gives the same answer.

import type { ProductPassport } from "./types";

export type GarmentCondition = "good" | "damaged" | "unknown";

export interface CircularitySuggestion {
  action: string;
  reason: string;
  missingInformation: string;
  limitation: string;
}

// The product is received so the screen can pass the passport it is showing,
// but in this version only the condition decides the answer. Materials are
// not used to decide recyclability.
export function getCircularitySuggestion(
  _product: Pick<ProductPassport, "productName" | "materials">,
  condition: GarmentCondition
): CircularitySuggestion {
  switch (condition) {
    case "good":
      return {
        action: "Keep it or donate it",
        reason: "It still works, so it can keep being used, by you or by someone else.",
        missingInformation: "Where to donate it.",
        limitation: "I don't know what donation options exist where you live.",
      };
    case "damaged":
      return {
        action: "Explore repair",
        reason: "A fix may make it usable again before anyone throws it away.",
        missingInformation: "What kind of damage it is.",
        limitation:
          "I can't judge how serious the damage is or whether it can be repaired.",
      };
    default:
      // "unknown", and anything unexpected: ask instead of guessing.
      return {
        action: "Ask for more information",
        reason: "I can't suggest anything without knowing the condition.",
        missingInformation: "The condition of the garment.",
        limitation: "I can't see the garment, so I won't guess.",
      };
  }
}
