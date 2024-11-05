import { getTodos } from "@entities/todo";
import { updateTodo } from "@features/updateTodo";
import { Container, Title } from "@mantine/core";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todo } from "@widgets/todo/Todo";
import { TodoForm } from "@widgets/todoForm";

export const TodosPage = () => {
  const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  const mutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const todos: any = [];
  return (
    <Container maw="50%" m="0 auto">
      <Title order={1} style={{ textAlign: "center" }}>
        TODO App
      </Title>
      <Title order={2}>Create new todo</Title>
      <TodoForm />
      <Title order={2}>Todos</Title>

      {query.data?.map((todo: any) => (
        <Todo key={todo.id} {...todo} updateTodo={mutation.mutate} />
      ))}
    </Container>
  );
};
