<script>
  import Filter from "./Filter.svelte";
  import NewTask from "./NewTask.svelte";
  import Task from "./Task.svelte";

  import { todoStore } from "../store";

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

  const deleteTask = (e) => {
    console.log(e);
    $todoStore = $todoStore.filter((todo) => {
      return todo.slug !== e.detail;
    });
  };
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "_")
      .replace(/^-+|-+$/g, "");


  const addTask = (e) => {
    console.log(e.detail);
    const newSlug = slugify(e.detail.task);
    console.log(newSlug);
    $todoStore = [{ slug: newSlug, ...e.detail }, ...$todoStore];

    console.log({ $todoStore, filteredTasks });
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
