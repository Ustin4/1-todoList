import {TasksStateType} from '../App';
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type removeTaskActionType = ReturnType<typeof removeTaskAC>

export type addTasksActionType = ReturnType<typeof addTasksAC>

export type changeTasksActionType = ReturnType<typeof changeTaskStatusAC>
export type changeTaskTitleType = ReturnType<typeof changeTaskTitleAC>


type ActionsType =
    removeTaskActionType
    | addTasksActionType
    | changeTasksActionType
    | changeTaskTitleType
    | AddTodolistActionType
    | RemoveTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.payload.todolistId]:
                    state[action.payload.todolistId].filter(task => task.id !== action.payload.taskId)
            }
        case 'ADD-TASKS':
            return {
                ...state,
                [action.payload.todolistId]:
                    [{id: v1(), title: action.payload.title, isDone: false},
                        ...state[action.payload.todolistId]]
            }
        case 'CHANGE-TASK':
            return {
                ...state,
                [action.payload.todolistId]:
                    state[action.payload.todolistId]
                        .map(task => task.id === action.payload.taskId ? {
                            ...task,
                            isDone: action.payload.isDone
                        } : task)

            }
        case 'CHANGE-TITLE':
            return {
                ...state,
                [action.payload.todolistId]:
                    state[action.payload.todolistId]
                        .map(task => task.id === action.payload.taskId ? {
                            ...task,
                            title: action.payload.title
                        } : task)

            }
        case 'ADD-TODOLIST':
            return {
                ...state,
                [action.todolistId]: []
            }
        case 'REMOVE-TODOLIST':{
                let copyState = {...state}
                delete copyState[action.id]
                return copyState
            }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {type: 'REMOVE-TASK', payload: {taskId, todolistId}} as const
}

export const addTasksAC = (title: string, todolistId: string) => {
    return {type: 'ADD-TASKS', payload: {title, todolistId}} as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: 'CHANGE-TASK', payload: {taskId, isDone, todolistId}} as const
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string) => {
    return {type: 'CHANGE-TITLE', payload: {taskId, title, todolistId}} as const
}