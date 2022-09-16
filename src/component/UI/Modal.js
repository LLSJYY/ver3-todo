import React, { useState } from "react";
import ReactModal from 'react-modal';


const Modal = () => {
  const [isOpen,setIsOpen] = useState(true);

  const onClick = (event) => {
    setIsOpen(false);
  };
  return <><ReactModal
    isOpen={isOpen}
    ariaHideApp={false} 
    >
    <h1 id="heading">삭제하시겠습니까?</h1>
    <div id="full_description">
      <button>Y</button>
      <button onClick = {onClick} >N</button>
    </div>
  </ReactModal>
  </>
}

export default Modal;