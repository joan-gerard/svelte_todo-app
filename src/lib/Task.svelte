<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { fade, fly, scale } from "svelte/transition";

  import { getCategoryIcon } from "../utils/utils";
  import {
    imgContainerStyle,
    listItemStyle,
    deleteBtnStyle,
    listItemStyleCompleted,
  } from "../utils/tailwindClasses";

  export let todo;

  const deleteTaskDispatcher = (e) => {
    dispatch("deleteTaskDispatch", todo.slug);
  };

  $: categorySrc = getCategoryIcon(todo);
</script>

{#if todo.completed}
<div class={listItemStyleCompleted}>
  <div id="image-container" class={imgContainerStyle}>
    <img src={categorySrc} alt={todo.category} />
  </div>
  <p>{todo.task}</p>
  <button on:click={deleteTaskDispatcher} class={deleteBtnStyle}>X</button>
</div>

{:else}
<div class={listItemStyle}>
  <div id="image-container" class={imgContainerStyle}>
    <img src={categorySrc} alt={todo.category} />
  </div>
  <p>{todo.task}</p>
  <button on:click={deleteTaskDispatcher} class={deleteBtnStyle}>X</button>
</div>

{/if}

<style>
  img {
    height: 100%;
    margin: 0;
  }
</style>
