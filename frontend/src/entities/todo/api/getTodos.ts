export const getTodos = async () => {
  const todos = await [
    { id: 1, title: "Title", description: "Description", completed: false },
  ];
  return todos;
};
