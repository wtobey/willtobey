"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const CELLS = 20;
const STEP = 2.5;
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
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (still) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : Math.min(100, p + STEP)));
    }, 100);
    return () => clearInterval(id);
  }, [still]);

  const filled = Math.round((progress / 100) * CELLS);
  const pct = String(Math.floor(progress)).padStart(3, " ");

  return (
    <main>
      <p>willtobey.com</p>
      <p>
        loading{" "}
        <span aria-hidden="true">
          [{"█".repeat(filled)}
          {"░".repeat(CELLS - filled)}] {pct}%
        </span>
      </p>
    </main>
  );
}
