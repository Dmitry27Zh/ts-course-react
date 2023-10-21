import React, { ChangeEvent, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import NewTodoForm from './components/NewTodoForm'

type Todo = {
  id: string
  number: string
  completed: boolean
}

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const addTodo = () => {
    setTodos([text, ...todos])
    setText('')
  }

  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem id="112" title="first todo" completed={false} />
    </div>
  )
}

export default App
