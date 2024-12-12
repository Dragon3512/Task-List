import React from "react";
import ListTask from './ListTask'

export default function TaskContainer({ tasks ,handleEdit,handleDelete}) {
  if (!tasks || tasks.length === 0) return <div className="task-container">No Tasks Available</div>;

  return (
    <div className="task-container">
      {tasks.map((task, index) => (
       <ListTask key={index} task={task} handleEdit={handleEdit}  handleDelete={() => handleDelete(task)} />
      ))}
    </div>
  );
}



