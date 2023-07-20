import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
    const [temp, setTemp] = useState(100)
    const [seconds, setSeconds] = useState(0)

    const resetTemp = useCallback(() => setTemp(0), [])

    const incSec = useCallback(() => setSeconds(prevSeconds=>prevSeconds + 1), [])

    return <>
        <TempDisplay temp={temp} resetTemp={resetTemp}/>
        <SecDisplay seconds={seconds} incSec={incSec}/>
    </>
}
const TempDisplay = React.memo((props: any) => {
    console.log('Render TempDisplay')
    return (
        <div style={{marginBottom: '10px'}} onClick={props.reset}>
            <p>
                <b>Температура: </b>{props.temp} &#176;
            </p>
            <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
        </div>
    )
})

const SecDisplay = React.memo((props: any) => {
    console.log('Render SecDisplay')
    return (
        <div>
            <p><b>Секунды:</b> {props.seconds} c </p>
            <button style={{marginRight: '20px'}}
                    onClick={props.incSec}>
                Увеличить время на 1 секунду
            </button>
        </div>
    )
})

ReactDOM.render(<App/>, document.getElementById('root'))

// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// Найдите в чем причина.
// Исправленную версию строки напишите в качестве ответа

// Пример ответа: const incSec = () => setSeconds(seconds + 1)