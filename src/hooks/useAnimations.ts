import { useState, useEffect } from 'react';

export function useCounter(target: number, duration = 1800, start = false): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

const WORDS = ['Growth', 'Efficiency', 'Innovation', 'Success'];

export function useTypewriter(): string {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
    } else {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % WORDS.length);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  return displayed;
}
