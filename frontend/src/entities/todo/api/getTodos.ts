export const getTodos = async () => {
  try {
    const todos = await fetch("http://localhost:8000/todos");
    return todos.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
