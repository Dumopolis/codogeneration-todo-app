import { Container, Text, Title } from "@mantine/core";
import { CheckBox } from "@shared/ui/checkBox";
import { useState, type ChangeEventHandler } from "react";

export const Todo = (todo: any) => {
  const [checked, setChecked] = useState(todo.completed);

  const handleCheckedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
    console.log(todo.id, "update todo with value", e.target.checked);
  };
  return (
    <Container
      mt='xs'
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
        checked={checked}
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
