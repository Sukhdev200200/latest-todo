import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({todo}) {
    const [todoEditable, setTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleCompleted} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setTodoEditable(false)
    }

    const toggleComplete = () => {
        toggleCompleted(todo.id)
    }

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7] line-through" : "bg-[#ccbed7]"}`}
    >
        <input type="checkbox" 
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleComplete}
        />
        <input type="text" 
        className={`border outline-none w-full bg-transparent rounded-lg ${todoEditable ? "border-black/10 px-2" : "border-transparent"}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!todoEditable}
        />
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
            if (todo.completed) return
            if (todoEditable) {
                editTodo()
            }else setTodoEditable((prev) => !prev)
        }}
        disabled={todo.completed}
        >{todoEditable ? "📁": "✏️"}</button>
        <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => deleteTodo(todo.id)}
        >❌</button>
    </div>
  )
}

export default TodoItem