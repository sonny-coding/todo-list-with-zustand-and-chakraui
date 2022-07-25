import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useStore } from "../stores";
import { useState } from "react";

function TodoForm() {
  const [text, setText] = useState("");
  const addTodo = useStore((state) => state.addTodo);
  return (
    <Box w="100%">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setText("");
          addTodo(text);
        }}
      >
        <InputGroup>
          <Input
            value={text}
            placeholder="add todo..."
            size="lg"
            variant={"flushed"}
            onChange={(evt) => setText(evt.target.value)}
          />
          <InputRightElement
            onClick={() => addTodo(text)}
            children={
              <IconButton
                // mr="2"
                mt="2"
                colorScheme="blue"
                aria-label="Search database"
                icon={<AddIcon />}
              />
            }
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default TodoForm;
