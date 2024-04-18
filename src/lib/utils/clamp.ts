export function clamp(v: number | string, min: number, max: number): string {
  if (typeof v == "string") v = Number(v);
  
  return Math.min(max, Math.max(min, v)).toString();
}