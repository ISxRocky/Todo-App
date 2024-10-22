import { useState } from "react";
import styles from "../css/AddTodo.module.css";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleTodoDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            className={styles.inputBox}
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleTodoNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inputBox}
            type="date"
            value={todoDate}
            onChange={handleTodoDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
