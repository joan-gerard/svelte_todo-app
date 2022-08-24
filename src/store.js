import { writable } from "svelte/store";

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

// export const deleteTask = (e) => {
//     console.log(e.detail)
//   todoStore.update((todos) =>
//     todos.filter((todo) => {
//       return todo.id !== e.detail;
//     })
//   );
// };
