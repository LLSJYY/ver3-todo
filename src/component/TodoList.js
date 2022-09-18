import React, { useState } from "react";
import TodoContext from "./TodoContext";
import ReactModal from 'react-modal';

const TodoList = (props) => {
  const [modalInfo, setmodalInfo] = useState({});
  
  
  return (
    <>
      <ul>
        <TodoContext.Consumer>
          {({ store, onCheck }) =>
            store.map((el, index) => {
              return <li key={index}><input type="checkbox" onClick={(event) => {
                onCheck({
                  id: el.id,
                  isChecked: event.target.checked
                })
              }} />{el.text}<button onClick={() => { setmodalInfo({ isModalOpen: true, dataId: el.id }) }}>X</button></li>;
            })
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