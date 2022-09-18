import './App.css';
import TodoList from './component/TodoList';
import TodoFilter from './component/TodoFilter';
import TodoInput from './component/TodoInput';
import TodoContext from './component/TodoContext';
import React, { useState  } from 'react';
import TodoCount from './component/TodoCount';
function App() {
  const [store, setStore] = useState([]);
  const [type,setType] = useState('All');
  
  const onClickFilter = (type) => {
      setType(type);
  };
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
    
  const onCheck = ({id,isChecked}) => {
    setStore(((prevData)=>{
        prevData.forEach((el)=>{
          if(el.id === id ){
            el.completed= isChecked;
          }
        })
        return prevData;
    })
    )
    console.log(store);

  }
  return (
    <>    
      <TodoContext.Provider value={{store,onRemove,onCheck}}>
      <TodoInput onEnter={onEnter} />
      <TodoList />
      <TodoCount/>
      <TodoFilter type = {type} onClickFilter = {onClickFilter} />
      </TodoContext.Provider>
    </>

  );
}

export default App;


//투두 라우터 무한스크롤, 스와이퍼 , redux,recall,context API, 포탈 ,