import React, {ChangeEvent} from 'react'
import classes from './Counter.module.scss';

type PropsType = {
    mode: boolean
    minNum: number
    maxNum: number
    error: string
    state: number
}


const Counter: React.FC<PropsType> = ({state,error,maxNum,minNum,mode}) => {

    return <div className={classes.wrapper}>
        <div className={error ? classes.error : classes.inc}>
            { mode   ? state : "set number" }
            {/*{ error && error}*/}
        </div>
    </div>
}


export default Counter;