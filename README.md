# Portfolio Website

A minimal, responsive portfolio built with **Next.js 14** (App Router) and **TypeScript**. Features dark/light mode, Google Drive resume link, and a contact form with Formspree.

## Features

- **5 sections**: About (cover), Skills, Projects, Experience, Contact
- **Dark / light mode** — toggle in the header; preference saved in `localStorage` (no flash on load)
- **Resume** — “View Resume” on the cover and “Resume” in the header open your Google Drive resume
- **Contact form** — sends messages via Formspree and shows an on-page toast when sent

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- React 18
- Global CSS (no Tailwind)

## Setup

### 1. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 2. Hide your URLs (environment variables)

Resume and Formspree URLs are **not** stored in the repo. They live in **`.env.local`** (gitignored).

1. Copy the example file and add your values:
   ```bash
   cp .env.example .env.local
   ```
2. Edit **`.env.local`**:
   - **`NEXT_PUBLIC_RESUME_URL`** — Your Google Drive resume link (Share → Copy link).
   - **`NEXT_PUBLIC_FORMSPREE_ENDPOINT`** — Your Formspree endpoint (e.g. `https://formspree.io/f/xyzabcde`).

Only `.env.example` (with placeholders) is committed; your real URLs stay in `.env.local` and are never pushed.

### 4. Customize content

- **Cover & bio**: Edit **`lib/content.ts`** and the cover block in **`components/Portfolio.tsx`** (name, tagline, handle, bio).
- **Profile photo**: Add **`public/profile.jpg`**. If missing, a placeholder is shown.
- **Skills, projects, experience**: Edit **`lib/content.ts`**.
- **Social links**: Update `SOCIAL_LINKS` in **`lib/content.ts`**.
- **Styles**: **`app/globals.css`** (variables under `:root` and `[data-theme="dark"]`).

## Project structure

```
Portfolio-Web/
├── app/
│   ├── layout.tsx      # Root layout, fonts, theme script
│   ├── page.tsx        # Home page (renders Portfolio)
│   └── globals.css     # Global styles
├── components/
│   ├── Logo.tsx        # Header logo
│   └── Portfolio.tsx  # Main client component (sections, theme, form)
├── lib/
│   ├── constants.ts   # Reads URLs from env; section list
│   ├── content.ts     # Skills, projects, experience, social links
│   └── types.ts       # TypeScript types
├── public/
│   ├── theme-init.js  # Runs before React to set theme (no flash)
│   └── profile.jpg    # Optional; add your photo
├── package.json
├── tsconfig.json
└── next.config.js
```

## Build and deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com), Netlify, or any Node host that supports Next.js.
