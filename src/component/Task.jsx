import React from "react";
import Style from "./Task.module.css";

export default function Task({inputValue, handleChange ,handleSubmit}) {
 
  return (
    <div className="container" onSubmit={handleSubmit} >
      <form>
        <input
          type="text"
          name="text"
          className="input"
          placeholder="Type here..."
          value={inputValue}
         onChange={handleChange}
         ></input>
      </form>
      <button type="submit" onClick={handleSubmit}>
        <span className={Style.btn}>ADD</span>
      </button>
    </div>
  );
}


