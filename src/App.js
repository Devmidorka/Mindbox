import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import ControlPanel from "./components/ControlPanel";
import InfoPanel from "./components/InfoPanel";
import {addNewTask} from "./utils/addNewTask";
import {sortTodos} from "./utils/sortTasks";
import {changeTaskStatus} from "./utils/changeTaskStatus";
import {clearCompleted} from "./utils/clearCompletedTasks";

const App = () => {

    const [todos, setTodos] = useState([
        {id: 0, title: 'Тестовое задание', isCompleted: false},
        {id: 1, title: 'Прекрасный код', isCompleted: true},
        {id: 2, title: 'Покрытие тестами', isCompleted: false},
    ])

    const [sortItems, setSortItems] = useState({
        buttons: [
            {title: 'All', condition: 'all'},
            {title: 'Active', condition: 'active'},
            {title: 'Completed', condition: 'completed'}
        ],
        active: 0

    })

    const [isOpen, setIsOpen] = useState(true)

    const activeSort = sortItems.buttons[sortItems.active]

    const inputClickEnter = (e, setIsModalOpen, changeInput) => {
        if (e.key === 'Enter') {
            addNewTask(e.target.value, todos, setTodos)
            setIsModalOpen(true)
            changeInput('')
        }
    }

    const sortedTodos = sortTodos(todos, activeSort.condition)

    return (
        <div className={'app'}>
            <div className={'todoWrapper'}>
                <h1>todos</h1>
                <div className="todo">
                    <ControlPanel
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                        addNewTask={(e, changeInput) => inputClickEnter(e, setIsOpen, changeInput)}
                    />
                    {isOpen ?
                        <TodoList
                            todos={sortedTodos}
                            changeStatus={(id, status) => changeTaskStatus(id, status, todos, setTodos)}
                        />
                        :
                        null
                    }
                    <InfoPanel
                        countOfItems={sortedTodos.length}
                        sort={sortItems}
                        changeActive={(index) => {
                            setSortItems({...sortItems, active: index})
                        }}
                        clearCompleted={() => clearCompleted(todos, setTodos)}
                    />
                </div>

            </div>
        </div>
    );
};

export default App;