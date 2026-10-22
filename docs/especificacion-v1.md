# Specification v1 – Circularity Next Step (Thursday, Oct 22, 2026)

## What it does
Given a garment from a ProductPass passport and the condition the customer reports, the feature suggests **one** first step, explains why, says what information is missing, and states what it cannot know.

## User story
**As a** customer who scanned a ProductPass QR code, **I want** to report the condition of my garment (good, damaged, or unknown), **so that** I get one clear first step for what to do with it, and I don't have to guess.

## Inputs
| Input | Comes from | Values | Used to decide? |
|---|---|---|---|
| Condition | The customer | `good`, `damaged`, `unknown` | **Yes** |
| Product name and materials | The stored passport | Text and percentages | No. Shown only |

## Output (always the same four parts)
| Part | Meaning |
|---|---|
| Action | One first step: keep or donate, explore repair, or ask for more information |
| Reason | One short sentence explaining why |
| Missing information | What the app would need to know to say more |
| Limitation notice | What the app cannot know |

## The three rules
| If the condition is... | Action | Reason |
|---|---|---|
| `good` | Keep it or donate it | It still works, so it can keep being used, by you or by someone else |
| `damaged` | Explore repair | A fix may make it usable again before anyone throws it away |
| `unknown` | Ask for more information | The app can't suggest anything sensible until it knows more |

## Three example cases
All three use the same garment, the HeySalad Reusable Tote Bag (70% recycled cotton, 30% recycled polyester), so that the only thing that changes is the condition. This tests the rules, not the product.

| Case | Condition | Action | Reason | Missing information | Limitation notice |
|---|---|---|---|---|---|
| A | `good` | Keep it or donate it | It still works, so it can keep being used, by you or by someone else | Where to donate it | I don't know what donation options exist where you live |
| B | `damaged` | Explore repair | A fix may make it usable again before anyone throws it away | What kind of damage it is | I can't judge how serious the damage is or whether it can be repaired |
| C | `unknown` | Ask for more information | I can't suggest anything without knowing the condition | The condition of the garment | I can't see the garment, so I won't guess |

## Out of scope in this version
- Recommending recycling. It depends on local services and on the garment's condition, and the app knows neither.
- Deciding recyclability from the materials alone.
- Using the customer's location.
- Using AI. The rules are fixed and always give the same answer for the same input.

## Ideas for week 2
- Follow-up questions for `unknown` (a tear, a stain, a broken zipper).
- Suggestions based on location and verified sources.
- Turning the rules into a tool an AI agent can use.
