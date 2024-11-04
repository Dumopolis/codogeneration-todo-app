import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { CheckBox } from "@shared/ui/checkBox";
import { Input } from "@shared/ui/input";
import { TextArea } from "@shared/ui/textArea";

export const TodoForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { title: "", description: "" },

    validate: {
      title: (value) => (value.length <= 0 ? "Title required" : null),
    },
  });
  const handleSubmit = (values: any) => {
    console.log(values);
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
