import React, { useState } from "react";

const ToDoForm = ({ currentToDo, onAdd }) => {
  const [text, setText] = useState(currentToDo.text);

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a value to continue");
      return;
    }
    currentToDo.text = text;
    onAdd(currentToDo);
    setText("");
  };

  return (
    <div className="row">
      <form onSubmit={submitFormHandler}>
        <input
          id="toDoText"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn btn-info">
          {currentToDo.inList ? "Save" : "Add"}
        </button>
        <br />
        <p>* Tip: Click in the title of any ToDo to edit it</p>
      </form>
    </div>
  );
};

export default ToDoForm;
