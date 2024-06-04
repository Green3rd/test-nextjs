'use client';

import { useTimer } from "@/app/ui/greencode/useTimer";

export default function Page() {
  const { days, hours, minutes, seconds } = useTimer("2024-06-10T23:59:59");

  return (
    <div>
      <div>days</div>
      <div>{days}</div>
      <div>hours</div>
      <div>{hours}</div>
      <div>minutes</div>
      <div>{minutes}</div>
      <div>seconds</div>
      <div>{seconds}</div>
    </div>
  )
}