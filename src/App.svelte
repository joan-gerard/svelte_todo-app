<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Tasks from "./lib/Tasks.svelte";
  import HomePage from "./pages/HomePage.svelte";
</script>

<Router>
  <nav class="bg-blue-600 h-[10vh] text-white font-bold flex items-center px-8">
    <Link to="/" class="hover:underline mr-5">Home</Link>
    <Link to="tasks" class="hover:underline">My Tasks</Link>
  </nav>
  <Route path="/">
    <HomePage />
  </Route>
  <Route path="tasks">
    <Tasks />
  </Route>
</Router>
