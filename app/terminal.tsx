"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import styles from "./terminal.module.css";

const SPINNER = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const BAR_CELLS = 20;

const TASKS = [
  "mounting /home/will",
  "fetching upstream",
  "resolving dependencies",
  "compiling ideas",
  "linking modules",
  "warming caches",
  "serving willtobey.com",
];

type Entry = { id: number; task: string; secs: string };

const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function clock(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function Terminal() {
  // The first frame is deterministic so the server and client markup agree.
  const still = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
  const [frame, setFrame] = useState(0);
  const [job, setJob] = useState({ index: 0, progress: 7 });
  const [done, setDone] = useState<Entry[]>([]);
  const [uptime, setUptime] = useState(0);

  const jobRef = useRef(job);
  const idRef = useRef(0);

  useEffect(() => {
    if (still) return;

    const spin = setInterval(
      () => setFrame((f) => (f + 1) % SPINNER.length),
      90,
    );
    const tick = setInterval(() => setUptime((t) => t + 1), 1000);
    const work = setInterval(() => {
      const current = jobRef.current;
      const next = current.progress + 2 + Math.random() * 8;

      if (next >= 100) {
        idRef.current += 1;
        const entry: Entry = {
          id: idRef.current,
          task: TASKS[current.index],
          secs: (0.08 + Math.random() * 1.4).toFixed(2),
        };
        setDone((prev) => [...prev, entry].slice(-3));
        jobRef.current = {
          index: (current.index + 1) % TASKS.length,
          progress: 0,
        };
      } else {
        jobRef.current = { index: current.index, progress: next };
      }

      setJob(jobRef.current);
    }, 120);

    return () => {
      clearInterval(spin);
      clearInterval(tick);
      clearInterval(work);
    };
  }, [still]);

  const filled = Math.round((job.progress / 100) * BAR_CELLS);

  return (
    <main className={styles.shell}>
      <h1 className={styles.name}>
        will tobey
        <span className={styles.cursor} aria-hidden="true">
          ▌
        </span>
      </h1>
      <p className={styles.host}>wtobey@willtobey.com:~$ ./site --watch</p>

      <div className={styles.rule} aria-hidden="true" />

      <div className={styles.feed} aria-hidden="true">
        <ul className={styles.log}>
          {done.map((entry) => (
            <li key={entry.id} className={styles.line}>
              <span className={styles.ok}>ok</span>
              <span className={styles.task}>{entry.task}</span>
              <span className={styles.secs}>{entry.secs}s</span>
            </li>
          ))}
        </ul>

        <div className={styles.job}>
          <span className={styles.spin}>
            {still ? "⠿" : SPINNER[frame]}
          </span>
          <span className={styles.task}>{TASKS[job.index]}</span>
          <span className={styles.bar}>
            <span className={styles.bracket}>[</span>
            <span className={styles.fill}>{"█".repeat(filled)}</span>
            <span className={styles.empty}>
              {"░".repeat(BAR_CELLS - filled)}
            </span>
            <span className={styles.bracket}>]</span>
            <span className={styles.pct}>{Math.floor(job.progress)}%</span>
          </span>
        </div>
      </div>

      <p className={styles.meta}>
        uptime {clock(uptime)} <span className={styles.sep}>·</span> status: in
        progress
      </p>

      <p className={styles.sr}>
        Personal site for Will Tobey. Still under construction.
      </p>
    </main>
  );
}
