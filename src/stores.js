import create from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export const useStore = create(
  persist(
    (set) => {
      return {
        count: 1,
        inc: () => set((state) => ({ count: state.count + 1 })),
        todos: [],
        addTodo: (newTask) =>
          set((state) => ({
            todos: [
              ...state.todos,
              { task: newTask, id: nanoid(), isCompleted: false },
            ],
          })),
        deleteTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),
        toggleTodo: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
            ),
          })),
        editTodo: (id, newTask) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, task: newTask } : todo
            ),
          })),
      };
    },
    { name: "todos" }
  )
);
