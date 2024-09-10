import {createContext,useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"adding Todo",
            completed:false,

        }
    ],
    addTodo : (todo)=>{ },
    updateTodo :(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted :(id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider