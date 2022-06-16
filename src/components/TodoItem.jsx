import React from 'react';
import Checkbox from "./Checkbox";

const TodoItem = ({id, title, isCompleted, changeStatus}) => {
    return (
        <div className={'todoItem'}>
            <Checkbox state={isCompleted} onChange={changeStatus} todoId={id}/>
            <p className={`todoTitle ${isCompleted ? 'completed' : ''}`}>{title}</p>
        </div>
    );
};

export default TodoItem;