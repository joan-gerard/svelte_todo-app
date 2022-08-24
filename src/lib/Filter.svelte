<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const filterTasksDispatcher = (e) => {
    dispatch("filterDispatch", e.target.value);
  };
</script>

<div>
  <label for="task-filter">Filter tasks</label>
  <select
    on:change={filterTasksDispatcher}
    name="task-filter"
    id="task-filter"
    class="mx-2 border rounded-md p-1"
  >
    <option value={null}>All</option>
    <option value={true}>Completed</option>
    <option value={false}>Pending</option>
  </select>
</div>
