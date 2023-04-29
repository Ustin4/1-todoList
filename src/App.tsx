import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


function App() {
    const tasks: TaskType[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6/TS", isDone: true},
        {id: 3, title: "REACT", isDone: false},

    ]
    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                title="What to learn"/>

        </div>
    );
}

export default App;
