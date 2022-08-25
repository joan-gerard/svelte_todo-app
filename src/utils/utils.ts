export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "_")
    .replace(/^-+|-+$/g, "");

type Todo = {
  category: string;
};

export const getCategoryIcon = (todo: Todo) => {
  return todo.category === "friends"
    ? "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-friends-relationship-flaticons-lineal-color-flat-icons-3.png"
    : todo.category === "groceries"
    ? "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-groceries-foodies-flaticons-lineal-color-flat-icons-2.png"
    : todo.category === "studying"
    ? "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-studying-university-flaticons-flat-flat-icons-4.png"
    : "https://img.icons8.com/doodle/48/000000/checklist--v1.png";
};

export const categories = [
  {
    category: "friends",
    url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-friends-relationship-flaticons-lineal-color-flat-icons-3.png",
  },
  {
    category: "groceries",
    url: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-groceries-foodies-flaticons-lineal-color-flat-icons-2.png",
  },
  {
    category: "studying",
    url: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-studying-university-flaticons-flat-flat-icons-4.png",
  },
  {
    category: "other",
    url: "https://img.icons8.com/doodle/48/000000/checklist--v1.png",
  },
];
