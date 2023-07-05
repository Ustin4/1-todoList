import React, {ChangeEvent} from 'react';
import {Checkbox} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import {Delete} from "@mui/icons-material";
import {TaskType} from "./Todolist";
import {useDispatch} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";

export type TasksWithReduxPropsType = {
    task: TaskType
    todolistId: string
}

const TasksWithRedux = ({
                            todolistId,
                            task
                        }: TasksWithReduxPropsType) => {


    const dispatch = useDispatch()

    const removeTask = ()=>{
        dispatch(removeTaskAC(task.id,todolistId))
    }
    const changeTaskStatus=(e: ChangeEvent<HTMLInputElement>)=>{
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(task.id,newIsDoneValue,todolistId))
    }

    const changeTaskTitle=(title:string)=>{
    dispatch(changeTaskTitleAC(title))
    }

    return <div className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
)
    ;
};

export default TasksWithRedux;