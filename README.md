# BuildTrack: Your Project. United.

Build a polished, high-converting landing page for BuildTrack, a construction project management platform for developers, construction companies, site teams, and home buyers.

Product purpose:

BuildTrack connects construction companies, internal teams, and buyers in one shared platform. It provides a single source of truth from project planning and construction progress through document sharing, buyer requests, and possession handover.

Primary audiences:

1. Construction company admins

   - Manage multiple projects, clients, teams, requests, subscriptions, and overall progress.

2. Site and team members

   - View assigned projects, submit progress updates, receive notifications, and track construction work.

3. Property buyers

   - Follow construction progress, view project timelines, access documents, submit requests, and track possession.

4. Platform administrators

   - Manage companies, users, and subscriptions.

Core workflows to communicate:

- Live construction progress by project, tower, floor, and phase

- Project and client management

- Team assignments and site updates

- Buyer-facing project portal

- Buyer requests and issue tracking

- Secure document management for floor plans, NOCs, possession letters, and project files

- Construction timelines, milestone alerts, and notifications

- Possession and handover tracking

- Reports and photo evidence

Construction phases can include:

Foundation, structure, plastering, finishing, inspection, and possession.

Landing page goals:

- Make the product immediately understandable within the first viewport

- Build trust with construction companies and developers

- Drive users to “Get Started” and “Sign In”

- Show that BuildTrack improves transparency between builders, site teams, and buyers

- Make the product feel operational, reliable, modern, and premium

Suggested navigation:

- Product

- How It Works

- For Companies

- For Buyers

- Pricing

- Sign In

- Get Started

Suggested hero direction:

Headline: “Every project. Every update. One clear view.”

Supporting copy: “BuildTrack brings construction teams, company admins, and buyers together from foundation to possession.”

Primary CTA: “Get Started”

Secondary CTA: “See How It Works”

Visual direction:

- Premium construction technology brand

- Confident, editorial, and practical rather than generic SaaS

- Use real construction, architecture, building progress, site-team, and interior imagery

- Avoid generic office stock photos

- Use a warm off-white background with charcoal typography, construction orange or safety yellow accents, and restrained teal/green for progress states

- Use expressive typography with a strong display heading and highly readable body text

- Use subtle grid lines, blueprint-inspired details, progress indicators, timeline visuals, and architectural framing

- Avoid purple gradients, excessive rounded cards, floating blobs, and generic dashboard templates

- Use sharp, structured layouts with cards only for actual product features or repeated items

- Keep the interface spacious and premium, but still useful for a practical construction audience

Recommended sections:

1. Hero with a strong construction image and an interactive product preview

2. Trust or credibility strip without invented statistics

3. “One platform, every stakeholder” section for company admins, teams, and buyers

4. Product workflow section showing:

   Plan → Build → Update → Communicate → Handover

5. Product preview showing progress tracking, buyer portal, requests, and documents

6. Feature section for progress, collaboration, documents, alerts, and possession

7. How it works in three or four steps

8. Use-case section for construction companies and buyers

9. Pricing or a clear “Start your workspace” CTA

10. FAQ

11. Final CTA and footer

Interaction requirements:

- Fully responsive on desktop, tablet, and mobile

- Add tasteful page-load and scroll-reveal animations

- Add hover states and clear focus states

- Make navigation links scroll to the correct sections

- “Get Started” should link to `/signup`

- “Sign In” should link to `/login`

- Use accessible semantic HTML and keyboard-friendly controls

- Do not invent customer logos, awards, user counts, or performance claims

- Use realistic sample project data only inside visual product previews

- Keep the design consistent with a real construction operations platform, not a marketing template

Technical context:

The existing application is React with Vite and React Router. The landing page is the public route `/`. Existing authentication routes are `/login` and `/signup`. Preserve these routes and make the landing page easy to integrate into the existing frontend.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e08dc35f-5264-4fd0-8166-cff557271d70).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
