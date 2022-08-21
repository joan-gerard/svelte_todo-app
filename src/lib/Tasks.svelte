<script>
  import Filter from "./Filter.svelte";
  import Task from "./Task.svelte";

  let todos = [
    {
      id: 1,
      category: "groceries",
      image:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-groceries-foodies-flaticons-lineal-color-flat-icons-2.png",
      task: "Buy Bread",
      completed: true,
    },
    {
      id: 2,
      category: "studying",
      image:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-studying-university-flaticons-flat-flat-icons-4.png",
      task: "Study for exam",
      completed: false,
    },
    {
      id: 3,
      category: "friends",
      image:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-friends-relationship-flaticons-lineal-color-flat-icons-3.png",
      task: "Meet John for coffee",
      completed: false,
    },
  ];

  //   let filteredTasks = todos - the 'state' is unchanged after we mutate todos
  //   We need $: before variable to mark the state(ment) as reactive
  $: filteredTasks = todos;

  const filterTasks = (e) => {
    if (e.detail === "null") {
      filteredTasks = todos;
      return;
    }
    const completed = e.detail === "true";
    filteredTasks = todos.filter((todo) => {
      return todo.completed === completed;
    });
  };

  const deleteTask = (e) => {
    console.log(e.detail);
    todos = todos.filter((todo) => {
      return todo.id !== e.detail;
    });
  };
</script>

<div id="app-container" class="p-8">
  <h1 class="text-2xl text-center ">My Tasks</h1>
  <Filter on:filterDispatch={filterTasks} />
  <div id="task-list__container" class="">
    {#each filteredTasks as todo, i}
      <ul id="task-list">
        <Task {todo} on:deleteTaskDispatch={deleteTask} />
      </ul>
    {:else}
      <p>Your list is empty</p>
    {/each}
  </div>
</div>

<style>
</style>
