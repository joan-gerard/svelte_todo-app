<script>
  import Filter from "./Filter.svelte";
  import NewTask from "./NewTask.svelte";
  import Task from "./Task.svelte";
  import { slugify } from "../utils";

  import { todoStore, deleteTask, addTask } from "../store";

  // let todos;
  // todoStore.subscribe((value) => (todos = value));

  //   let filteredTasks = todos - the 'state' is unchanged after we mutate todos
  //   We need $: before variable to mark the state(ment) as reactive

  // the $ before the store variable is a short hand for the subscription
  $: filteredTasks = $todoStore;

  const filterTasks = (e) => {
    if (e.detail === "null") {
      filteredTasks = $todoStore;
      return;
    }
    const completed = e.detail === "true";
    filteredTasks = $todoStore.filter((todo) => {
      return todo.completed === completed;
    });
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
