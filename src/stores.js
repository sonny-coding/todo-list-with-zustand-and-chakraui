import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => {
  return {
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
    todos: [
      { task: "clean the bathroom", id: 1, isCompleted: false },
      { task: "eat dinner", id: 2, isCompleted: true },
    ],
    addTodo: (newTask) =>
      set((state) => ({
        todos: [
          ...state.todos,
          { task: newTask, id: nanoid(), isCompleted: false },
        ],
      })),
    deleteTodo: (id) =>
      set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      })),
    editTodo: (id, newTask) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, task: newTask } : todo
        ),
      })),
  };
});
