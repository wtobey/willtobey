"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const FRAMES = ["|", "/", "-", "\\"];
const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function Terminal() {
  const still = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (still) return;
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES.length), 125);
    return () => clearInterval(id);
  }, [still]);

  return (
    <main>
      <p>willtobey.com</p>
      <p>
        loading <span aria-hidden="true">{FRAMES[frame]}</span>
      </p>
    </main>
  );
}
