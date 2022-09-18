import React from "react";

const TodoFilter = (props) => {
  return (
    <>
      <button onClick={props.onClickFilter({ type: 'All' })}>All</button>
      <button onClick={props.onClickFilter({ type: 'Completed' })}>Completed</button>
      <button onClick={props.onClickFilter({ type: 'Active' })}>Active</button>
    </>
  )
}

export default TodoFilter;