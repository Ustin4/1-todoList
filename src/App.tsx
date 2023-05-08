import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const title = "What to learn"

    const [tasks, setTasks] = React.useState<TaskType[]>(
        [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS/ES6/TS", isDone: true},
            {id: v1(), title: "REACT", isDone: false},
        ]
    )

    const [filter, setFilter] = useState<FilterValuesType>("completed")
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    //UI
    const removeTask = (taskId: string) => {
        const updatedTasks = tasks.filter((task: TaskType) => task.id !== taskId)
        setTasks(updatedTasks)
    }

    function addTask(title:string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    const getFilteredTasks = (tasks: Array<TaskType>, filter: FilterValuesType): Array<TaskType> => {
        switch (filter) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }

    }
    const filteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter)
    return (
        <div className="App">
            <TodoList
                tasks={filteredTasks}
                title={title}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}/>

        </div>
    );
}

export default App;
