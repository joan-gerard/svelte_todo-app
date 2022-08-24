<script>
  import Filter from "./Filter.svelte";
  import NewTask from "./NewTask.svelte";
  import Task from "./Task.svelte";

  let todos = [
    {
      id: 1,
      category: "groceries",
      task: "Buy Bread",
      completed: true,
    },
    {
      id: 2,
      category: "studying",
      task: "Study for exam",
      completed: false,
    },
    {
      id: 3,
      category: "friends",
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
    todos = todos.filter((todo) => {
      return todo.id !== e.detail;
    });
  };

  const addTask = (e) => {
    console.log(todos.length);
    todos = [{ id: todos.length + 1, ...e.detail }, ...todos];

    console.log({ todos, filteredTasks });
  };
</script>

<div id="app-container" class="p-8">
  <h1 class="text-2xl text-center ">My Tasks</h1>
  <div id="actions-container" class="flex justify-between py-2 ">
    <Filter on:filterDispatch={filterTasks} />
    <NewTask on:addTaskDispatch={addTask} />
  </div>
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
