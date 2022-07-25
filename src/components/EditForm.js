import { Input, Box } from "@chakra-ui/react";
import { useStore } from "../stores";

import { useState } from "react";
function EditForm({ todo, id, setIsEditing }) {
  const [text, setText] = useState("");
  const editTodo = useStore((state) => state.editTodo);
  const handleSubmit = () => {
    console.log("hello");
    editTodo(id, text);
    setIsEditing((state) => !state);
  };

  return (
    <Box w="100%">
      <form onSubmit={() => handleSubmit()}>
        <Input
          // type="submit"
          value={text}
          placeholder={todo}
          size="md"
          variant={"flushed"}
          onChange={(evt) => setText(evt.target.value)}
        />
      </form>
    </Box>
  );
}

export default EditForm;
