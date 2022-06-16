import React from 'react';
import {useState} from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id: 0, title: 'Тестовое задание', isCompleted: false},
        {id: 1, title: 'Прекрасный код', isCompleted: true},
        {id: 2, title: 'Покрытие тестами', isCompleted: false},
    ])

    function changeStatus (id, status){
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, isCompleted:status}  : todo
        ))
    }

    return (
        <div className={'todo'}>
            <h1>todos</h1>
            <div className={'todoList'}>
                {todos.map (todo => {
                    return <TodoItem
                        id={todo.id}
                        title={todo.title}
                        isCompleted={todo.isCompleted}
                        key={todo.id}
                        changeStatus={changeStatus}
                    />
                })}
            </div>
        </div>

    );
};

export default TodoList;