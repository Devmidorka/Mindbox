export const clearCompleted = (todos, setTodos) => {
    setTodos(todos.filter(todo => todo.isCompleted === false))
}