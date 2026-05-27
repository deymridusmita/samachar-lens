# Samachar Lens

> See the news. See who owns it.

**Submitted by:** Group 5 (Mridusmita Dey, Souvik Banerjee, Subhajit Mondal, Kaif Kamal, Sayandeep Biswas, Pratibha Mukherjee)

**Course:** Design Thinking (TIU-UCBCS-S208) · Final Deliverables

## About

Samachar Lens is a mobile-first news reader built around a single idea: *less of a verdict, more of a mirror*. The app shows the news without telling the reader what to think. It surfaces the framing differences between outlets, the ownership behind each one, and the gaps where some outlets stay quiet, then leaves the reader to draw their own conclusions.

This is a frontend prototype. There is no backend; articles, accounts, subscriptions and ads are all mocked on the client.

## What it does

**1. Same story, multiple sources.** Every major event in the feed is shown across three or more outlets, side by side. Each card carries a short summary, the outlet name and the publication time, so readers can compare framing and headline choices at a glance.

**2. Regional language support.** The interface and article summaries can be toggled between English and a regional language (Hindi at a minimum). Language is set during onboarding and persisted across sessions; a Settings toggle switches it live.

**3. Ownership transparency.** Tapping any outlet name opens a card with its parent company, key owner or investor, year founded and the date the ownership data was last verified. The card appears as a bottom sheet, so the reader never leaves the article.

**4. Coverage gap indicator.** After a two-hour window, every trending story lists the major outlets that have not covered it alongside the ones that have, with timestamps for each. Each non-covering outlet carries its own ownership info button. The app does not interpret why a story is missing; it only shows that it is.

## Tech stack

- React 19, Vite, React Router 7
- React Context for state (auth, preferences, bookmarks)
- lucide-react for icons
- Plain CSS with a design-token system, no UI framework
- Deployed on Vercel with Web Analytics and Speed Insights

## How To Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```
**LIVE APP LINK**: https://samachar-lens.vercel.app/ (Open on mobile for best view)

## Project structure

```
samachar-lens/
├─ public/
│  ├─ news/         article images
│  ├─ ads/          sponsored ad images
│  └─ profile/      profile photo
├─ src/
│  ├─ components/   feature components + ui/ primitives
│  ├─ context/      AuthContext, PreferencesContext, BookmarksContext
│  ├─ data/         mock data (articles, outlets, ads, topics)
│  ├─ hooks/        useTranslation, useGate
│  ├─ i18n/         English and Hindi dictionaries
│  ├─ pages/        one component per screen
│  ├─ styles/       design tokens + global / ui / component / page CSS
│  ├─ App.jsx       context providers and router
│  └─ router.jsx    route definitions
└─ index.html
```

## Images

Images are served from `public/`. Filenames must match exactly:

| Folder            | Files |
|-------------------|-------|
| `public/news/`    | `modi-iran.jpg`, `mamata-sir.jpg`, `rbi-repo.jpg`, `cyclone-odisha.jpg`, `isro-gaganyaan.jpg`, `u17-football.jpg` |
| `public/ads/`     | `mobile.jpg`, `bank.jpg`, `edu.jpg` |
| `public/profile/` | `priya.jpg` |

Missing images fall back to a tinted placeholder so the app always renders.

## Scope and notes

There is no backend, no real authentication and no real payment. Sign-up and login route through the flow without creating an account; "Priya Sharma" is the demo persona. Article text and ownership details are written for this project. Outlet identities are shown as styled text wordmarks rather than the original brand marks.

## Acknowledgements

- Icons: [lucide](https://lucide.dev/)
- Fonts: Playfair Display, Inter, Noto Sans Devanagari (via Google Fonts)
- Images: Lorem Picsum, msn.com, en.wikipedia.org, timesbull.com, isagyan.in, indiatvnews.com, Figma Community Resources
- Outlet names and ownership information are referenced for educational purposes only
