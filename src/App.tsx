import React, {ChangeEvent, useState, useEffect } from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterButtons from "./components/CounterButtons/CounterButtons";
import classes from "./App.module.scss";


function App() {


    const [minNumber, setMinNumber] = useState<number>(0);
    const [maxNumber, setMaxNumber] = useState<number>(0);
    const [state, setState] = useState<number>(minNumber)
    const [error, setError] = useState<string>("")

    const [mode,setMode] = useState<boolean>(false);

   let a=3;
   let b = 4;
    useEffect(() => {
        if(maxNumber <= minNumber){
            setError("hello")
        }
        if(maxNumber > minNumber){
            setError("yes")
        }
    })

    const incCounter = () => {

        let disable = false;

        if (state < maxNumber) {
            setState(state + 1)
        } else if (state === maxNumber) {
            return;
        }

    }

    const resetCounter = () => {

        if (state > minNumber) {
            setState(minNumber)
        }

    }

    const minNum = (e: ChangeEvent<HTMLInputElement>) => {

        setMode(false);



        setMinNumber(+e.currentTarget.value)

    }

    const maxNum = (e: ChangeEvent<HTMLInputElement>) => {
        setMode(false);


        setMaxNumber(+e.currentTarget.value)
    }
    const setNumbers = () => {

        if(minNumber > 0 || minNumber !== maxNumber) {
            setMode(true)
            setState(minNumber)
        }
        if(minNumber === maxNumber) {
            setMode(false)



        }
        if(minNumber > maxNumber) {
            setMode(false)


        }
        if(minNumber < 0) {
            setMode(false)

        }

    }

    return (
        <div className="counter">
            <div className={classes.setNumbersBlock}>
                    <div>
                        <input  className={minNumber >= maxNumber ||  minNumber < 0 ? classes.errorInput : ''} value={maxNumber} onChange={maxNum} type="number"/> MAX
                        <input className={minNumber >= maxNumber || minNumber < 0 ? classes.errorInput : ''} value={minNumber} onChange={minNum} type="number"/> MIN

                    </div>
                    <button disabled={mode} onClick={setNumbers}>set</button>
            </div>
            <div className={classes.output}>
                <Counter state={state} error={error} maxNum={maxNumber} minNum={minNumber} mode={mode}/>
                <CounterButtons state={state} minNum={minNumber} maxNum={maxNumber} resetCounter={resetCounter} incCounter={incCounter}/>
            </div>
        </div>
    );
}

export default App;
