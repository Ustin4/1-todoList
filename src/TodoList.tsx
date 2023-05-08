import React, {ChangeEvent, ChangeEventHandler, FC, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import {getKeyEventProps} from "@testing-library/user-event/dist/keyboard/getEventProps";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title:string)
}
export type  TaskType = {
    id: string
    title: string
    isDone: boolean

}
let [title, setTitle] = useState('')
const addTask = ()=>{
    props.addTask(title)
    setTitle('')
}
const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.currentTarget.value)
}

const onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === 'Enter')addTask()

}
const TodoList: React.FC<TodoListPropsType> = ({tasks, title, removeTask, changeFilter}) => {

    const tasksJSX: Array<JSX.Element> = tasks.map((task) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => removeTask(task.id)}>x</button>
            </li>

        )
    })
    const onAllClickhendler =()=>{
         changeFilter("all")
    }

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyPressHandler}
               />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button onClick={}>All</button>
                <button onClick={() => changeFilter("active")}>Active</button>
                <button onClick={() => changeFilter("completed")}>Completed</button>
            </div>
        </div>

    );
};

export default TodoList;