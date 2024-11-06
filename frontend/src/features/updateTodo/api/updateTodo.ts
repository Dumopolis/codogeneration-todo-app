export type UpdateTodo = {
  id: number;
  title?: string;
  description?: string;
  completed?: boolean;
};

export const updateTodo = async (props: UpdateTodo) => {
  try {
    const todo = await fetch(`http://localhost:8000/todos/${props.id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(props),
    });
    return todo.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
