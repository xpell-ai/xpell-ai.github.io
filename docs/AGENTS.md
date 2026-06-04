# docs/codex.md — Xpell.ai GitHub Pages Contract (Strict)

This file is a **strict engineering + content contract** for the `xpell.ai` GitHub Pages project.
When working in this repo, follow these rules as the single source of truth.

---

## 0) Non-negotiables

- **Do not infer missing state.** If something isn’t in the repo, treat it as unknown.
- **No frameworks / no SSG.** This project is **static**: HTML/CSS/JS only.
- **No build system required** unless already present in repo. If it exists, follow it—do not introduce new tooling.
- **No external UI libraries** (Tailwind/Bootstrap/etc.) unless already in use.
- **No external tracking** (GA/Pixel/etc.) unless already present and explicitly requested.
- **No token-waste edits.** Prefer minimal diffs, avoid repeated boilerplate changes across many files unless required.

---

## 1) Project goal and positioning

Xpell.ai is the **developer + platform site** for **Xpell 2**.

It must:
- Communicate **Xpell 2 Alpha** clearly (what exists now vs what is planned).
- Explain **AI-native architecture** as an engineering concept (not marketing fluff).
- Provide clear paths to:
  - **Docs**
  - **Examples / Demos**
  - **Downloads / GitHub**
  - (Soon) **Codex skill** and/or installer
- Avoid company narrative; **Aime Technologies** may appear only as “Created by Aime Technologies” in footer/about, not as the primary message.

The site should feel:
- Minimal, modern, developer-first, credible.
- Dark-mode-first (if supported), with a small palette (2 accent colors + neutrals).
- More “platform docs landing” than “startup marketing”.

---

## 2) URL stability + SEO rules

### 2.1 Preserve existing URLs
- Do **not** break existing slugs without a redirect.
- Keep the homepage `/` stable as the main entry.
- If adding an announcement, prefer stable canonical paths like:
  - `/xpell-2-alpha/` (recommended)
  - `/docs/` (if present)
  - `/examples/` (if present)

### 2.2 Redirects on GitHub Pages
GitHub Pages has no server-side rewrites. Use static redirect stubs:
- For an old path `/old/`, create `/old/index.html` containing:
  - `<meta http-equiv="refresh" content="0; url=/NEW/" />`
  - `<link rel="canonical" href="https://xpell.ai/NEW/" />`
  - A visible `<a>` fallback link
- Prefer **meta refresh + canonical**.

### 2.3 Canonical + titles
- Every page must have:
  - `<title>` (unique)
  - `<meta name="description">` (unique)
  - `<link rel="canonical" href="...">`
- Exactly **one** `<h1>` per page.

### 2.4 No thin pages
Do not create empty placeholder pages. If a page must exist, it must either:
- contain real content, or
- be a redirect stub with canonical + fallback link.

---

## 3) Content style guide

### 3.1 Tone
- Clear, calm, engineering-first, founder-credible.
- Avoid hype (“revolutionary”, “game-changing”) unless explicitly requested.
- Prefer **definitions + contracts + capabilities** over broad promises.
- Be explicit about **Alpha**: what works now vs what is coming next.

### 3.2 Terminology (single source)
Use consistent terms:
- **Xpell 2 Alpha**
- **AI-native architecture**
- **Vibe Coding** (concept) — allowed
- **VIBE** (product) — do **not** present as launched (only “UX layer comes later” is allowed).
- **xnode** for the server runtime (optionally mention `@xpell/node`).

Avoid references that conflict with the project philosophy:
- Do not describe Xpell as “like Vite/Next.js” unless explicitly requested.

### 3.3 Structure
Pages should follow this structure:
- Hero (H1 + short subtext + primary CTA)
- 2–5 content sections (H2)
- Clear CTA block for **Docs / Examples / Download**
- Optional: “Alpha notes” / “What’s next”
- Footer with minimal ownership attribution

---

## 4) Platform content requirements (xpell.ai-specific)

The site must make the platform tangible. Prefer a dedicated section (or page) that clearly lists:

