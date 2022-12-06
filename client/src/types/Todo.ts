export interface Todo {
  todoId: string
  createdAt: string
  name: string
  desc: string
  dueDate: string
  done: boolean
  attachmentUrl?: string
}
