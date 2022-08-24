import { writable } from "svelte/store";
import { slugify } from "./utils";

export const todoStore = writable([
  {
    category: "groceries",
    task: "Buy Bread",
    slug: "buy_bread",
    completed: true,
  },
  {
    category: "studying",
    task: "Study for exam",
    slug: "study_for_exam",
    completed: false,
  },
  {
    category: "friends",
    task: "Meet John for coffee",
    slug: "meet_john_for_coffee",
    completed: false,
  },
]);

export const deleteTask = (e) => {
  todoStore.update((todos) =>
    todos.filter((todo) => {
      return todo.slug !== e.detail;
    })
  );
};

export const addTask = (e) => {
  const newSlug = slugify(e.detail.task);
  todoStore.update((todos) => [{ slug: newSlug, ...e.detail }, ...todos]);
};

// outside store would look like

// const deleteTask = (e) => {
//   console.log(e);
//   $todoStore = $todoStore.filter((todo) => {
//     return todo.slug !== e.detail;
//   });
// };

// const addTask = (e) => {
//     console.log(e.detail);
//     const newSlug = slugify(e.detail.task);
//     console.log(newSlug);
//     $todoStore = [{ slug: newSlug, ...e.detail }, ...$todoStore];

//     console.log({ $todoStore, filteredTasks });
//   };
