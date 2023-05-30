import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    oldTitle: string
    callBack: (updateTitle:string) => void
}

export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    const editFoo = () => {
        setEdit(!edit)
        if(edit){
            addTaskhandler()
        }
    }

    let [updateTitle, updateSetTitle] = useState(props.oldTitle)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateSetTitle(e.currentTarget.value)
    }

    const addTaskhandler = () => {
        props.callBack(updateTitle)
    }

    return (
        edit
            ? <input onChange={onChangeHandler} value={updateTitle} onBlur={editFoo} autoFocus/>
            : <span onDoubleClick={editFoo}>{props.oldTitle}</span>
    );
};

