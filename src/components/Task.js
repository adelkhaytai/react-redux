import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {completeTask} from 'react-redux'
import { editTask } from '../redux/actions/taskActions'
const Task = ({task}) => {
    const dispatch = useDispatch()
    const [isEdit,setIsEditing]= useState(true)
    const [editValue, setEditValue] = useState(task.description)
    
    const handelEdit = (e)=>{
        e.preventDefault()
        let editedTask={
            id : task.id,
            description : editValue,
            isdone : false,

        }
        dispatch(editTask(edited))
        setIsEditing(false)
    }
    return (
    <div>
        <div className={`${task.isDone}` ? "completed" : ""} >
            {isEditing ? (
                <form onSubmit={handelEdit}>
                    <input type='text'
                    value={editValue}
                    onChange={(e)=>setEditValue(e.target.value)}
                    />
                    <button>save</button>
                </form>
            ) : (
                <div >
                <p onClick={ ()=> dispatch(completeTask(task))}>{task.description}</p>
                <button onClick={()=> setIsEditing(true)} >edit</button>
                </div>
            )}
           
        </div>
       
    </div>
  )
}

export default Task