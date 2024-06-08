
'use client';

// Find all the duplicate characters in the string
// Input: pineapple
// Output: The duplicate characters are ['p', 'e']

export function getDuplicated(input: string): string {
  const output = new Set()
  const charSet = new Set()
  for (let i = 0; i < input.length; i++) {
    let current = input.charAt(i);
    if (charSet.has(current)) {
      output.add(current)
    } else {
      charSet.add(input.charAt(i))
    }
  }
  return Array.from(output).join(' ');
}
