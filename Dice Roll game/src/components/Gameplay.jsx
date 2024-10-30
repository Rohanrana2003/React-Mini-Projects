import { useState } from "react"

export default function Gameplay() {

    const [score, setScore] = useState(0);
    const [number, setNumber] = useState();
    const [error, setError] = useState(false);
    const [currentDice, setCurrentDice] = useState(1);

    const setRandomNumber = () => {
        return Math.floor(Math.random() * (7 - 1) + 1);
    }

    const roleDice = (e) => {

        if (number === undefined) {
            setError(true);
            return;
        }
        setError(false);

        e.preventDefault();
        const randomNumber = setRandomNumber();
        // eslint-disable-next-line no-unused-vars
        setCurrentDice((prev) => randomNumber);

        if (number === randomNumber) {
            setScore((prev) => prev + 2);

        }
        else {
            setScore((prev) => prev - 2);
        }


        setNumber();
    }


    return (
        <div className="game">

            <div className="top">

                <div className="score">
                    <h1>{score}</h1>
                    <p>Total score</p>
                </div>

                <div className="number">
                    <div className="counting">
                        <button value={1} onClick={(e) => { setNumber(e.target.value) }}>1</button>
                        <button value={2} onClick={(e) => { setNumber(e.target.value) }}>2</button>
                        <button value={3} onClick={(e) => { setNumber(e.target.value) }}>3</button>
                        <button value={4} onClick={(e) => { setNumber(e.target.value) }}>4</button>
                        <button value={5} onClick={(e) => { setNumber(e.target.value) }}>5</button>
                        <button value={6} onClick={(e) => { setNumber(e.target.value) }}>6</button>
                    </div>

                    <h3>Select Number</h3>

                    {error && <p id="error">Please select a number</p>}
                </div>
            </div>

            <div className="down">

                <img src={`public/dice_${currentDice}.png`} onClick={roleDice} alt="" />
                <h1>Click on Dice to roll</h1>

                <div className="buttons">
                    <button id="btn1" onClick={() => { setScore(0) }}>Reset Score</button>
                    <button id="btn2">Show Rules</button>
                </div>

            </div>
        </div>
    )
}
