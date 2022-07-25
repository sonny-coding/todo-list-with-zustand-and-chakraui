import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useStore } from "../stores";
import { useState } from "react";

function TodoForm() {
  const [text, setText] = useState("");
  const addTodo = useStore((state) => state.addTodo);
  return (
    <InputGroup onSubmit={() => addTodo(text)}>
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
  );
}

export default TodoForm;
