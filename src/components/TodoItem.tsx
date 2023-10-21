import React from 'react'

interface TodoItemProps {
  id: string
  title: string
  completed: boolean
  children?: React.ReactNode
}

const TodoItem = ({ id, title, completed, children }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
      {children}
    </li>
  )
}

export default TodoItem
