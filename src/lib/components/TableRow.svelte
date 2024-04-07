<script lang=ts>
  import { spring } from "svelte/motion";
  import { fade } from "svelte/transition";

  let expand = false;

  const heightSpring = spring(0, {stiffness: 0.07, damping: 0.6});
  $: heightSpring.set(expand ? 400 : 0);

  function toggleExpand() {expand = !expand}
</script>

<tr on:click={toggleExpand} style="position: relative; overflow: hidden; height: {$heightSpring}px">
  {#if !expand}
    <td class="track-name" in:fade={{duration: 450}}>Body</td>
    <td class="map" in:fade={{duration: 450}}>Body</td>
    <td in:fade={{duration: 450}}>Body</td>
    <td in:fade={{duration: 450}}>Body</td>
    <td in:fade={{duration: 450}}>Body</td>
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