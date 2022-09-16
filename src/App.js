import './App.css';
import TodoList from './component/TodoList';
import TodoFilter from './component/TodoFilter';
import TodoInput from './component/TodoInput';
import TodoContext from './component/TodoContext';
import React, { useState  } from 'react';
import Modal from './component/UI/Modal';
function App() {
  const [store, setStore] = useState([]);

  const onEnter = (text) => {
    setStore((prevData) => {
      return [...prevData,
      {
        id: Math.floor(Math.random() * 5000),
        text,
        completed: false,
      }
      ]
    })
  }

  const onRemove = (id) => {
    setStore((prevData)=> {
      return prevData.filter((el)=> {
          return el.id !== id 
      })
    })
  };
    

  return (
    <>    
      <TodoContext.Provider value={{store,onRemove}}>
      <TodoInput onEnter={onEnter} />
      <TodoList />
      <TodoFilter/>
      </TodoContext.Provider>
    </>

  );
}

export default App;


//투두 라우터 무한스크롤, 스와이퍼 , redux,recall,context API, 포탈 ,