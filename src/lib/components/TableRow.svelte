<script lang=ts>
  let expand = false;
</script>

<tr on:click={() => expand = !expand}>
  {#if !expand}
    <td class="track-name">Body</td>
    <td class="map">Body</td>
    <td>Body</td>
    <td>Body</td>
    <td>Body</td>
  {:else}
    <td colspan="5">
      <div class="show-container">
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
    height: 20rem;
    width: 100%;
    background-color: darkgreen;

    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }
</style>