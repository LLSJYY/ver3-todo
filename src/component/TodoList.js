import React, { useState } from "react";
import TodoContext from "./TodoContext";
import ReactModal from 'react-modal';

const TodoList = (props) => {
  const [modalInfo, setmodalInfo] = useState({});
  
  
  return (
    <>
      <ul>
        <TodoContext.Consumer>
          {({ store, type ,onCheck}) =>{
            switch(type){
            case 'All' :
              return store.map((el, index) => {
                return <li key={index}><input type="checkbox" onClick={(event)=>{onCheck(el.id,event.target.checked)}} />{el.text}<button onClick={() => { setmodalInfo({ isModalOpen: true, dataId: el.id }) }}>X</button></li>;
              })
            case 'Active' : 
            return store.filter((el)=>(el.completed===false)).map((el, index) => {
              return <li key={index}><input type="checkbox" onClick={(event)=>{onCheck(el.id,event.target.checked)}} />{el.text}<button onClick={() => { setmodalInfo({ isModalOpen: true, dataId: el.id }) }}>X</button></li>;
            })
            case 'Completed' : 
            return store.filter((el)=>(el.completed===true)).map((el, index) => {
              return <li key={index}><input type="checkbox" onClick={(event)=>{onCheck(el.id,event.target.checked)}} />{el.text}<button onClick={() => { setmodalInfo({ isModalOpen: true, dataId: el.id }) }}>X</button></li>;
            })
              
            default:
                break;
          }
          }
          }
        </TodoContext.Consumer>
      </ul>

      <TodoContext.Consumer>
        {({ onRemove }) => {
          const handleYBtn = () => {
            onRemove(modalInfo.dataId);
            setmodalInfo({ isModalOpen: false, dataId: "" });
          }

          const handleNBtn = () => {
            setmodalInfo({ isModalOpen: false, dataId: "" })
          }

          return <ReactModal
            isOpen={modalInfo.isModalOpen}
            ariaHideApp={false}
          >
            <h1 id="heading">삭제하시겠습니까?</h1>
            <div id="full_description">
              <button onClick={handleYBtn}>Y</button>
              <button onClick={handleNBtn} >N</button>
            </div>
          </ReactModal>
        }

        }
      </TodoContext.Consumer>

    </>

  )
}

export default TodoList;