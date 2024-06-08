'use client';
import { UserForm } from '@/app/ui/greencode/UserForm/UserForm';
import { useState } from 'react';

export default function Page() {
  const [text, setText] = useState("");
  return (
    <div>
      <UserForm />
    </div>
  )
}