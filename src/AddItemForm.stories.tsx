/*
import {AddItemForm} from "./AddItemForm";
import {action} from '@storybook/addon-actions';

/!*const meta: Meta<typeof AddItemForm> = {
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
}*!/

export default {
    title: 'AddItemForm Component',
    component: AddItemForm,
}

const callback =  action('Button add was pressed inside the form')

export const AddItemFromBaseExample =(props:any)=>{
    return<AddItemForm addItem={callback}/>
}*/
