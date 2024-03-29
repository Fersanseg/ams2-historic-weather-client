import type { ApiWeatherData, WeatherData } from "$lib/types/weather-data";
import { formatDate } from "$lib/utils/format-date";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  submit: async (event) => {
    const date = (await event.request.formData()).get('date');
    if (date == null)
      return;

    const localeDate = formatDate(date.toString());
    
    // Call the backend with the given date (once the server is actually implemented)
    // const res = (await fetch(`https://myServerUrl?date=${date}`)).json()
    
    const dummyRes = await event.fetch("/sample-response-lm.json");
    const dummyWeatherData: ApiWeatherData = await dummyRes.json();
    const weatherData: WeatherData = {"Le Mans": dummyWeatherData};
    
    return {localeDate, weatherData};
  },
  clear: async (event) => {
    return null;
  }
} satisfies Actions