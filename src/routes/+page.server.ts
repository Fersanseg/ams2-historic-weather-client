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
    
    let weatherData = await (await fetch(`${SERVER_URL}?date=${date}`)).json()
    weatherData.forEach((r: WeatherData) => { r.data.hourly_units.rain = "l/m²" });
    
    return {localeDate, weatherData};
  },
  clear: async (event) => {
    return null;
  }
} satisfies Actions