import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { TodosPage } from "@pages/todosPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <TodosPage />
      </MantineProvider>
    </QueryClientProvider>
  );
};