- **@xpell/core** — XData 2, Nano-Commands 2, XEM, XModule, XObject
- **@xpell/node (xnode)** — server execution layer, Wormholes 2, XDB
- **@xpell/ui** — XUI, XUIObject, client Wormholes
- **@xpell/3d** — three.js-based spatial layer

Also include a minimal “Why runtime matters” paragraph:
- AI collaboration with a running system vs prompt-only generation.

---

## 5) HTML/CSS conventions

### 5.1 HTML
- Use semantic HTML: `header`, `main`, `section`, `nav`, `footer`.
- Prefer `ul/li` for lists.
- Avoid deep nesting and “div soup”.

### 5.2 CSS
- Prefer a single global stylesheet (or minimal files already in repo).
- Use CSS variables for theme tokens:
  - `--bg`, `--fg`, `--muted`, `--card`, `--border`, `--accent`, `--accent2`
- Do not hardcode colors repeatedly—use variables.
- Keep spacing consistent (8px scale: 8/16/24/32/48).

### 5.3 JS
- Only use JS if necessary.
- Avoid client-side routers unless already present.
- If a router exists, routes must be **base-path safe** and must not require absolute `/...` paths.
- Small UI features (tabs/accordion) must be progressive-enhancement friendly.

---

## 6) Navigation contract (developer-first)

Preferred top-level nav (keep minimal):
- Home
- Docs (or “Getting Started”)
- Examples
- Download (GitHub)
- Alpha (or Release Notes) — optional but recommended

Rules:
- Don’t add many top-level items.
- Keep nav consistent across pages.
- Internal links must work on GitHub Pages (prefer relative paths; do not assume root rewrites).

---

## 7) Downloads, examples, and measurement

### 7.1 Downloads
- Provide at least one clear “Download / GitHub” CTA.
- If npm packages are referenced, show install snippets, but do not claim they’re stable if they are Alpha.

### 7.2 Examples / demos
- Examples should be few and curated (quality > quantity).
- If examples are placeholders, label clearly.

### 7.3 Analytics (optional)
- Only add GA4 if explicitly requested.
- If added, track:
  - outbound clicks
  - download CTA clicks
  - example/demo clicks
- Keep event names consistent and documented in a single file.

---

## 8) Deliverables contract for tasks

When implementing a change:
1. Identify relevant files (do not guess).
2. Make minimal edits.
3. Keep formatting consistent with existing code.
4. Update internal links (GitHub Pages safe).
5. Add redirect stubs if any URL changes.
6. Ensure page has unique title/description/canonical.
7. Provide a short summary of:
   - files changed
   - URLs affected
   - redirects added

---

## 9) “Done” checklist (must pass)

- [ ] No broken internal links
- [ ] One H1 per page
- [ ] Title/description/canonical set
- [ ] Semantic HTML used
- [ ] Minimal CSS + variables (no repeated hardcoded colors)
- [ ] Redirect stubs created for removed URLs
- [ ] No claims that VIBE is launched
- [ ] Content aligns with Xpell 2 Alpha + AI-native architecture
- [ ] Clear CTAs exist: Docs / Examples / Download

---

## 10) Standard prompt header (use this in every Codex task)

## Xpell 2 Narrative Contract

The homepage must communicate the following concepts in order:

1. Build apps while they run.
2. Real-time AI-native runtime.
3. Runtime mutation instead of rebuild loops.
4. Runtime artifacts instead of generated source trees.
5. AI accelerates the runtime but is not the runtime.

The site should optimize for:
- developer understanding
- product clarity
- demo conversion

The site should NOT optimize for:
- explaining every subsystem
- framework comparisons
- architecture deep-dives above the fold

Visitors should understand the value proposition within 10 seconds.

## Founder Story Contract

The origin story of Xpell is important.

Key narrative:

WordPress made websites editable.

Xpell explores making applications editable.

The original goal was reducing the cost and delay of software changes.

AI later transformed this runtime into an AI-native application platform.

This story may be referenced on:
- homepage
- about page
- blog posts
- launch announcements