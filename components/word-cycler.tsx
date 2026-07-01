"use client";

import { useEffect, useMemo, useState } from "react";

const INTERVAL = 2200;
const DURATION = 340;

interface WordCyclerProps {
  words: string[];
  className?: string;
  offset?: number; // delay before starting, so two cyclers can sync
}

export function WordCycler({ words, className, offset = 0 }: WordCyclerProps) {
  const shuffled = useMemo(() => {
    const arr = [...words];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [words]);

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exit" | "enter">("visible");

  useEffect(() => {
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        setPhase("exit");

        setTimeout(() => {
          setIndex((i) => (i + 1) % shuffled.length);
          setPhase("enter");

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setPhase("visible");
            });
          });
        }, DURATION);
      }, INTERVAL);

      return () => clearInterval(timer);
    }, offset);

    return () => clearTimeout(start);
  }, [words, offset]);

  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
        lineHeight: "inherit",
      }}
    >
      <span
        className={className}
        style={{
          display: "inline-block",
          transition:
            phase === "enter"
              ? "none"
              : `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1), opacity ${DURATION}ms ease`,
          transform:
            phase === "visible"
              ? "translateY(0)"
              : phase === "exit"
                ? "translateY(-110%)"
                : "translateY(110%)",
          opacity: phase === "visible" ? 1 : 0,
        }}
      >
        {shuffled[index]}
      </span>
    </span>
  );
}

const SERVICE_WORDS = ["Deploy", "Auth", "Mail", "GresIQ"];
const FRAMEWORK_WORDS = ["Rust", "Tauri", "Next.js", "Ruby on Rails", "Vapor"];

export function ServiceWordCycler() {
  return (
    <WordCycler
      words={SERVICE_WORDS}
      className="text-indigo-600 dark:text-indigo-400"
    />
  );
}

export function FrameworkWordCycler() {
  return (
    <WordCycler
      words={FRAMEWORK_WORDS}
      className="text-indigo-600 dark:text-indigo-400"
    />
  );
}
