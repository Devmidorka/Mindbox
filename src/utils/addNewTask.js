export const addNewTask = (title, todos, setTodos) => {
    setTodos([...todos, {
        id: todos[todos.length-1].id + 1,
        title,
        isCompleted: false
    }])

}