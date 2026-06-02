# Bermuda Tech Website

Production-grade React + Vite website for Bermuda Tech IT solutions company.

## Project Structure

```
src/
├── App.jsx                  # Root — page router, toast provider
├── main.jsx                 # React entry point
├── data/
│   └── projects.js          # All project and service data
├── components/
│   ├── Navbar.jsx           # Fixed responsive navigation
│   └── Footer.jsx           # Site footer
├── pages/
│   ├── Home.jsx             # Homepage (Hero, Services, Process, Featured, CTA)
│   ├── Portfolio.jsx        # Portfolio grid with filter
│   ├── ProjectDetail.jsx    # Chapter-by-chapter case study viewer
│   └── Contact.jsx          # Contact form → Supabase
└── styles/
    ├── globals.css          # Design tokens, reset, utility classes
    ├── Navbar.css
    ├── Footer.css
    ├── Home.css
    ├── Portfolio.css
    ├── ProjectDetail.css
    ├── Contact.css
    └── Toast.css
```

## Quick Start

```bash
npm install
npm run dev
```

## Connect Supabase

1. Run `supabase_leads.sql` in your Supabase SQL Editor
2. Open `src/pages/Contact.jsx`
3. Replace `SUPABASE_URL` and `SUPABASE_ANON_KEY` with your project values

## Color Palette

| Token         | Value     | Use                     |
|---------------|-----------|-------------------------|
| --c-bg        | #08080a   | Page background         |
| --c-accent    | #a8ff57   | Electric lime — primary |
| --c-teal      | #2dffc3   | Teal — secondary        |
| --c-text      | #f0f0f5   | Body text               |
| --c-text-2    | #9090a0   | Muted text              |

## Fonts

- **Display:** Clash Display (headings)
- **Body:** Cabinet Grotesk (body text)
