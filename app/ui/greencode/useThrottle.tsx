'use client';
import { useEffect, useRef, useState } from "react";

export const useThrottle = <T,>(value: T, interval: number = 1000): T => {
  const [tValue, setTValue] = useState<T>(value);
  const lastExec = useRef(-1);

  useEffect(() => {
    if (Date.now() >= lastExec.current + interval) {
      setTValue(value)
      lastExec.current = Date.now()
    } else {
      const handler = setTimeout(() => {
        setTValue(value);
        lastExec.current = Date.now();
      }
        , interval);
      return () => clearTimeout(handler);
    }
  }, [value, interval]);

  return tValue;
}