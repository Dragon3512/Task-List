import React from 'react'
import '../App.css'
import Style from "./Task.module.css";

export default function ListTask({task, handleDelete, handleEdit, index}) {

  return (
    <div className="my">
      <div className="row kg-row">
        <div className="col-4">{task}</div>
        <div className="col-2">
          <button onClick={handleDelete}
            type="button"
            className="btn btn-danger kg-button"
          >
           Delete
          </button>
          <button onClick={()=>handleEdit(task,index)} className={Style.btn} type="button" >
  Edit
</button>
        </div>
      </div>
    </div>
  )
}


