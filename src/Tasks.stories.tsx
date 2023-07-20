import {AddItemForm} from "./AddItemForm";
import {action} from '@storybook/addon-actions';
import Task from "./Task";
import React from "react";

/*const meta: Meta<typeof AddItemForm> = {
    title: 'AddItemForm Component',
    component: AddItemForm,
}
export default meta;
type Story = StoryObj<typeof AddItemForm>

export const AddItemFormBaseExample: Story = {
    render: () => {
        return <AddItemForm addItem={(title: string) => {alert(title)}
        }/>
    }
}*/

export default {
    title: 'Tasks Component',
    component: Task,
}

const changeTaskStatusCallback = action('Status changed')
const changeTaskTitleCallback = action('Title changed')
const removeTaskCallback = action('Remove  tasks')


export const TasksBaseExample = () => {
    return <>
        <Task
            task={{id: '1', isDone: true, title: 'CSS'}}
            todolistId={'tidilistId1'}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}/>

        <Task
            task={{id: '2', isDone: false, title: 'JS'}}
            todolistId={'tidilistId2'}
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}/>

    </>
}