import { ChakraProvider } from "@chakra-ui/react";
import { Text, Box, VStack } from "@chakra-ui/react";
import { useStore } from "./stores";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const todos = useStore((state) => state.todos);

  return (
    <ChakraProvider width="50%">
      <Box width="600px">
        <VStack>
          <Text fontSize="6xl">Todo List!</Text>
          <TodoForm />
          {todos.map((todo) => (
            <Box w="100%" mt="1">
              <Todo
                todo={todo.task}
                id={todo.id}
                isCompleted={todo.isCompleted}
              />
            </Box>
          ))}
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
