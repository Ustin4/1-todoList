import React, {ChangeEvent, memo, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import IconButton from "@mui/material/IconButton/IconButton";
import {Delete} from "@mui/icons-material";
import {Button, Checkbox} from "@mui/material";
import Task from "./Task";


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
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Todolist = memo((props: PropsType) => {
    console.log("TodoList")
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id])

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);


    let tasks = props.tasks

    if (props.filter === "active") {
        tasks = tasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasks = tasks.filter(t => t.isDone === true);
    }
    /*  const removeTask = useCallback((taskId: string) => props.removeTask(taskId, props.id))

      const changeTaskStatus = useCallback((taskId: string, isDone: boolean) => {
          props.changeTaskStatus(taskId, isDone);
      })

      const changeTaskTitle = useCallback((taskId: string, newValue: string) => {
          props.changeTaskTitle(taskId, newValue, props.id);
      })*/

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                props.tasks.map(t => {
                    return <Task
                        key={t.id}
                        task={t}
                        todolistId={props.id}
                        changeTaskStatus={props.changeTaskStatus}
                        changeTaskTitle={props.changeTaskTitle}
                        removeTask={props.removeTask}/>
                })
            }
        </div>
        <div>
            <ButtonWithMemo variant={props.filter === 'all' ? 'outlined' : 'text'}
                            onClick={onAllClickHandler}
                            color={'primary'}
                            title={'All'}
            />All


            <ButtonWithMemo title={'Active'}
                            color={'primary'}
                            onClick={onAllClickHandler}
                            variant={props.filter === 'active' ? 'outlined' : 'text'}/>


            <ButtonWithMemo variant={props.filter === 'active' ? 'outlined' : 'text'}
                            onClick={onActiveClickHandler}
                            color={'primary'}
                            title={'completed'}
            />Active

            <ButtonWithMemo variant={props.filter === 'completed' ? 'outlined' : 'text'}
                            onClick={onCompletedClickHandler}
                            color={'secondary'}
                            title={''}
            />Completed

        </div>
    </div>
})

type ButtonWithMemoPropsType = {
    title: string
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    variant: 'text' | 'outlined' | 'contained'
    onClick: () => void
}

const ButtonWithMemo = memo((props: ButtonWithMemoPropsType) => {
    return <Button variant={props.variant}
                   onClick={props.onClick}
                   color={props.color}>{props.title}
    </Button>
})








