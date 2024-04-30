import type { WeatherData } from "$lib/types/weather-data";
import type { ChartConfiguration } from "chart.js";
import { formatHour } from "./format-hour";

export function getChartConfig(weatherData: WeatherData, chartType: 'rain' | 'cloud' | 'temp'): ChartConfiguration {
  const chartData = getChartData(weatherData, chartType);
  const chartBarColors = getChartBarColors(chartType);
  
  return {
    type: 'bar',
    data: {
      labels: chartData.map((r, i) => `${formatHour(i)} - ${r} ${getChartLabelUnits(chartType)}`),
      datasets: [{
			label: `${getChartLabel(chartType)}`,
        data: chartData,
        borderWidth: 2,
        backgroundColor: chartData.map(_ => `${chartBarColors.bar}`),
        borderColor: chartData.map(_ => `${chartBarColors.border}`),
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

function getChartData(weatherData: WeatherData, chartType: 'rain' | 'cloud' | 'temp') {
  return {
    'rain': weatherData.data.hourly.rain,
    'cloud': weatherData.data.hourly.cloud_cover,
    'temp': weatherData.data.hourly.temperature_2m
  }[chartType];
}

function getChartLabelUnits(chartType: 'rain' | 'cloud' | 'temp') {
  return {
    'rain': 'l/m²',
    'cloud': '%',
    'temp': '°C'
  }[chartType];
}

function getChartLabel(chartType: 'rain' | 'cloud' | 'temp') { 
  return {
    'rain': 'Rain',
    'cloud': 'Cloud coverage',
    'temp': 'Ambient temperature'
  }[chartType];
}

function getChartBarColors(chartType: 'rain' | 'cloud' | 'temp') { 
  return {
    'rain': {border: '#1a5880', bar: '#3e95cd'},
    'cloud': {border: '#7a7370', bar: '#d1c7c3'},
    'temp': {border: '#ec5509', bar: '#ec8c09'}
  }[chartType];
}
