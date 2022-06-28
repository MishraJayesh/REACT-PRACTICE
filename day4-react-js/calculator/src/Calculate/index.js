import React, { useState } from "react";

function Calc() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [op,setOp] = useState();
    const [result, setResult] = useState(0);

    function handleChange(event, number) {
        setNum1(event.target.value);
    }
    
    function handleChange1(event, number) {
        setNum2(event.target.value);
    }

    function handleSelect(e) {
        setOp(e.target.value);
    }

    function calculate() {
        let ans = " ";
        if (op === '=') {
            return;
        }
        else if (op === '+') {
            ans = Number(num1) + Number(num2);
            return ans;
        } 
        else if (op === '-') {
            ans = Number(num1) - Number(num2);
            return ans;
        } 
        else if (op === '*') {
            ans = Number(num1) * Number(num2);
            return ans;
        } 
        else if (op === '/') {
            ans = Number(num1) / Number(num2);
            return ans;
        }
        setResult(ans);
    }

    return (
        <div >

            <label>Enter first number</label>
            <input
                type="number"
                name="num1"
                value={num1}
                onChange={(event) => handleChange(event, num1)}
            />

            <label>Enter first number</label>
            <input
                type="number"
                name="num2"
                value={num2}
                onChange={(event) => handleChange1(event, num2)}
            />

            <label>Select operator</label>
            <select name="operator" onChange={(e) => handleSelect(e)}>
                <option value="Add.">+</option>
                <option value="Sub.">-</option>
                <option value="Multiply">*</option>
                <option value="Division">/</option>
            </select>

            <button type="submit" onClick={calculate}>
                    Calculate
            </button>

            <h1> Result: {result} </h1>

        </div>
    );
}
export default Calc;