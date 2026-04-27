import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [stored, setStored] = useState(null);
  const [operator, setOperator] = useState(null);
  const [justCalculated, setJustCalculated] = useState(false);

  // STEP 2: Handle digit presses (0–9 and .)
  function handleDigit(digit) {
    if (justCalculated) {
      setDisplay(digit);
      setJustCalculated(false);
    } else {
      setDisplay((prev) => (prev === "0" ? digit : prev + digit));
    }
  }

  // STEP 3: Handle operator presses (+, −, ×, ÷)
  function handleOperator(op) {
    setStored(parseFloat(display));
    setOperator(op);
    setDisplay("0");
    setJustCalculated(false);
  }

  // STEP 4: Handle equals — compute the result
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
    setJustCalculated(true);
  }

  // STEP 5: Clear everything
  function handleClear() {
    setDisplay("0");
    setStored(null);
    setOperator(null);
    setJustCalculated(false);
  }

  // STEP 6: JSX — what gets shown on screen
  return (
    <div style={{ width: 240, margin: "2rem auto", fontFamily: "sans-serif" }}>
      {/* Display */}
      <div
        style={{
          background: "#1a1a1a",
          color: "#fff",
          padding: "1rem",
          textAlign: "right",
          borderRadius: 8,
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 32 }}>{display}</div>
      </div>

      {/* Button grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 6,
        }}
      >
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

// Reusable Button component
function Button({ label, onClick, color = "dark", wide = false }) {
  const colors = {
    dark: { background: "#333", color: "#fff" },
    gray: { background: "#a5a5a5", color: "#000" },
    orange: { background: "#f4a228", color: "#fff" },
  };
  return (
    <button
      onClick={onClick}
      style={{
        ...colors[color],
        gridColumn: wide ? "span 2" : "span 1",
        padding: "18px 0",
        fontSize: 20,
        border: "none",
        borderRadius: 50,
        cursor: "pointer",
        textAlign: wide ? "left" : "center",
        paddingLeft: wide ? 24 : 0,
      }}
    >
      {label}
    </button>
  );
}
