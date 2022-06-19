import React from 'react';
import Checkbox from "./Checkbox";

const TodoItem = ({id, title, isCompleted, changeStatus}) => {
    console.log('Render')
    return (
        <div
            className={'todoItem'}
            data-testid={'todo-item'}
        >
            <Checkbox
                state={isCompleted}
                onChange={changeStatus}
                todoId={id}
            />
            <p className={`todoTitle ${isCompleted ? 'completed' : ''}`}>{title}</p>
        </div>
    );
};

export default TodoItem;