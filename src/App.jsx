import { useState } from "react";

import "./App.css";
import Task from "./component/Task";
import TaskContainer from "./component/TaskContainer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState('');
  const [inputValue, setInputValue] = useState("");

  const handleChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (inputValue.trim()) {
      if (editIndex !== '') {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? inputValue : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleEdit = (task, index) => {
    setInputValue(task);
    setEditIndex(index);
  };

  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <>
      <div className="heading">
        <h1>Task List</h1>
      </div>

      <Task
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      
      />
      <TaskContainer
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        tasks={tasks}
      />
    </>
  );
}

export default App;

