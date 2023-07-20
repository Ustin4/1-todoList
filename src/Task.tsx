import React, {ChangeEvent, memo} from 'react';
import {Checkbox} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import {Delete} from "@mui/icons-material";
import {TaskType} from "./Todolist";

export type TaskPropsType = {
    task: TaskType
    changeTaskStatus: (taskId: string, isDone: boolean,todolistId:string) => void
    changeTaskTitle: (taskId: string, newTitle: string,todolistId:string) => void
    removeTask: (taskId: string,todolistId:string) => void
    todolistId: string
}

const Task = memo(({
                  task,
                  removeTask,
                  changeTaskStatus,
                  changeTaskTitle
              }: TaskPropsType) => {

    const onClickHandler = () => removeTask(task.id,)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        changeTaskStatus(task.id, newIsDoneValue,);
    }
    const onTitleChangeHandler = (newValue: string) => {
        changeTaskTitle(task.id, newValue,);
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
})

export default Task;