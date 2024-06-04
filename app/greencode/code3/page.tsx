'use client';
import { useState } from 'react';

export default function Page() {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Code 3</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type...'
        style={{ marginBottom: "10px" }}
      />
    </div>
  )
}