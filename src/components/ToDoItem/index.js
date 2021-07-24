import React from "react";

const ToDoItem = ({ toDoItem, onSelect, onDelete, onChangeStatus }) => {
  return (
    <div className="todo-item">
      <p onClick={() => onSelect(toDoItem)}>{toDoItem.text}</p>
      <input
        type="checkbox"
        checked={toDoItem.isDone}
        onChange={(e) => onChangeStatus(toDoItem.index, e.target.checked)}
      />
      <button
        className="btn btn-danger"
        onClick={() => onDelete(toDoItem.index)}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
