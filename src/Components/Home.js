import React, { useState } from "react";

function Home() {

    const [calculate, setCalculate] = useState("");
    const [resullt, setResult] = useState("");

    const ops = ['/', "*", "+", "-", "."];

    const updateCalculation = (value) => {
        console.log(value);

        try {
            setCalculate(calculate + value)
        } catch (error) {
            setCalculate("Error");
        }


    }


    const calulate = () => {
        try {
            setCalculate(eval(calculate));
        } catch (error) {
            setCalculate("Error");
        }


    }

    const clearInput = () => {
        setCalculate("");
    }

    const deleteInput = () => {
        setCalculate(calculate.slice(0, -1));
    }
    return (
        <React.Fragment>
            <div className="container">
                <input type="text" className="calculator-screen" value={calculate || "0"} disabled />

                <div className="calc">
                    <button type="button" className="operator" value="+" onClick={() => updateCalculation("+")}>&#43;</button>
                    <button type="button" className="operator" value="-" onClick={() => updateCalculation("-")}>&minus;</button>
                    <button type="button" className="operator" value="*" onClick={() => updateCalculation("*")}>&times;</button>
                    <button type="button" className="operator" value="/" onClick={() => updateCalculation("/")}>&divide;</button>


                    <button type="button" value="7" className="btnValue" onClick={() => updateCalculation('7')}>7</button>
                    <button type="button" value="8" className="btnValue" onClick={() => updateCalculation("8")}>8</button>
                    <button type="button" value="9" className="btnValue" onClick={() => updateCalculation("9")}>9</button>


                    <button type="button" value="4" className="btnValue" onClick={() => updateCalculation("4")}>4</button>
                    <button type="button" value="5" className="btnValue" onClick={() => updateCalculation("5")}>5</button>
                    <button type="button" value="6" className="btnValue" onClick={() => updateCalculation("6")}>6</button>


                    <button type="button" value="1" className="btnValue" onClick={() => updateCalculation("1")}>1</button>
                    <button type="button" value="2" className="btnValue" onClick={() => updateCalculation("2")}>2</button>
                    <button type="button" value="3" className="btnValue" onClick={() => updateCalculation("3")}>3</button>


                    <button type="button" value="0" className="btnValue" onClick={() => updateCalculation("0")} >0</button>
                    <button type="button" className="decimal btnValue" value="." onClick={() => updateCalculation(".")}>.</button>
                    <button type="button" className="all-clear btnValue" value="all-clear" onClick={clearInput}>AC</button>

                    <button type="button" className="all-clear btnValue" value="all-clear" onClick={deleteInput}>DEL</button>

                    <button type="button" className="equal-sign" value="=" onClick={calulate}>&#61;</button>

                </div>
            </div>
        </React.Fragment>
    )

}

export default Home;