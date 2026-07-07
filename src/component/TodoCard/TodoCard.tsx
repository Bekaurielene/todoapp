import React, { useState } from "react";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import styles from "./TodoCard.module.css";
import type { Todo } from "../../types/Todo";

interface TodoCardProps {
  todos: Todo[];
  onAdd: (title: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoCard({
  todos,
  onAdd,
  onToggle,
  onDelete,
}: TodoCardProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.todoCard}>
      <Header />
      <div className={styles.cardContent}>
        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>✓</span>
            <input 
              type="text" 
              placeholder="Note" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.addBtn}>+</button>
        </form>

        <TodoList
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}