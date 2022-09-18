import React from "react";
import TodoContext from "./TodoContext";

const TodoCount = () => {
  return <>
    <TodoContext.Consumer>
      {({ store }) => {
       return <span>{`${store.filter((el) => (el.completed === true)).length} ${store.length > 1 ? 'left' : 'lefts'} item`} </span>

      }
      }
    </TodoContext.Consumer>
  </>
}

export default TodoCount;