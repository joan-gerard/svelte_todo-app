<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import Filter from "./Filter.svelte";
  import NewTask from "./NewTask.svelte";
  import Task from "./Task.svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { todoStore, deleteTask, addTask } from "../store";
  import { categories } from "../utils/utils";
  import { imgContainerStyle } from "../utils/tailwindClasses";

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

  const filterCategory = (e) => {
    console.log(e.target.alt);

    filteredTasks = $todoStore.filter((todo) => {
      return todo.category === e.target.alt;
    });
  };

</script>

<div id="app-container" class="p-8">
  <h1 class="text-2xl text-center ">My Tasks</h1>
  <div id="actions-container" class="flex justify-between py-2 ">
    <Filter on:filterDispatch={filterTasks} />
    <NewTask on:addTaskDispatch={addTask} />
  </div>
  <div class="flex justify-around my-4">
    {#each categories as category}
      <div class={imgContainerStyle} on:click={filterCategory}>
        <img
          src={category.url}
          alt={category.category}
          value={category.category}
        />
      </div>
    {/each}
  </div>
  <div id="task-list__container" class="">
    {#each filteredTasks as todo, i (todo.slug)}
      <div
        id="task-list"
        animate:flip={{ delay: 250, duration: 1000, easing: quintOut }}
      >
        <Task {todo} on:deleteTaskDispatch={deleteTask} />
      </div>
    {:else}
      <p>Your list is empty</p>
    {/each}
  </div>
</div>

<style>
</style>
