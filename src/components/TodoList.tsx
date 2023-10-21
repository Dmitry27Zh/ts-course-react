import { Todo, TodoChange } from '../types'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onChange: (id: Todo['id'], change: TodoChange) => void
  onRemove: (id: Todo['id']) => void
}

const TodoList = ({ todos, onChange, onRemove }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          onChange={onChange}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}

export default TodoList
