import React, {ChangeEvent} from 'react'
import classes from './Counter.module.scss';

type PropsType = {
    setMode: (mode: boolean) => void
    minNum: number
    maxNum: number
    error: string
    state: number
    minActive: boolean
    maxActive: boolean
    setError: (error: string) => void
    mode: boolean
}


const Counter: React.FC<PropsType> = ({mode,setError,setMode,minActive,maxActive,state,error,maxNum,minNum }) => {
    // if (minActive === false && maxActive === true || minActive === false || maxActive === true || minActive === true || maxActive == false) {
    //     setMode(false)
    // } else if (minActive === false && maxActive === false) {
    //     setMode(true);
    // }

    {(minNum >= 0 && maxNum !== minNum && maxNum > minNum) ? setError("set value") : setError("Incorrect value!") }

    return <div className={classes.wrapper}>
        <div className={classes.inc}>

            {minActive === false && maxActive === false  ? <span className={state === maxNum ? classes.error : ""}>{state}</span> :
                <span className={ error === "Incorrect value!" ? classes.error : ""}>{error}</span>}
            {/*{ error && error}*/}
        </div>
    </div>
}


export default Counter;