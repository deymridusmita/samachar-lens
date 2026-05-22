# Samachar Lens

> See the news. See who owns it.

**Samachar Lens** is a mobile-first news reading app that adds a transparency
**lens** to the headlines. Beyond gathering the day's stories, it lets you see
**who owns and funds** the outlet behind each report, and how the same event is
framed — or ignored — across different newsrooms.

<!-- Submission details — fill in as your course requires -->
**Submitted by:** Mridusmita Dey &nbsp;·&nbsp; **Course:** _add your course / code here_

---

## Concept

Most news apps tell you *what* happened. Samachar Lens also shows you *who is
telling you* — because ownership and funding shape which stories a newsroom
pursues and how it frames them. Two features carry this idea:

- **The ownership lens** — tap any source to reveal its parent company, owner,
  ownership type, funding model and other media interests.
- **The coverage gap** — see which tracked outlets are covering a story, which
  are not, and how their headlines differ.

It is built as a **frontend prototype** — there is no backend. Articles,
accounts, subscriptions and ads are all mocked on the client.

## Features

- **15 screens** across onboarding, the main app and account flows
- **Bilingual** — full English ⇄ Hindi, switchable anywhere
- **Onboarding** — language, region and interest selection
- **Ownership lens** & **coverage gap** analysis on every article
- **Anonymous "Explore" mode** — browse without an account; the lens and
  coverage gap prompt a free sign-up
- **Premium tier** — a mock subscription that removes ads and unlocks deeper
  ownership & coverage breakdowns; sponsored ad slots for non-subscribers
- **Bookmarks**, an interest-based feed, search, and preferences — all
  persisted in the browser via `localStorage`
- Presented in a **mobile device frame**; responsive down to real phone widths

## Tech stack

- **React 19** + **Vite**
- **React Router 7** for navigation
- **React Context** for state (auth, preferences, bookmarks)
- **lucide-react** for icons
- Plain **CSS** with a design-token system — no UI framework

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 18 or newer, and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server  ->  http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
samachar-lens/
├─ public/
│  ├─ news/         article images (one .jpg per story)
│  ├─ ads/          sponsored-ad images
│  └─ profile/      profile photo
├─ src/
│  ├─ components/   feature components  (+ ui/ — buttons, sheets, nav...)
│  ├─ context/      AuthContext, PreferencesContext, BookmarksContext
│  ├─ data/         mock data — articles, outlets, ads, topics
│  ├─ hooks/        useTranslation, useGate
│  ├─ i18n/         English + Hindi string dictionaries
│  ├─ pages/        one component per screen
│  ├─ styles/       design tokens + global / ui / component / page CSS
│  ├─ App.jsx       context providers + router
│  └─ router.jsx    route definitions
└─ index.html
```

## Images

Photographs are served from `public/`. Filenames must match exactly:

| Folder            | Files |
|-------------------|-------|
| `public/news/`    | `modi-iran.jpg`, `mamata-sir.jpg`, `rbi-repo.jpg`, `cyclone-odisha.jpg`, `isro-gaganyaan.jpg`, `u17-football.jpg` |
| `public/ads/`     | `mobile.jpg`, `bank.jpg`, `edu.jpg` |
| `public/profile/` | `priya.jpg` |

Any missing image falls back to a tinted placeholder, so the app always
renders cleanly.

## Scope & notes

- Frontend-only prototype — **no server**, no real authentication or payments.
- Auth is visual: sign-up / login route through the flow without creating an
  account; "Priya Sharma" is the demo persona.
- Article text and ownership details are written for this project and are
  **illustrative** — they are not live news.
- Outlet identities are shown as **styled text wordmarks**, not reproductions
  of the original brand logos.

## Acknowledgements

- Icons — [lucide](https://lucide.dev/)
- Fonts — Playfair Display, Inter & Noto Sans Devanagari via Google Fonts
- Outlet names and ownership information are referenced for educational
  purposes only.
