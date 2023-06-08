import { ADD_TASK, COMPLETE_TASK } from "../contants/actionTypes";

export const addTask = (task )=>{
    return{
        type:ADD_TASK,
        paylpoad:task
    }
}

export const completeTask = (task)=>{
    return{
        type: COMPLETE_TASK,
        paylpoad:task  
    }
}

export const editTask = (task)=>{
    return{
        type: EDIT_TASK,
        paylpoad : task
    }
}