<script lang=ts>
  import type { WeatherData } from "$lib/types/weather-data";
  import { round } from "$lib/utils/round";
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";

  export let weatherData: WeatherData;
  
  let expand = false;
  const rainAverage = round(weatherData.data.hourly.rain.reduce((acc, curr) => acc + curr) / 24);
  const temperatureAverage = round(weatherData.data.hourly.temperature_2m.reduce((acc, curr) => acc + curr) / 24);
  const cloudCoverAverage = round(weatherData.data.hourly.cloud_cover.reduce((acc, curr) => acc + curr) / 24);

  const heightSpring = spring(0, {stiffness: 0.07, damping: 0.6});
  $: heightSpring.set(expand ? 400 : 0);

  function toggleExpand() {expand = !expand}
</script>

<tr on:click={toggleExpand} style="position: relative; overflow: hidden; height: {$heightSpring}px">
  {#if !expand}
    <td class="track-name" in:fade={{duration: 450}}>{weatherData.trackName}</td>
    <td class="map" in:fade={{duration: 450}}>Body</td>
    <td in:fade={{duration: 450}}>{temperatureAverage} {weatherData.data.hourly_units.temperature_2m}</td>
    <td in:fade={{duration: 450}}>{rainAverage} {weatherData.data.hourly_units.rain}</td>
    <td in:fade={{duration: 450}}>{cloudCoverAverage} {weatherData.data.hourly_units.cloud_cover}</td>
  {:else}
    <td colspan="5" in:fade={{duration: 450}} style="height:100%">
      <div style="height: 100%;" class="show-container">
        <span>FOO</span>
        <span>FOO</span>
        <span>FOO</span>
        <span>FOO</span>
      </div>
    </td>
  {/if}
</tr>

<style>
  tr {
    border: 1px solid white;
  }

  tr td:first-child {
    border: 1px solid white;
  }

  tr td:last-child {
    border-right: 1px solid white;
  }

  td {
    padding: 0.7rem;
  }

  .show-container {
    background-color: darkgreen;

    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
</style>