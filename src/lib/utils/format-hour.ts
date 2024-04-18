import { clamp } from "./clamp";

export function formatHour(hour: number | string) {
  const amPm = Number(hour) <= 11 ? "am" : "pm";

  return clamp(hour, 0, 23) // Clamps to a valid hour number
    .padStart(2, '0') // Pads with 0 for hours lower than 10
    .concat(":00") // Appends the minutes part
    .concat(amPm); // Appends am or pm
}