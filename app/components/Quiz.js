"use client";
import { useMemo, useState } from "react";

const QUESTIONS = [
  {
    q: "TCP vs UDP ? kaunsa reliable hai?",
    options: ["TCP", "UDP", "Both", "None"],
    answer: 0,
    explain: "TCP connection?oriented aur reliable re-transmissions provide karta hai.",
  },
  {
    q: "DNS ka primary kaam?",
    options: ["Encrypt traffic", "IP ? name mapping", "Open ports scan", "NAT"],
    answer: 1,
    explain: "DNS human-readable names ko IP addresses se map karta hai.",
  },
  {
    q: "Private IP range me se kaunsa valid hai?",
    options: ["8.8.8.8", "172.20.10.5", "54.12.0.1", "1.1.1.1"],
    answer: 1,
    explain: "172.16.0.0/12 private range me aata hai (172.16?172.31).",
  },
];

export default function Quiz() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const done = idx >= QUESTIONS.length;

  const current = useMemo(() => QUESTIONS[idx], [idx]);

  const onChoose = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.answer) setScore((s) => s + 1);
  };

  const next = () => {
    setSelected(null);
    setIdx((i) => i + 1);
  };

  if (done) {
    return (
      <div className="quiz-card">
        <p>
          Ho gaya! Aapka score: <strong>{score}</strong> / {QUESTIONS.length}
        </p>
        <button className="btn" onClick={() => { setIdx(0); setScore(0); setSelected(null); }}>Restart</button>
      </div>
    );
  }

  return (
    <div className="quiz-card">
      <p className="q">{current.q}</p>
      <div className="options">
        {current.options.map((opt, i) => {
          const isCorrect = selected !== null && i === current.answer;
          const isWrong = selected !== null && i === selected && i !== current.answer;
          return (
            <button
              key={i}
              className={`opt ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
              onClick={() => onChoose(i)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="explain">{current.explain}</div>
      )}
      <div className="quiz-actions">
        <button className="btn secondary" onClick={next} disabled={selected === null}>
          Next
        </button>
      </div>
    </div>
  );
}
