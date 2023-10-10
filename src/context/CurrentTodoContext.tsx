import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";
import { Todo } from "../interface/taskInterface";

const initTodo: Todo = {
  userId: 0,
  id: 0,
  title: "",
  completed: false,
};

type TodoContextValue = {
  currentTodo: Todo;
  setCurrentTodo: Dispatch<SetStateAction<Todo>>;
};

const CurrentTodoContext = createContext<TodoContextValue | undefined>(
  undefined
);

const { Provider: TodoProvider } = CurrentTodoContext;

type CurrentTodoProviderProps = {
  children: ReactNode;
};

export const CurrentTodoProvider: FC<CurrentTodoProviderProps> = ({
  children,
}) => {
  const [currentTodo, setCurrentTodo] = useState<Todo>(initTodo);

  return (
    <TodoProvider value={{ currentTodo, setCurrentTodo }}>
      {children}
    </TodoProvider>
  );
};

export const useCurrentTodo = () => {
  const context = useContext(CurrentTodoContext);
  if (!context) {
    throw new Error("useCurrentTodo must be used within a CurrentTodoProvider");
  }
  return context;
};
