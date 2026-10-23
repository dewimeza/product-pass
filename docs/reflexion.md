# Reflection – Circularity Next Step (Friday, Oct 23, 2026)

## What I understand better
After working on the app this week, I understand the full lifecycle of delivering a new feature: understanding the existing workflow, creating the feature, testing it, and documenting everything.

What surprised me most was how many pieces came together: the integration of GitHub, the help from Claude in going through all the documentation with me, and getting from an idea, to creating the rules, to seeing them work in the app itself.

## What I did myself and what I did with assistance
I chose the scope, wrote the user story, defined the three rules and the limits, explained the flow of the original app in my own words, presented to my reviewer, and approved every document before it was committed. The AI assistant wrote the code and the first drafts of the documents, and explained them to me step by step. Using AI made the coding process much simpler. Every document and every approval before a commit had to be approved by me.

## What the feature does now
Before, only brands gave information through ProductPass, and customers could only read it after scanning a garment's QR code. Now the customer can report the condition of their garment (good, damaged, or unknown) and receive a clear next step for what to do with it. The app does not give information it doesn't know.

## What it can't do yet
- It doesn't recommend recycling, because it doesn't know the customer's location.
- It doesn't decide recyclability from the materials, even though the passport shows their percentages.
- It can only take the reported condition at face value. It has no way to check the real condition of the garment, because only the customer has it in their hands.
- It doesn't save the customer's answer anywhere.

## What I would try in week 2
1. **Turn the rules into tools an AI agent can use.** This week's version uses fixed rules. The next step is to let an agent consult them and then evaluate where it fails.
2. **Use the customer's location** to give local suggestions on where to repair or donate. This answers the limit that the app doesn't know where the customer is.
3. **Ask follow-up questions when the condition is unknown**, so the app can reach a real suggestion instead of only asking for more information.
