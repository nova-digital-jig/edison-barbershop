"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setRevealed(true), 100);
    const doneTimer = setTimeout(() => setDone(true), 2000);
    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (done) return null;

  return (
    <div className={`preloader ${done ? "done" : ""}`} aria-hidden="true">
      <div className={`preloader-text ${revealed ? "reveal" : ""}`}>
        EDISON
      </div>
      <div className="preloader-bar">
        <div className={`preloader-bar-fill ${revealed ? "fill" : ""}`} />
      </div>
    </div>
  );
}
