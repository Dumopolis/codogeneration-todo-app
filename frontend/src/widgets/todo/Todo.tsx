import type { Todo as TodoType } from "@entities/todo";
import { updateTodo } from "@features/updateTodo";
import { Container, Text, Title } from "@mantine/core";
import { CheckBox } from "@shared/ui/checkBox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type ChangeEventHandler } from "react";

export const Todo = ({ ...todo }: TodoType) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleCheckedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    mutation.mutate({ id: todo.id, completed: e.target.checked });
  };
  return (
    <Container
      mt="xs"
      mb="md"
      display="grid"
      p={0}
      style={{
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Title order={3} style={{ gridRow: 1, gridColumn: 1 }}>
        {todo.title}
      </Title>
      <Text size="md" style={{ gridRow: 2, gridColumn: 1 }}>
        {todo.description}
      </Text>
      <CheckBox
        checked={todo.completed}
        onChange={handleCheckedChange}
        style={{
          gridRow: "1 / 3",
          gridColumn: 2,
          alignSelf: "center",
          justifySelf: "end",
        }}
      />
    </Container>
  );
};
