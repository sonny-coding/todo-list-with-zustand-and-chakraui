import { Button, HStack, IconButton } from "@chakra-ui/react";
import { MinusIcon, EditIcon } from "@chakra-ui/icons";
import { useStore } from "../stores";
import { useState } from "react";
import EditForm from "./EditForm";

function Todo({ todo, id, isCompleted }) {
  const deleteTodo = useStore((state) => state.deleteTodo);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const [isEditing, setIsEditing] = useState(false);

  const viewingMode = (
    <>
      <Button
        justifyContent="flex-start"
        w="100%"
        colorScheme="teal"
        variant="ghost"
        textDecoration={isCompleted && "line-through"}
        onClick={() => toggleTodo(id)}
      >
        {todo}
      </Button>
      <IconButton
        onClick={() => deleteTodo(id)}
        colorScheme="blue"
        aria-label="Search database"
        icon={<MinusIcon />}
      />
    </>
  );
  const editingMode = (
    <EditForm todo={todo} id={id} setIsEditing={setIsEditing} />
  );

  return (
    <HStack w="100%">
      <IconButton
        colorScheme="blue"
        aria-label="Edit Todo"
        icon={<EditIcon />}
        onClick={() => setIsEditing(!isEditing)}
      />
      {!isEditing ? viewingMode : editingMode}
    </HStack>
  );
}

export default Todo;
