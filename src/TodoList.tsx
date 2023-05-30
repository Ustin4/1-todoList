import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask: (todolistId: string,taskId:string,updateTitle:string) => void
    updateTodoListHeandler:(todolistId: string,updateTitle:string) => void

}

export function Todolist(props: PropsType) {

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    const addTaskHandler = (title: string) => {
        props.addTask(title, props.id)
    }

    /*const updateTaskHandler=(tID:string,updateTitle:string)=>{
        props.updateTask(props.id,tID,updateTitle)
    }*/

    const updateTodoListHeandler=(updateTitle:string)=>{
        props.updateTodoListHeandler(props.id,updateTitle)
    }
    
    return <div>
        <h3> 
            <EditableSpan  callBack={updateTodoListHeandler} oldTitle={props.title}/>

            <button onClick={removeTodolist}>x</button>
        </h3>

        <AddItemForm callback={addTaskHandler}/>

        <ul>
            {
                props.tasks.map(t => {
                    const updateTaskHandler=(updateTitle:string)=>{
                        props.updateTask(props.id,t.id,updateTitle)
                    }

                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>

                        <EditableSpan oldTitle={t.title} callBack={updateTaskHandler}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


