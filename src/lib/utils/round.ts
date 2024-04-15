export function round(number: number, decimals: number = 2): number {
  const mult = Math.pow(10, decimals);
  return Math.round(number * mult) / mult;
}