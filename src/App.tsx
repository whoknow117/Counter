import React, {ChangeEvent, useState, useEffect } from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterButtons from "./components/CounterButtons/CounterButtons";
import classes from "./App.module.scss";


export type ComparrisonType = true | false

function App() {


    const [minNumber, setMinNumber] = useState<number>(0);
    const [maxNumber, setMaxNumber] = useState<number>(0);
    const [state, setState] = useState<number>(0);
    const [error, setError] = useState<string>("Enter value!");
    const [minActive, setMinActive] = useState<ComparrisonType>(false);
    const [maxActive, setMaxActive] = useState<ComparrisonType>(false);
    const [mode, setMode] = useState<boolean>(false)


// Function increment

    const incCounter = () => {
        if (state < maxNumber) {
            setState(state + 1)
        } else if (state === maxNumber) {
            return;
        }
    }
// Reset start value function
    const resetCounter = () => {
        if (state > minNumber) {
            setState(minNumber)
        }

    }
    // функции для обьявления максимального и минимального значения!
    const minNum = (e: ChangeEvent<HTMLInputElement>) => {
        setMinActive(true)
        setMinNumber(+e.currentTarget.value)

    }



    const maxNum = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxActive(true)
        setMaxNumber(+e.currentTarget.value)
    }

    // функция которая сравнивает значения изначально она включа и выключала режим ошибки

    const setNumbers = () => {

        if(minNumber > 0 && maxNumber > 0 && maxNumber > minNumber && maxNumber !== minNumber ) {

            setMaxActive( false)
            setMinActive(  false)

            console.log(maxActive)
            console.log(minActive)

            setState(minNumber)
            console.log(minNumber)

        }



    }
    // const compairFunction = () => {
    //     if (minActive === false && maxActive === true || minActive === false || maxActive === true || minActive === true || maxActive == false) {
    //         // setMode(true)
    //     }
    // }

    return (
        <div className="counter">
            <div className={classes.setNumbersBlock}>
                    <div>
                        <input  className={maxNumber === minNumber ||  maxNumber < 0 ? classes.errorInput : ''}    value={maxNumber} onChange={maxNum} type="number"/> MAX
                        <input   className={minNumber >= maxNumber || minNumber < 0 ? classes.errorInput : ''} value={minNumber} onChange={minNum} type="number"/> MIN
                        {/*className={minNumber >= maxNumber ||  minNumber < 0 ? classes.errorInput : ''}*/}
                        {/*className={minNumber >= maxNumber || minNumber < 0 ? classes.errorInput : ''}*/}

                    </div>
                    <button disabled={minActive === false && maxActive === false || maxNumber === minNumber || minNumber >= maxNumber}  onClick={setNumbers}>set</button>
            </div>
            <div className={classes.output}>
                <Counter mode={mode}  setError={setError} setMode={setMode }  minActive={minActive} maxActive={maxActive} state={state} error={error} maxNum={maxNumber} minNum={minNumber} />
                <CounterButtons state={state} minNum={minNumber} maxNum={maxNumber} resetCounter={resetCounter} incCounter={incCounter}/>
            </div>
        </div>
    );
}

export default App;
