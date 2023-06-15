import {FilterValuesType, TodolistType} from "./../App";
import {v1} from "uuid";

export const todolistsReducer = (state: TodolistType[], action: TsarBatyaType): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.title, filter: 'all'};
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE": {
           return  state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }
        case "CHANGE-TODOLIST-FILTER":{
            // let todolist = todolists.find(tl => tl.id === todolistId);
            // if (todolist) {
            //     todolist.filter = value;
            //     setTodolists([...todolists])
            // }
            return  state.map(el=>el.id===action.payload.id ?{...el,filter:action.payload.filter} :el)
        }
        default:
            return state
    }
}

type TsarBatyaType = removeTodolistACType
    | addTodolistACType
    | changeTodolistTitleACType
    | changeFilterACType
type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title
        }

    } as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {id, title}
    } as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (id: string, filter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id, filter
        }
    } as const
}