<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { fade, fly, scale } from "svelte/transition";

  export let todo;

  const deleteTaskDispatcher = (e) => {
    dispatch("deleteTaskDispatch", todo.slug);
  };

  $: categorySrc =
    todo.category === "friends"
      ? "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-friends-relationship-flaticons-lineal-color-flat-icons-3.png"
      : todo.category === "groceries"
      ? "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-groceries-foodies-flaticons-lineal-color-flat-icons-2.png"
      : todo.category === "studying"
      ? "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-studying-university-flaticons-flat-flat-icons-4.png"
      : "https://img.icons8.com/doodle/48/000000/checklist--v1.png";

  let listItemStyle =
    "flex max-h-16 my-3 items-center bg-white py-9 px-3 border rounded-lg shadow-md hover:shadow-lg cursor-pointer relative";
  let imgContainerStyle = "bg-orange-400 rounded-full p-3 w-14 mr-4";
  let deleteBtnStyle =
    "absolute right-0 top-0 -mt-2 -mr-2 bg-red-300 rounded-full w-5 h-5 text-white text-sm text-center hover:bg-red-700";
</script>

<div class={listItemStyle} transition:fly={{duration: 1000, x: 200}}>
  <div id="image-container" class={imgContainerStyle}>
    <img src={categorySrc} alt={todo.category} />
  </div>
  <p>{todo.task}</p>
  <button on:click={deleteTaskDispatcher} class={deleteBtnStyle}>X</button>
</div>

<style>
  img {
    height: 100%;
    margin: 0;
  }
</style>
