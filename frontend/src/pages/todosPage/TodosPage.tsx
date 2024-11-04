import { Container, Title } from "@mantine/core";
import { Todo } from "@widgets/todo/Todo";
import { TodoForm } from "@widgets/todoForm";

export const TodosPage = () => {
  const todos: any = [
    //mock todo
    { id: 1, title: "Title", description: "Description", completed: false },
  ];
  return (
    <Container maw="50%" m="0 auto">
      <Title order={1} style={{ textAlign: "center" }}>
        TODO App
      </Title>
      <Title order={2}>Create new todo</Title>
      <TodoForm />
      <Title order={2}>Todos</Title>

      {todos.map((todo: any) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Container>
  );
};
