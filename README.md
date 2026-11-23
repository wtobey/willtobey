# willtobey.com

Personal landing page. Next.js (App Router) + TypeScript.

Two lines of monospace text on a black background, with a spinner that
turns forever. The whole page is `app/terminal.tsx`; the type and colours
are in `app/globals.css`. No CSS framework, no web font, no images.

```bash
npm run dev    # http://localhost:3000
npm run build  # production build
```

`vercel.json` declares the Next.js framework, because the Vercel project
was created before this repo had any code in it.
