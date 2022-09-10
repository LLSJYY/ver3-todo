import React, { useState } from "react";
import './TodoInput.css';
import TodoList from './TodoList';
import InputMsg from "../Common/InputMsg";
const TodoInput = () => {

  const [checkStatus, setCheckStatus] = useState(true);
  const [title, setTitle] = useState([]);

  const onChange = (event) => {
    const text = event.target.value;
    const status = text.trim().length;
    setCheckStatus(status === 0); // 글자길이수가
  }

  const handleOnKeypress = (event) => {
    if (event.key === "Enter" && !checkStatus) {
      const text = event.target.value;
      setTitle((prevData) => {
        return [...prevData
          , {
          id: Math.random().toString,
          text,
          completed: false,
        }
        ]
      })
      console.log(title)
    }
  };
  return (
    <> 
      <InputMsg/>
      <input className={`input ${checkStatus ? 'invaild' : ''}`} onKeyPress={handleOnKeypress} onChange={onChange} />
      <TodoList store={title} />
    </>)
}

//일정 글자가 넘으면 더이상 입력이 안되게 해보기
export default TodoInput;   