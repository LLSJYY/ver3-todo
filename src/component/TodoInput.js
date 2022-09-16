import React ,{ useRef } from "react";

const TodoInput = (props) => {
  const inputRef = useRef('');
  
  const onKeyUp = (event) => {
    if(event.key==='Enter' && event.target.value!==''){
    props.onEnter(event.target.value);
    inputRef.current.value = null;
  }
  }
  
  return (
    <><input type="text" onKeyUp={onKeyUp} ref={inputRef} /></>
  )
}

export default TodoInput;