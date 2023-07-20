import {action} from '@storybook/addon-actions';
import Task from "./Task";
import React from "react";
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";

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
    title: 'AppWithRedux Component',
    component: AppWithRedux,
    decorators:[ReduxStoreProviderDecorator]
}



export const AppWithReduxBaseExample = () => {
    return  <AppWithRedux/>
}