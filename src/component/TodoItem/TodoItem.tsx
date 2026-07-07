import type { Todo } from "../../types/Todo";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.textSide}>
        <span className={`${styles.title} ${todo.completed ? styles.completedText : ""}`}>
          {todo.title}
        </span>
        <span className={styles.time}>{todo.time}</span>
      </div>
      
      <div className={styles.actionsSide}>
        <button 
          className={`${styles.circleBtn} ${todo.completed ? styles.checked : ""}`} 
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed && "✓"}
        </button>

       
        <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#ff5b5c" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}