import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { TodosPage } from "@pages/todosPage";

export const App = () => {
  return (
    <MantineProvider>
      <TodosPage />
    </MantineProvider>
  );
};
