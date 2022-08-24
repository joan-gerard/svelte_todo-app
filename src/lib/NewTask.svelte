<script>
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  
  import Modal from "./Modal.svelte";
  import Task from "./Task.svelte";

  let modalIsShowing = false;

  let newTask = {
    category: "",
    task: "",
    completed: false,
  };

  $: submitBtnIsDisabled = !newTask.task;

  const handleAddTask = (e) => {
    console.log(e);
    dispatch("addTaskDispatch", newTask);
    modalIsShowing = false;
  };

  // onMount(() => {
  //   const submitBtn = document.getElementById("submit-btn");
  //   console.log(submitBtn);
  // });

  let addTaskStyle =
    "bg-blue-600 rounded-lg text-white py-1 px-2 opacity-75 hover:opacity-100";
</script>

<button on:click={() => (modalIsShowing = true)} class={addTaskStyle}>
  Add Task
</button>

<Modal
  on:close={() => (modalIsShowing = false)}
  on:submit={handleAddTask}
  show={modalIsShowing}
>
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
    id="submit-btn"
    disabled={submitBtnIsDisabled}
    class="px-2 py-1 bg-blue-600 rounded text-white disabled:opacity-75"
    slot="right-button">Add</button
  >
</Modal>
