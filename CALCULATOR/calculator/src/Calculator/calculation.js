import React, { useState } from "react";

function Calc() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState();

  const [result, setResult] = useState(0);

  function handleChange(event, number) {
    setNum1(event.target.value);
  }
  function handleChange1(event, number) {
    setNum2(event.target.value);
  }

  //function handleSelect(e) {
  //  setOp(e.target.value);
  //}

  function handleSelect(str) {
    setOp(str);
  }

  function calculate() {
    console.log(op);
    let ans = 0;
    if (op === "+") {
      ans = Number(num1) + Number(num2);
    }
    else if (op === "-") {
      ans = Number(num1) - Number(num2);
    }
    else if (op === "*") {
      ans = Number(num1) * Number(num2);
    }
    else if (op === "/") {
      ans = Number(num1) / Number(num2);
    }
    setResult(ans);
  }

  return (
    <div className="cal">
      <label>Enter first number</label>
      <input
        className="number1"
        type="number"
        name="num1"
        value={num1}
        onChange={(event) => handleChange(event, num1)}
      />

      <label>Enter second number</label>
      <input
        className="number2"
        type="number"
        name="num2"
        value={num2}
        onChange={(event) => handleChange1(event, num2)}
      />

      <label className="lab3">Enter operator</label>

      <select name="operator" onChange={(str) => handleSelect(str)}>
        <option value="" onChange={() => handleSelect('+')}>+</option>
        <option value="" onChange={() => handleSelect('-')}>-</option>
        <option value="" onChange={() => handleSelect('*')}>*</option>
        <option value="" onChange={() => handleSelect('/')}>/</option>
      </select>

      {/*<button className="but1" onClick={() => handleSelect('+')}>+</button>
      <button className="but2" onClick={() => handleSelect('-')}>-</button>
      <button className="but3" onClick={() => handleSelect('*')}>*</button>
      <button className="but4" onClick={() => handleSelect('/')}>/</button>*/}

      <button type="submit" onClick={calculate}>
        Calculate
      </button>
      <h1 className="res">result :- {result}</h1>
    </div>
  );
}
export default Calc;