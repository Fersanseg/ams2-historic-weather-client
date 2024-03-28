export interface WeatherData {
  [track: string]: ApiWeatherData
}

export interface ApiWeatherData {
  elevation: number,
  generationtime_ms: number,
  hourly: Hourly,
  hourly_units: HourlyUnits,
  latitude: number,
  longitude: number,
  timezone: string,
  timezone_abbreviation: string,
  utc_offset_seconds: number
}

interface Hourly {
  cloud_cover: number[],
  rain: number[],
  time: string[]
}

interface HourlyUnits {
  cloud_cover: "%",
  rain: "mm",
  time: "iso8601"
}