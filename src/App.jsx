import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    let todosString = JSON.parse(localStorage.getItem("todos"))
    if (todosString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (id) => {
    let todo = todos.filter(item => item.id === id)
    setTodo(todo[0].todo)
    let newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (id) => {
    let con = confirm("Do you want to delete this Todo?")
    if (con) {
      let newTodos = todos.filter(todo => {
        return todo.id !== id
      })
      setTodos(newTodos)
      saveToLS()
    }
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let updatedTodos = todos.filter((todo) => {
      if (id == todo.id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    setTodos(updatedTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container  md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <h1 className='text-center font-bold text-xl'>iTask - Manage your Todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <div className='flex'>
            <input onChange={handleChange} value={todo} className='w-full rounded-full' type="text" />
            <button onClick={handleAdd} disabled={todo.length<=3} className=' bg-violet-800 hover:bg-violet-950 p-4 py-2 text-sm font-bold text-white rounded-full mx-2'>Save</button>
          </div>
        </div>
        <input id="show" onChange={toggleFinished} type="checkbox" disabled:bg-violet-700 checked={showFinished} />
        <label className='mx-2' htmlFor='show'>Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h1 className='text-lg font-bold'>Your Todos</h1>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map((item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 justify-between my-3">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={() => { handleEdit(item.id) }} className=' bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
                <button onClick={() => { handleDelete(item.id) }} className=' bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
              </div>
            </div>
          }))}
        </div>
      </div>
    </>
  )
}

export default App
