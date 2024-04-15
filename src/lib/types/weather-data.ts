export interface WeatherData {
  trackName: string,
  data: ApiWeatherData
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
  temperature_2m: number[],
  time: string[]
}

interface HourlyUnits {
  cloud_cover: "%",
  rain: "mm",
  temperature_2m: "°C",
  time: "iso8601"
}