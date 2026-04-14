# Hannah Tomasetti — Portfolio

Personal portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + inline CSS variables
- **Fonts**: Poppins (sans) + Merriweather (serif)
- **Deploy**: Vercel

## Design System (Ki)
| Token | Value |
|---|---|
| Background | `#100f0f` |
| Text | `#f6f1e6` |
| Text Muted | `#a09a8e` |
| Border | `#2a2826` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Your Photos

Place images in `/public/`:
- `hannah-hero.jpg` — hero section headshot
- `about-1.jpg` — about section photo (BTS/studio)
- `about-2.jpg` — about section photo (working)

Place project images in `/public/projects/`:
- `vanguard.jpg`
- `fabric.jpg`
- `apex.jpg`
- `essence.jpg`

Images can be JPG, PNG, or WebP. Recommended sizes:
- Hero photo: ~800×1000px
- Project images: ~800×600px (4:3 ratio)
- About photos: ~800×600px (4:3 ratio)

## Adding a New Project

In `components/Work.tsx`, add to the `projects` array:

```typescript
{
  id: 5,
  title: "Project Name",
  category: "Category",
  year: "2025",
  image: "/projects/project-name.jpg",
  description: "Short description of the project.",
  href: "#", // or link to case study page
},
```

## Adding a Case Study Page

Create `app/work/[slug]/page.tsx` for individual project pages when ready.
Then update the `href` in `Work.tsx` to `/work/vanguard` etc.

## Deploying to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo
4. Deploy — Vercel auto-detects Next.js, no config needed

## Updating Content

All copy lives directly in the component files:
- `components/Hero.tsx` — intro blurb, tags
- `components/Work.tsx` — project list
- `components/About.tsx` — bio copy, education
- `components/Contact.tsx` — email, social links
