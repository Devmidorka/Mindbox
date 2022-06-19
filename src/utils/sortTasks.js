export const sortTodos = (todos, condition) => {
    switch (condition) {
        case 'active':
            return todos.filter(todo => todo.isCompleted === false);
        case 'completed':
            return todos.filter(todo => todo.isCompleted === true);
        default:
            return todos
    }
}