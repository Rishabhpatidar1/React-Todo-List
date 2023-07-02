
import React, { useState } from 'react'
import "./App.css"
import Create from './Components/Create'
import Show from './Components/Show'

const App = () => {

  const [task, setTask] = useState("")
  const [todoList, setTodolist] = useState([])

  const clickHandler = () => {
    // const newTodolist = [...todoList , task]
    // setTodolist(newTodolist)
    var newTask = {
      id : todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName : task,
      isCompleted: false,
    }
    if(task.trim().length !== 0) {
      setTodolist([...todoList , newTask])
      setTask("")
    }
    else{
      alert("please add a task")
    }
  }

  // const deleteHandler = (taskName) => {
  //   const newTodolist = todoList.filter((tasks) => {
  //     if (tasks !== taskName){
  //       return true;
  //     }
  //   })
  //   setTodolist(newTodolist)
  // }

  const deleteHandler = (id) =>{
    // const newTodolist = todoList.filter((tasks) =>  tasks !== taskName)
    // setTodolist(newTodolist)
    // setTodolist(todoList.filter((tasks) => tasks !== taskName));
    setTodolist(todoList.filter((tasks) => tasks.id !== id));
  }

  const completeHandler = (id) => {
    setTodolist(todoList.map((tasks) => {
      if(tasks.id === id){
        return {...tasks , isCompleted :true}
      }
      else{
        return tasks;
      }
    }))
  }

  return (
    <div className='main'>    
    <Create 
      setTask ={setTask}
      task ={task}
      clickHandler = {clickHandler}
    />


    <Show 
      todoList = {todoList}
      deleteHandler = {deleteHandler}
      completeHandler = {completeHandler}
    />

    </div>
  )
}


export default App