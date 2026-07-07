import React, { useState } from "react";
import type { Todo } from "./types/Todo";
import TodoCard from "./component/TodoCard/TodoCard";
import styles from "./App.module.css";

export default function App() {
 
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Dinner", completed: false, time: "Today at 8:00 PM" },
    { id: "2", title: "Walk with Coby", completed: false, time: "Today at 3:30 PM" },
    { id: "3", title: "Buy Groceries", completed: false, time: "Today at 10:00 AM" },
    { id: "4", title: "Go to repair shop", completed: false, time: "Today at 9:00 AM" }
  ]);

  const handleAddTodo = (title: string) => {
   
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
      time: "Today at 6:23 AM" 
    };

    setTodos([newTodo, ...todos]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className={styles.pageLayout}>
      <div className={styles.logoSide}>
        <h1>Todo</h1>
      </div>
      
      <div className={styles.cardSide}>
        <TodoCard 
          todos={todos}
          onAdd={handleAddTodo}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}