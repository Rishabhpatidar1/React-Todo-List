
import React from 'react'

const Create = (props) => {
  return (
    <div className="top">
    <h2>ToDo List</h2>
    <div className="task">
      <input type="text" placeholder='What would you like to do ?' onChange={(e) => props.setTask(e.target.value)} value={props.task} />
      <button onClick={props.clickHandler} >ADD</button>
    </div>
  </div>
  )
}

export default Create