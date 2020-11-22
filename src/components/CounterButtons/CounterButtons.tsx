import React from 'react'
import classes from './CounterButtons.module.scss'
import Button from "./Button/Button";

type PropsType = {
    resetCounter: () => void
    incCounter: () => void
    state: number
    maxNum: number
    minNum: number

}



const   CounterButtons: React.FC<PropsType> = ({minNum, maxNum,state,resetCounter ,incCounter}) => {

    return <div className={classes.wrapper}>
            <Button disabled={state > maxNum} state={state} incCounter={incCounter} name="inc"/>
            <Button disabled={state === minNum} state={state} incCounter={resetCounter} name="reset"/>
    </div>
}


export default CounterButtons;