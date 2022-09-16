import React,{useState} from "react";
import TodoContext from "./TodoContext";
import ReactModal from 'react-modal';

const TodoList = (props) => {
  const [isOpen,setIsOpen] = useState(false);

  return (
   <>
   <ul>
  <TodoContext.Consumer>
    {({store,onRemove})=>  
      store.map((el,index)=> {
        return <li key={index}><input type="checkbox"/>{el.text}<button onClick={()=> {setIsOpen(true)}}>X</button></li>;
    })  
  }
  </TodoContext.Consumer>
  </ul>
  <ReactModal
    isOpen={isOpen}
    ariaHideApp={false} 
    >
    <h1 id="heading">삭제하시겠습니까?</h1>
    <div id="full_description">
      <button>Y</button>
      <button onClick = {()=>{setIsOpen(false)}} >N</button>
    </div>
  </ReactModal> </> 
  )
}

export default TodoList;