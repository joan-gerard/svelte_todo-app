<script>
  import { createEventDispatcher } from "svelte";

  export let todo;

  let listItemStyle =
    "flex max-h-16 my-3 items-center bg-white py-9 px-3 border rounded-lg shadow-md hover:shadow-lg cursor-pointer relative";
  let imgContainerStyle = "bg-orange-400 rounded-full p-3 w-14 mr-4";
  let deleteBtnStyle =
    "absolute right-0 top-0 -mt-2 -mr-2 bg-red-300 rounded-full w-5 h-5 text-white text-sm text-center hover:bg-red-700";

  const dispatch = createEventDispatcher();
  const deleteTaskDispatcher = (e) => {
    dispatch("deleteTaskDispatch", todo.id);
  };
</script>

<li class={listItemStyle}>
  <div id="image-container" class={imgContainerStyle}>
    <img src={todo.image} alt={todo.category} />
  </div>
  <p>{todo.task}</p>
  <button on:click={deleteTaskDispatcher} class={deleteBtnStyle}>X</button>
</li>

<style>
  img {
    height: 100%;
    margin: 0;
  }
</style>
