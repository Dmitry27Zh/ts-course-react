import React, { useEffect, useState } from 'react'
import './App.css'
import NewTodoForm from './components/NewTodoForm'
import { Todo, TodoChange } from './types'
import TodoList from './components/TodoList'

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
  const onChange = (id: Todo['id'], change: TodoChange) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo = { ...todo, ...change }
      }

      return todo
    })
    setTodos(newTodos)
  }
  const onRemove = (id: Todo['id']) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo} />
      <TodoList todos={todos} onChange={onChange} onRemove={onRemove} />
    </div>
  )
}

export default App
