import React from "react";
import ToDoItem from "../ToDoItem";

const ToDoList = ({ toDoList, onSelect, onDelete, onChangeStatus }) => {
  return (
    <>
      <div className="row pending-todos">
        <h5 className="card-title">Pending To-Do</h5>
        {toDoList
          .filter((toDo) => !toDo.isDone)
          .map((toDo) => {
            return (
              <ToDoItem
                key={toDo.index}
                toDoItem={toDo}
                onDelete={onDelete}
                onSelect={(t) => onSelect(t)}
                onChangeStatus={(index, checked) =>
                  onChangeStatus(index, checked)
                }
              />
            );
          })}
      </div>
      <div className="row resolved-todos">
        <h5 className="card-title">Resolved</h5>
        {toDoList
          .filter((toDo) => toDo.isDone)
          .map((toDo) => {
            return (
              <ToDoItem
                key={toDo.index}
                toDoItem={toDo}
                onDelete={onDelete}
                onSelect={(t) => onSelect(t)}
                onChangeStatus={(index, checked) =>
                  onChangeStatus(index, checked)
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default ToDoList;
