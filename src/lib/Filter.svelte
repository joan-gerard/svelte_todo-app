<script>
  import { createEventDispatcher } from "svelte";

  // export let filterTasks

  const dispatch = createEventDispatcher();
  const filterTasks = (e) => {
      dispatch('filterDispatch', e.target.value)

  }
</script>

<label for="task-filter">Filter tasks</label>
<select
  on:change={filterTasks}
  name="task-filter"
  id="task-filter"
  class="my-5 mx-2 border rounded-md p-1"
>
  <option value={null}>All</option>
  <option value={true}>Completed</option>
  <option value={false}>Pending</option>
</select>
