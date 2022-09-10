import React, { useState } from "react";

const TodoList = (props) => {

  return (
    <ul>
      {props.store.map((data,index) => {
      return <li key={index}>{data.text}</li>;   
    })}  
    </ul>
  )
};

export default TodoList;