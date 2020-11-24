import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterButtons from "./components/CounterButtons/CounterButtons";
import classes from "./App.module.scss";


function App() {


    const [minNumber, setMinNumber] = useState<number>(3);
    const [maxNumber, setMaxNumber] = useState<number>(5);
    const [state, setState] = useState<number>(minNumber)
    const [error, setError] = useState<string>("")

    const [mode,setMode] = useState<boolean>(false);


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




        if(minNumber >= maxNumber -1) {
            setMode(false)
            setError("inCorrectValue")
        }
        else if(minNumber < maxNumber) {
            setMode(false)
            setError("SetValue")
        }
        setMinNumber(+e.currentTarget.value)

    }

    const maxNum = (e: ChangeEvent<HTMLInputElement>) => {
        setMode(false);

        if(maxNumber <= minNumber ) {
            setMode(false)
            setError("inCorrectValue")
        }
        else if(maxNumber > minNumber) {
            setMode(false)
            setError("SetValue")
        }
        setMaxNumber(+e.currentTarget.value)
    }
    const setNumbers = () => {

        if(minNumber > -1) {

            setState(minNumber)
        }
        if(minNumber === maxNumber) {



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
