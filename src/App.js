import React from 'react';
import TodoItem from "./components/TodoItem";

const App = () => {
    return (
        <div style={{marginTop:'20px'}}>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
        </div>
    );
};

export default App;