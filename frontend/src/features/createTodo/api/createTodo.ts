export type CreateTodo = {
  title: string;
  description?: string;
};

export const createTodo = async (props: CreateTodo) => {
  try {
    const todo = await fetch("http://localhost:8000/todos", {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        'Content-type': 'application/json'
      },
    });
    return todo.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
