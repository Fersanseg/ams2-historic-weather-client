import type { ApiWeatherData, WeatherData } from "$lib/types/weather-data";
import { formatDate } from "$lib/utils/format-date";
import type { Actions } from "@sveltejs/kit";

import { SERVER_URL } from "$env/static/private";

export const actions = {
  submit: async (event) => {
    const date = (await event.request.formData()).get('date');
    if (date == null)
      return;

    const localeDate = formatDate(date.toString());
    
    const res = await (await fetch(`${SERVER_URL}?date=${date}`)).json();
    
    const dummyRes = await event.fetch("/sample-response-lm.json");
    const dummyWeatherData: ApiWeatherData = await dummyRes.json();
    dummyWeatherData.hourly_units.rain = "l/m²"; // Default unit is "mm". I think that "l/m²" works better and is more descriptive
    const weatherData: WeatherData[] = Array(6).fill(null).map((_,i) => {
      return {trackName: `Le Mans ${i+1}`, data: dummyWeatherData}
    })
    
    return {localeDate, weatherData, res};
  },
  clear: async (event) => {
    return null;
  }
} satisfies Actions