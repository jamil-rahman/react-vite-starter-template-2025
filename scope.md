## Project Scope: Bliss Play Space (Multi-Page Website)

### 1) Overview
Bliss Play Space is a mobile-first marketing site with distinct routed pages: Home, About, Bookings, FAQ, Contact, and shared Footer. The experience should be inviting, bright, and accessible for parents booking indoor play sessions. 

### 2) Goals
- Communicate offerings and safety clearly (Use Lorem Ipsum text for content paragraphs)
- Make booking and contact effortless
- Fast load, smooth scroll, and simple animations
- Meet AODA accessibility requirements

### 3) Tech Stack
- Frontend: React + TypeScript (Vite)
- Routing: Client-side router (e.g., React Router) following app-router style conventions
- Styling: Tailwind CSS (no dark/light theme)
- Forms: Standard HTML form posts (client-side validation)
- Assets: `public/assets/` (images provided)

### 4) Constraints and Principles
- Follow SOLID and DRY; avoid overengineering
- Mobile-first; responsive across small → large viewports
- No purple or purple-adjacent hues found in AI generated code
- White background with vibrant, kid-friendly accents
- Simple, low-motion animations with `prefers-reduced-motion` respected
- All Typescript types centralized under `src/types/`
- Next steps will follow component composition and App Router-like sectioning structure

### 5) Accessibility (AODA)
- Semantic landmarks: header, main, section, footer, nav
- Minimum 4.5:1 contrast for body text; 3:1 for large text and UI elements
- Keyboard navigable; visible focus states; skip-to-content link
- Form inputs labeled, described, and with error messaging tied via `aria-describedby`
- Motion and parallax reduced when `prefers-reduced-motion: reduce`

### 6) Visual Design
- Background: White (#FFFFFF)
- Accent Palette (no purple):
  - Primary: Bone (#ddd8c4)
  - Secondary: Celadon (#a3c9a8)
  - Tertiary: Cambridge Blue (#84b59f)
  - Support: Cam Blue (#69a297)
  - Neutral text: Airforce Blue (#50808e)
- Typography:
  - Headings: Rounded, friendly sans (e.g., Poppins/Quicksand) via web-safe or Google Fonts
  - Body: System UI or Inter
- Spacing: Generous vertical rhythm on mobile; tighten on desktop
- Imagery: Use provided photos from `public/assets/`
- Strict No Gradient policy until instructed otherwise

### 7) Information Architecture (Pages and Routes)
Top-level routes with clear, descriptive URLs:
1. Home — `/`
2. About — `/about`
3. Bookings — `/bookings`
4. FAQ — `/faq`
5. Contact — `/contact`
6. 404 — fallback route for unknown paths

### 8) Components and Content (per Page)
Stage A: Home (Landing)
- Content: Headline, short subcopy, prominent CTA buttons: "Book Now", "Contact"
- Visual: Hero image (kids playing), subtle floating shapes animation
- A summary of the entire website divided by section rows
- UX: CTAs route to `/bookings` and `/contact`

Stage B: About
- Content: Brief story, age range, safety/cleanliness highlights, hours
- Visual: Image grid with rounded cards; icon bullets
- UX: Secondary CTA to `/bookings`

Stage C: Bookings
- Content: Overview of sessions/party packages; price ranges; booking CTA
- UI: Simple package cards (title, short desc, price, CTA)
- CTA: "Book Now" linking to internal form or external booking link (TBD)

Stage D: FAQ
- UI: Accessible accordion (keyboard + ARIA)
- Content: 6–10 common questions (footwear, waiver, birthday policy, parking)

Stage E: Contact
- Content: Address, phone, email, Google Map link (new tab)
- Form: Name, Email, Phone (optional), Message; consent checkbox; success/error states
- Validation: Required fields with inline errors and summary

Shared: Layout / Footer
- Global header/nav, footer, and basic layout wrapper used across pages
- Footer: Logo mark, tagline, quick links (Home, About, Bookings, FAQ, Contact), social icons

### 9) Navigation
- Sticky top nav on larger screens; compact mobile nav with skip link
- Router-based links between pages; smooth, reduced-motion-aware scrolling for in-page jumps only when applicable
- Active route indication in nav

### 10) Animations and Motion
- Use Tailwind transitions + small keyframes for float/fade-in
- Max 200–300ms transitions; avoid heavy parallax
- Respect `prefers-reduced-motion`

### 11) Performance
- Optimize and lazy-load images where appropriate
- Use responsive images (`srcset`/sizes) for hero and galleries
- Keep bundle small; avoid heavy dependencies

### 12) SEO and Sharing
- Per-page title and meta description
- Open Graph/Twitter meta with page-specific imagery when relevant (fallback to logo/hero)
- Alt text for all images

### 13) Content and Assets
- All images placed in `public/assets/`
- Provide copy for: headline, about blurb, package summaries, FAQs, contact details
- Placeholder copy used until client-provided content arrives

### 14) Types and Structure
- Centralize types in `src/types/` (e.g., `RouteId`, `FaqItem`, `PackageCard`, `ContactFormData`)
- Pages under `src/pages/` or `src/routes/` (depending on router choice), with a shared layout in `src/layouts/`
- Shared components in `src/components/` (Button, Card, Accordion, FormField)

### 15) Milestones (Stages)
- Stage A: Home — hero, CTA, routed links
- Stage B: About — content + imagery
- Stage C: Bookings — package cards + CTA
- Stage D: FAQ — accessible accordion
- Stage E: Contact — details + form (client-side validation)
- Stage F: Layout/Footer — global nav, links, socials

### 16) Acceptance Criteria (per Stage)
- Layout matches mobile-first design, scales to desktop
- Contrast and focus states meet AODA
- Images load quickly and look sharp
- Navigation reflects active page; routing works for all pages and 404
- Forms validate and show clear error/success states

### 17) Open Questions
- Is there an external booking system to link to, or internal form submission target?
- Final brand fonts and logo assets? (temporary choices above)
- Exact package details and pricing?