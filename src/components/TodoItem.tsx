import React from 'react'

interface TodoItemProps {
  id: string
  title: string
  completed: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
}

const TodoItem = ({ id, title, completed, style = {}, children }: TodoItemProps) => {
  return (
    <li style={{ color: 'red', backgroundColor: 'white', ...style }}>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
      {children}
    </li>
  )
}

export default TodoItem
