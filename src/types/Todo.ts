export type Todo = {
  id: string
  title: string
  completed: boolean
}

export type TodoChange = {
  [K in keyof Todo]?: Todo[K]
}
