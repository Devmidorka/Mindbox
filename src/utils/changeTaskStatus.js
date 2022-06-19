export const changeTaskStatus = (id, status, todos, setTodos) => {
    setTodos(todos.map(todo =>
        todo.id === id ? {...todo, isCompleted: status} : todo
    ))
}