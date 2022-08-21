<script>
  import Modal from "./Modal.svelte";
  import Task from "./Task.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let modalIsShowing = false;
  let addTaskStyle =
    "bg-blue-600 rounded-lg text-white py-1 px-2 opacity-75 hover:opacity-100";

  let newTask = {
    category: "",
    task: "",
    completed: null,
  };

  const handleAddTask = (e) => {
    console.log(e);
    dispatch("addTaskDispatch", newTask);
    modalIsShowing = false;
  };
</script>

<button on:click={() => (modalIsShowing = true)} class={addTaskStyle}>
  Add Task
</button>

{#if modalIsShowing}
  <Modal on:close={() => (modalIsShowing = false)} on:submit={handleAddTask}>
    <h1 class="text-2xl text-center">New Task</h1>
    <div class="my-4">
      <label for="" class="w-10">Task</label>
      <input
        bind:value={newTask.task}
        type="text"
        name=""
        id=""
        class="border px-2 py-1 rounded w-full"
      />
      <label for="" class="w-10">Category</label>

      <input
        bind:value={newTask.category}
        type="text"
        name=""
        id=""
        class="border px-2 py-1 rounded w-full"
      />
    </div>
    <div class="my-4 flex justify-between">
      <div class="flex">
        <label for="true" class="">Completed</label>
        <input
          type="radio"
          value={true}
          bind:group={newTask.completed}
          name="completed"
          id="true"
          class="px-2 py-1 mx-5"
        />

        <label for="false" class="">Pending</label>
        <input
          type="radio"
          value={false}
          bind:group={newTask.completed}
          name="completed"
          id="false"
          class="px-2 py-1 mx-5"
        />
      </div>
    </div>
    <button
      type="submit"
      class="px-2 py-1 bg-blue-600 rounded text-white"
      slot="right-button">Add</button
    >
  </Modal>
{/if}
