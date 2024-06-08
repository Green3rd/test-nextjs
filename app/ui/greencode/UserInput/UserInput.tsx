'use client';
import React from 'react';

interface UserInputProps {
  name: string;
  label: string;
  type: string;
  unit: string;
  // is_mandatory: boolean;
}

// {
// id: 7,
//   name: "app.credit_limit_request",
//   type: "number",
//   order: 1,
//   label: "จำนวนวงเงินที่ต้องการ",
//   unit: "บาท",
//   is_mandatory: true,
//   choices: []
// },

export const UserInput = ({ name, label, type, unit }: UserInputProps) => (
  <div style={{ marginBottom: '10px' }}>
    <label style={{ display: 'block', marginBottom: '5px' }}>{`${label} (${unit})`}</label>
    <input
      style={{ borderRadius: '6px' }}
      type={type}
      name={name}
      placeholder='กรุณาระบุข้อมูล'
    // onChange={handleChange}
    // onBlur={handleBlur}
    // value={values.email}
    />
  </div >
);
