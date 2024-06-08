'use client';
import { getDuplicated } from '@/app/service/getDuplicated';
import { useState } from 'react';

export default function Page() {
  const [text, setText] = useState("");
  const duplicate = getDuplicated(text)
  return (
    <div>
      <h2>Duplicated characters</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type...'
        style={{ marginBottom: "10px" }}
      />
      <div>{duplicate}</div>
    </div>
  )
}

