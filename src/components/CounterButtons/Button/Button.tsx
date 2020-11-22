import React  from 'react'
import classes from './Button.module.scss'

type PropsType = {
    name: string
    incCounter: () => void
    state: number
    disabled: boolean
}


const Button: React.FC<PropsType> = ({disabled,state, incCounter, name}) => {



    return <button className={classes.btn} onClick={incCounter} disabled={disabled}>{name}</button>

}


export default Button;