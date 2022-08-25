<script>
  import { navigate } from "svelte-navigator";
</script>

<div class="h-[90vh] flex">
  <div class="m-auto flex flex-col content-center">
    <h1 class="text-4xl mb-6">Welcome back...</h1>
    <button
      on:click={() => navigate("/tasks")}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded-full"
      >See My Tasks</button
    >
  </div>
</div>
