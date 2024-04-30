import type { WeatherData } from "$lib/types/weather-data";
import type { ChartConfiguration } from "chart.js";
import { formatHour } from "./format-hour";

export function getChartConfig(weatherData: WeatherData): ChartConfiguration {
  const rainData = weatherData.data.hourly.rain;
  return {
    type: 'bar',
    data: {
      labels: rainData.map((r, i) => `${formatHour(i)} - ${r} l/m²`),
      datasets: [{
			label: "Rain",
        data: rainData,
        borderWidth: 2,
        backgroundColor: rainData.map(_ => "#3e95cd"),
        borderColor: rainData.map(_ => "#8e5ea2"),
      }]
    },
    options: {
      scales: {
        x: {
          display: false
        },
        y: {
          ticks: {
            color: "#fff"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#fff"
          }
        }
      }
    }
  }
}