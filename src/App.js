import { useState, useEffect } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const sampleToDoList = [
  {
    text: "This is a sample ToDo",
    isDone: false,
    index: 0,
    inList: true,
  },
];
let newToDo = {
  text: "",
  isDone: false,
  inList: false,
};
let currentNumberOfToDos = 1; /// Starts with the sample ToDo

function App() {
  const [toDoArray, setToDoArray] = useState([...sampleToDoList]);
  const [currentToDo, setCurrentToDo] = useState({
    ...newToDo,
    index: currentNumberOfToDos,
  });

  const addToDo = (toDo) => {
    if (!toDo.inList) {
      toDo.inList = true;
      setToDoArray((currentToDoList) => [...currentToDoList, toDo]);
      currentNumberOfToDos++;
      setCurrentToDo({ ...newToDo, index: currentNumberOfToDos });
    } else {
      setCurrentToDo({ ...newToDo, index: currentNumberOfToDos });
      setToDoArray([...toDoArray]); //Clone array to force re-render on edited To-do
    }
    console.log(currentNumberOfToDos);
  };

  const changeStatus = (index, value) => {
    const toDo = toDoArray[index];
    toDo.isDone = value;
    setToDoArray([...toDoArray]); //Clone array to force re-render
  };

  useEffect(() => {
    /// This helps to load the text of the currently selected ToDo and load its state inside the ToDoForm
    /// Is it needed to be used together with the function below
    document.getElementById("toDoText").value = currentToDo.text;
  });
  const selectCurrentToDo = async (toDo) => {
    setCurrentToDo(toDo);
  };

  const removeToDo = (index) => {
    if (toDoArray.length > index) {
      setToDoArray((currentToDoList) => [
        ...currentToDoList.slice(0, index),
        ...currentToDoList.slice(index + 1),
      ]);
      currentNumberOfToDos--;
      setCurrentToDo({ ...newToDo, index: currentNumberOfToDos });
    }
  };

  return (
    <div className="todo-container">
      <div className="card todo-form-container">
        <ToDoForm currentToDo={currentToDo} onAdd={addToDo} />
      </div>
      <div className="card todo-list-container">
        <ToDoList
          toDoList={toDoArray}
          onDelete={removeToDo}
          onSelect={selectCurrentToDo}
          onChangeStatus={changeStatus}
        />
      </div>
    </div>
  );
}

export default App;
