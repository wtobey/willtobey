# willtobey.com

Personal landing page. Next.js (App Router) + TypeScript, no CSS framework.

A single terminal panel that loads forever: a braille spinner, a progress bar
that fills and restarts on the next task, and a short log of finished lines.
All of it lives in `app/terminal.tsx`; the palette and page ground are tokens
at the top of `app/globals.css`.

```bash
npm run dev    # http://localhost:3000
npm run build  # production build
```

The domain's apex A record points at Vercel.
