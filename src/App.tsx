import React, { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

type Todo = {
  id: string
  number: string
  completed: boolean
}

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<string[]>([])
  const [todo, setTodo] = useState<Todo | null>(null)

  return (
    <div className="App">
      <TodoItem id="112" title="first todo" completed={false} />
    </div>
  )
}

export default App
