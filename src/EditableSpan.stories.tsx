import {action} from '@storybook/addon-actions';
import Task from "./Task";
import React from "react";
import {EditableSpan} from "./EditableSpan";

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
    title: 'EditableSpan Component',
    component: EditableSpan,
}

const ChangeCallback = action('Value changed')


export const EditableSpanBaseExample = () => {
    return <EditableSpan value={'start value'} onChange={ChangeCallback}/>
}