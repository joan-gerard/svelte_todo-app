<script>
  export let todo;

  let listItemStyle =
    "flex max-h-16 my-2 items-center bg-white py-9 px-3 border rounded-lg shadow-md hover:shadow-lg cursor-pointer ";
  let imgContainerStyle = "bg-orange-400 rounded-full p-3 w-14 mr-4";
</script>

<li class={listItemStyle}>
  <div id="image-container" class={imgContainerStyle}>
    <img src={todo.image} alt={todo.category} />
  </div>
  <p>{todo.task}</p>
</li>

<style>
  img {
    height: 100%;
    margin: 0;
  }
</style>
