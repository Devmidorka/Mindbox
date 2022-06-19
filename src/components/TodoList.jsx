import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, changeStatus}) => {
    return (
        <div
            className={'todoList'}
            data-testid={'todo-list'}
        >
            {todos.map(todo => {
                return <TodoItem
                    id={todo.id}
                    title={todo.title}
                    isCompleted={todo.isCompleted}
                    key={todo.id}
                    changeStatus={changeStatus}
                />
            })}
        </div>
    );
};

export default TodoList;