import React, { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import NewTodoForm from './components/NewTodoForm'
import { Todo } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => setTodos(data))
  }, [])

  const addTodo = (text: string) => {
    const newTodo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoItem id="112" title="first todo" completed={false} />
    </div>
  )
}

export default App
