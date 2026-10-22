# Day 3 – User story, inputs, rules and talking outline (Wednesday, Oct 21, 2026)

## User story
**As a** customer who scanned a ProductPass QR code, **I want** to report the condition of my garment (good, damaged, or unknown), **so that** I get one clear first step for what to do with it, and I don't have to guess.

## Inputs
| Comes from | Input | How the feature uses it |
|---|---|---|
| The customer | Condition: good, damaged, or unknown | **Decides** the suggestion |
| The stored passport | Product name and materials | **Shown** to the customer; not used to decide recyclability |

## The three rules
| If the condition is... | Then suggest... | Because... |
|---|---|---|
| **Good** | Keep it or donate it | It still works, so it can keep being used, by me or by someone else |
| **Damaged** | Explore repair | A fix may make it usable again before anyone throws it away |
| **Unknown** | Ask for more information | The app can't suggest anything sensible until it knows more |

Every result shows **one** first step, a short reason, and what the app does not know.

## Limits to be honest about
- The app does not know the customer's **location**, so it will not recommend recycling.
- It does not decide recyclability from materials alone.
- This version uses simple fixed rules and example data. It is not an AI agent.
- Ideas for week 2: follow-up questions for "unknown" (for example, a tear, a stain, or a broken zipper) and suggestions based on location.

## 5-minute talking outline
| Time | Block | Reminder sentence |
|---|---|---|
| 0:00–0:45 | The problem | ProductPass is a passport a brand uses to share a garment's details with customers who scan a QR code. It shows the name, description, photo, SKU, manufacturer, origin, materials, sustainability claims, and certifications, plus four advice boxes: care, repair, reuse and resale, and recycling. At the bottom, the "Circular commerce" area has six options, all marked "Coming soon". Today customers can only read this information. |
| 0:45–1:45 | The flow | **The brand's side.** A brand starts with messy information about a garment. It enters that information in the create-passport form, and Passport Copilot organizes it into fields. The brand reviews and saves, and the app stores it (`store.ts` fetches and saves it, and `data/store.json` is where it lives).<br><br>**What the brand gets back.** The app checks the saved information (`compliance.ts`) and shows what is missing. The dashboard gives the brand an overview of its passports, evidence gaps, and readiness score.<br><br>**The customer's side.** Each saved product gets a public passport page with a QR code. The customer scans it and reads the information. Today the customer can't give any input, and that is where Circularity Next Step comes in as a new feature. |
| 1:45–2:30 | My feature | There is an opportunity: ask the customer to report the condition of their garment (good, damaged, or unknown). It sits between the stored passport and the customer's screen. |
| 2:30–3:30 | The user story | As a customer who scanned a ProductPass QR code, I want to report the condition of my garment (good, damaged, or unknown), so that I get one clear first step for what to do with it, and I don't have to guess. |
| 3:30–4:30 | The three rules | Good: keep or donate. Damaged: explore repair. Unknown: ask for more information. |
| 4:30–5:00 | Honest limits | The app doesn't know the customer's location, so it can't suggest recycling. It uses simple fixed rules, not AI. |

## Still open
- Who my reviewer is, and when the review takes place.
- Running the app on my own computer (Day 1 was run in Claude's cloud workspace).
