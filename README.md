# Next.js + Material UI Starter

A minimal Next.js 14 starter template with Material UI v5 and TypeScript.

## Stack

- Next.js 14 (static export)
- React 18
- Material UI v5 + Emotion
- TypeScript

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

- `/src/app` - Next.js app directory
- `/src/theme` - Material UI theme configuration
- `/public` - Static assets

## Customization

- Edit theme in `/src/theme/theme.ts`
- Modify global styles in `/src/app/globals.css`
- Update metadata in `/src/app/layout.tsx`
- Add your content in `/src/app/page.tsx`
- Enable privacy-first analytics by setting `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your Plausible site domain.
  CTA events are captured via `src/lib/analytics.ts`.
