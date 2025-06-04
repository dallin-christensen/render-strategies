import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateAndTime() {
  const date = new Date()
  const timeStr = date.toTimeString()
  const dateStr = date.toDateString()
  return [ timeStr, dateStr ]
}
