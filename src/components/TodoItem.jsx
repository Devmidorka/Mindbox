import React, {useState} from 'react';
import Checkbox from "./Checkbox";

const TodoItem = () => {
    const [todo, setTodo] = useState({id: 0 , title: 'New', isCompleted: true})

    function changeStatus (status){
        setTodo({...todo, isCompleted: status})
    }

    return (
        <div className={'todoItem'}>
            <Checkbox state={todo.isCompleted} onChange={changeStatus}/>
            <p className={`todoTitle ${todo.isCompleted ? 'completed' : ''}`}>{todo.title}</p>
        </div>
    );
};

export default TodoItem;