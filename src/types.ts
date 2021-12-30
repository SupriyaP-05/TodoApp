type Todo = {
    title: string;
    description: string;
    complete?: boolean;
  };
  
  type ToggleComplete = (selectedTodo: Todo) => void;
  
  type AddTodo = (newTodo: string) => void;