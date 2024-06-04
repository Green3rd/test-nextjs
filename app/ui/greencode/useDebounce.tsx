'use client';
import { useState, useEffect } from "react";

export function useDebounce(text: string, delay = 1000) {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      // Will clear the old timer when got the new call.
      clearInterval(timer);
    };
  }, [text, delay]);

  return debounce;
}