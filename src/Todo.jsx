import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask, DeleteTask } from "./ReducerFun";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [Text, setText] = useState("");
  const Dispatch = useDispatch();
  const state = useSelector((state) => state.task);

  const handleText = (e) => {
    setText(e.target.value);
    // setText("")
  };

  const hanldeAdd = (e) => {
    e.preventDefault();
    Dispatch(AddTask(Text));
    return setText("");
  };

  const handleTaskDelete = (id) => {
    return Dispatch(DeleteTask(id));
  };

  return (
    <>
      <div id="divp">
        <h1>Todo List</h1>
        <form onSubmit={hanldeAdd}>
          <input
            type="text"
            onChange={handleText}
            placeholder="Add Todu List"
            value={Text}
          ></input>
          <button type="submit">ADD TO LIST</button>
        </form>
        <ul>
          {state.map((curEle, index) => {
            return (
              <li id="li" key={index}>
                <p className="task-item">
                  {index} : {curEle}
                </p>
                <MdDeleteForever
                  className="icon-style"
                  onClick={() => handleTaskDelete(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
