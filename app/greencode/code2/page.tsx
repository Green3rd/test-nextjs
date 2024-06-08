'use client';
import { usersForQ2 } from '@/app/mock/responseQ2';
import { DropdownComponent } from '@/app/ui/greencode/DropdownComponent/DropdownComponent';
import { UserTable } from '@/app/ui/greencode/UserTable/UserTable';
import { useState } from 'react';

export default function Page() {
  const [text, setText] = useState("");
  const [dropdownText, setDropdownText] = useState("ID");
  return (
    <div>
      <h2>Code 2</h2>
      {/* <DropdownComponent items={["ID", "Name", "Age", "Email"]} onChange={setDropdownText} /> */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Search...'
        style={{ marginBottom: "10px" }}
      />
      <UserTable items={usersForQ2} searchText={text} searchFrom={dropdownText} />
    </div>
  )
}