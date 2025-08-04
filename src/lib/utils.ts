import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility functie om CSS classes te combineren en conflicten op te lossen
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
