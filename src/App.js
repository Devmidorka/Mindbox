import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import ControlPanel from "./components/ControlPanel";
import InfoPanel from "./components/InfoPanel";

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
    const activeSort = sortItems.buttons[sortItems.active]

    const sortTodos = (todos, condition) => {

        switch (condition){
            case 'active': return todos.filter(todo => todo.isCompleted === false);
            case 'completed': return todos.filter(todo => todo.isCompleted === true);
            default: return todos
        }
    }

    const [isOpen, setIsOpen] = useState(true)


    function changeStatus (id, status){
        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, isCompleted:status}  : todo
        ))
    }

    const controlChange = (e, changeInput) => {
        if(e.key === 'Enter'){
            setTodos([...todos, {
                id: todos[todos.length-1].id + 1,
                title: e.target.value,
                isCompleted: false
            }])
            changeInput('')
            setIsOpen(true)

        }
    }
    const sortedTodos = sortTodos(todos, activeSort.condition)
    return (
        <div className={'app'}>
            <div className={'todoWrapper'}>
                <h1>todos</h1>
                <div className="todo">
                    <ControlPanel setIsOpen = {setIsOpen} isOpen={isOpen} controlChange={controlChange}/>
                    {isOpen ?
                        <TodoList todos={sortedTodos} changeStatus={changeStatus}/>
                        :
                        null
                    }
                    <InfoPanel
                        countOfItems={sortedTodos.length}
                        sort={sortItems}
                        changeActive={(index) => {
                            setSortItems({...sortItems, active:index})
                        }}/>
                </div>

            </div>
        </div>
    );
};

export default App;