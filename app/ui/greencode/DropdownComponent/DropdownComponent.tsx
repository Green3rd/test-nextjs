'use client';
import { ChangeEvent } from 'react';
import './DropdownComponent.css'
interface DropdownProps {
  name: string;
  label: string;
  unit: string;
  items: DropdownItemsProps[]
  onChange?: (value: string) => void
}

interface DropdownItemsProps {
  id: number;
  label: string;
  description: string;
}

export function DropdownComponent({
  items,
  onChange,
  name,
  label,
  unit,
}: DropdownProps) {

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    onChange && onChange(e.target.value)
  }

  const itemList = items.map((item) => {
    return <option value={item.id}>{`${item.label}${item.description ? ` (${item.description})` : ''}`}</option>
  })

  return (
    <>
      <label style={{ display: 'block', marginBottom: '5px' }}>{`${label}${unit && unit !== "" ? ` (${unit})` : ''}`}</label>
      <select className='DropdownComponent' onChange={handleOnChange} name={name}>
        {itemList}
      </select >
    </>
  );
}
