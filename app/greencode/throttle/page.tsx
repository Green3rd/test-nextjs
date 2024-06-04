'use client';
import { useDebounce } from '@/app/ui/greencode/useDebounce';
import { useThrottle } from '@/app/ui/greencode/useThrottle';
import { useState } from 'react';

export default function Page() {
  const [text, setText] = useState("");
  const [textThr, setTextThr] = useState("");
  const debounceText = useDebounce(text);
  useThrottle(() => setTextThr(text), [text], 1000);
  return (
    <div>
      <h2>Debounce</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type...'
        style={{ marginRight: "10px" }}
      />
      <div>Debounced Text: {debounceText}</div>
      <div>Throttled Text: {textThr}</div>
    </div>
  )
}