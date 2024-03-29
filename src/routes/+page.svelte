<script lang=ts>
  import type { ActionData } from "./$types";

  export let currDate = new Date().toISOString().split('T')[0];
  export let form: ActionData;
</script>

<div class="background">
  <div class="container">
    {#if form == null}
      <h1>AMS2 Historic Weather Report Generator</h1>
      <h2>Enter a date and see what the weather was like on every track in Automobilista 2 on that day!</h2>
      <h2>Useful for setting up races or championships using the Real Weather option in the game</h2>
      
      <form method="POST" action="?/submit">
        <input type="date" name="date" id="date" bind:value={currDate}>
        <button type="submit"><span class="material-symbols-outlined">rainy</span></button>
      </form>
      {:else}
      <h2>Track-side weather on all tracks on {form?.localeDate}</h2>
      <table>
        <thead>
          <tr>
            <th>Circuit</th>
            <th>Map</th>
            <th>Avg. temperature</th>
            <th>Avg. precipitation</th>
            <th>Avg. cloud cover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="track-name">Body</td>
            <td class="map">Body</td>
            <td>Body</td>
            <td>Body</td>
            <td>Body</td>
          </tr>
          <tr>
            <td class="track-name">Body</td>
            <td class="map">Body</td>
            <td>Body</td>
            <td>Body</td>
            <td>Body</td>
          </tr>
          <tr>
            <td class="track-name">Body</td>
            <td class="map">Body</td>
            <td>Body</td>
            <td>Body</td>
            <td>Body</td>
          </tr>
          <tr>
            <td class="track-name">Body</td>
            <td class="map">Body</td>
            <td>Body</td>
            <td>Body</td>
            <td>Body</td>
          </tr>
        </tbody>
      </table>
      <form action="?/clear" method="POST">
        <button type="submit" id="reset-button"><span>Reset</span></button>
      </form>
    {/if}
  </div>
</div>

<style>
  .background {
    background: rgb(46,46,46);
    background: linear-gradient(144deg, rgba(46,46,46,1) 0%, rgb(65, 11, 0) 100%); 
    height: 100vh;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 10rem;
    color: aliceblue;
    font-family: 'Courier New', Courier, monospace;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  h2 {
    padding: 0;
    margin: 0.3rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }

  input[type="date"] {
    width: 10%;
    background-color: rgb(46, 46, 46);
    border-radius: 0.5rem;
    border: 2px solid red;
    color: aliceblue;
    padding: 1rem 1.5rem;
  }

  input[type="date"]:focus {
    outline: none;
  }

  button {
    width: 5%;
    border: 2px solid red;
    border-radius: 0.5rem;
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgb(46, 46, 46);
    cursor: pointer;
  }

  span {
    color: aliceblue;
  }

  #reset-button {
    width: 8%;
    font-size: larger;
  }

  table {
    border-collapse: collapse;
    border-radius: 1rem;
    width: 70%;
  }

  table {
    margin-top: 2rem;
  }

  tr {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
  tr th:first-child,
  tr td:first-child {
    border: 1px solid white;
  }
  tr td:last-child,
  tr th:last-child {
    border-right: 1px solid white;
  }

  td, th {
    padding: 0.7rem;
  }

  .track-name,
  .map {
    width: 10rem;
  }

</style>