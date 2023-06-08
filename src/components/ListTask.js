import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
const tasks = useSelector(state=>state.taskReducers.tasks)
console.log(tasks)
const [filter,setFilter] = useState("All")
    return (
    <div>
        <div>
        <button onClick={()=> setFilter("All")}>All</button>
        <button onClick={()=> setFilter("To do")}>To do</button>
        <button onClick={()=> setFilter("Done")}>Done</button>
        </div>
        <div>
           {(filter === "done"
           ? tasks.filter(task=>task.isDone === true)
           : filter === "To do"
           ? tasks.filter(task => task.isDone === false)
           :tasks
           )}
        </div>
    </div>
    )
}

export default ListTask