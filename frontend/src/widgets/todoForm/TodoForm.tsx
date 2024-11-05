import { createTodo } from "@features/createTodo";
import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TextArea } from "@shared/ui/textArea";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const TodoForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { title: "", description: "" },

    validate: {
      title: (value) => (value.length <= 0 ? "Title required" : null),
    },
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    mutation.mutate(values);
  };

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextInput
        mt="xs"
        required
        label="Title"
        placeholder="Title"
        key={form.key("title")}
        {...form.getInputProps("title")}
      />
      <TextArea
        label="Description"
        placeholder="Description"
        key={form.key("description")}
        mt="md"
        {...form.getInputProps("description")}
      />
      <Button type="submit" mt="md" style={{ marginLeft: "auto" }}>
        Create
      </Button>
    </form>
  );
};
