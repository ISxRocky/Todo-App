import TodoItem from "./TodoItem";
import styles from "../css/TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick}) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
};

export default TodoItems;