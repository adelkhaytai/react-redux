import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AddTask = () => {
    const [task, setTask]= useState("")
    const dispatch = useDispatch()
    const AddTaskFunction = ()=>{
      if(task){
        dispatch(addTask(task))
      }else{
        alert("please enter a task")
      }
    }
  return (
    <div>
        <input type='text' value={task} onChange={(e)=> setTask(e.target.value)}/>
        <button>Add Task</button>
    </div>
  )
}

export default AddTask