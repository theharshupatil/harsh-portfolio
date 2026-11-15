# Harshvardhan Patil — Portfolio

A Next.js App Router portfolio for engineering work across instrumentation,
computer architecture, VLSI, digital communications, and machine reasoning.

## Run locally

```bash
npm install
npm run dev
```

The site is available at [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Introductory page with the interactive particle field
- `/about` — Background and engineering interests
- `/projects` — Selected work
- `/projects/[slug]` — Individual project case studies
- `/research` — Research interests
- `/tech-stack` — Tools and engineering environments
- `/resume` — Printable résumé presentation
- `/contact` — Contact link

Project summaries in `lib/projects.ts` are based on the information present in
the supplied project files. Missing repository links, measurements, and
implementation specifics are called out rather than inferred. No résumé PDF or
public email address was present in the supplied files.

## Validate

```bash
npm run lint
npx tsc --noEmit
npm run build
```
