
import React from 'react'

const Show = (props) => {
    const {todoList , deleteHandler , completeHandler} = props
  return (
    <div className="bottom">
    <div className="list">
      <h3>Todo List</h3>
      <div className="listatt">
        <p>list</p>
        <p>status</p>
        <p>close</p>
      </div>
      <div className="listcontent">
      {todoList.map((singleTask , key) => {
        return  ( 
          <div key={key} className="singlelist">
          <div className="name">
        <h3> {singleTask.taskName} </h3>
          </div>
        <div className="status" style={{backgroundColor : singleTask.isCompleted ? "green" : "lightblue"}}>
         { singleTask.isCompleted ? "Completed" : "Pending"}
        </div>
        <div className='icons' >
        <i onClick={() => deleteHandler(singleTask.id)} className="ri-delete-bin-5-fill"></i>
        <i onClick={() => completeHandler(singleTask.id)} className="ri-check-double-fill"></i>
        </div>
      </div>
       );

      })}
      </div>
    </div>
  </div>
  )
}

export default Show