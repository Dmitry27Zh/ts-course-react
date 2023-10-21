import React, { ChangeEvent } from 'react'
import { Todo, TodoChange } from '../types'

interface TodoItemProps extends Todo {
  onChange: (id: Todo['id'], change: TodoChange) => void
  onRemove: (id: Todo['id']) => void
  style?: React.CSSProperties
  children?: React.ReactNode
}

const TodoItem = ({ id, title, completed, style = {}, onChange, onRemove, children }: TodoItemProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(id, { completed: event.target.checked })
  }

  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      <span>{title}</span>
      <span onClick={() => onRemove(id)}>&times;</span>
      {children}
    </li>
  )
}

export default TodoItem
