import React, {ChangeEvent} from 'react';
import {Checkbox} from "@mui/material";

type PropsType={
    checked:boolean,
    callBack:(checked:boolean)=>void
}

export const CheckBox = (props: PropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked);
    }
    return (
        <Checkbox
            checked={props.checked}
            color="primary"
            onChange={onChangeHandler}
        />
    )
}