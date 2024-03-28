import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async (event) => {
    const date = (await event.request.formData()).get('date');

    // Call the backend with the given date (once the server is actually implemented)
    // const res = (await fetch(`https://myServerUrl?date=${date}`)).json()

    const dummyRes = await event.fetch("/sample-response-lm.json");
    const weatherData = {"Le Mans": await dummyRes.json()};
    
    return weatherData;
  }
} satisfies Actions