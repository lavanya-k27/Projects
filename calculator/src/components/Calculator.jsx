import { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [stored, setStored] = useState(null);
  const [operator, setOperator] = useState(null);
  const [justCalculated, setJustCalc] = useState(false);

  function handleDigit(digit) {
    if (justCalculated) {
      setDisplay(digit);
      setJustCalc(false);
    } else {
      setDisplay((prev) => (prev === "0" ? digit : prev + digit));
    }
  }

  function handleOperator(op) {
    setStored(parseFloat(display));
    setOperator(op);
    setDisplay("0");
    setJustCalc(false);
  }

  function handleEquals() {
    if (operator === null || stored === null) return;
    const a = stored;
    const b = parseFloat(display);
    let result;

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
      default:
        result = b;
    }

    setDisplay(String(parseFloat(result.toFixed(10))));
    setStored(null);
    setOperator(null);
    setJustCalc(true);
  }

  function handleClear() {
    setDisplay("0");
    setStored(null);
    setOperator(null);
    setJustCalc(false);
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator-display">{display}</div>

      <div className="button-grid">
        <Button label="AC" onClick={handleClear} color="gray" />
        <Button
          label="+/-"
          onClick={() => setDisplay(String(parseFloat(display) * -1))}
          color="gray"
        />
        <Button
          label="%"
          onClick={() => setDisplay(String(parseFloat(display) / 100))}
          color="gray"
        />
        <Button label="÷" onClick={() => handleOperator("/")} color="orange" />

        <Button label="7" onClick={() => handleDigit("7")} />
        <Button label="8" onClick={() => handleDigit("8")} />
        <Button label="9" onClick={() => handleDigit("9")} />
        <Button label="×" onClick={() => handleOperator("*")} color="orange" />

        <Button label="4" onClick={() => handleDigit("4")} />
        <Button label="5" onClick={() => handleDigit("5")} />
        <Button label="6" onClick={() => handleDigit("6")} />
        <Button label="−" onClick={() => handleOperator("-")} color="orange" />

        <Button label="1" onClick={() => handleDigit("1")} />
        <Button label="2" onClick={() => handleDigit("2")} />
        <Button label="3" onClick={() => handleDigit("3")} />
        <Button label="+" onClick={() => handleOperator("+")} color="orange" />

        <Button label="0" onClick={() => handleDigit("0")} wide />
        <Button label="." onClick={() => handleDigit(".")} />
        <Button label="=" onClick={handleEquals} color="orange" />
      </div>
    </div>
  );
}

export default Calculator;
