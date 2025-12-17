import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num, setNum] = useState("");
  const operators = ["+", "-", "x", "÷", "%"];
  const lastChar = num[num.length - 1];

  function handleClick(value: string) {
    //Clear
    if (value === "C") {
      setNum("");
      return;
    }

    // Calculating
    if (value === "=") {
      try {
        const result = eval(
          num.replace(/x/g, "*").replace(/÷/g, "/").replace(/,/g, ".")
        );
        setNum(result.toString());
      } catch {
        setNum("ERRO");
      }
      return;
    }

    if (num === "ERRO") {
      setNum(value);
      return;
    }
    setNum(value);

    // Blocking repetitive operator
    if (operators.includes(value) && operators.includes(lastChar)) {
      return;
    }
    setNum(num + value);
  }

  return (
    <div className="Calculator">
      <div className="Visor">Resultado</div>
      <div className="Keyboard">
        <button className="Keys operator">C</button>
        <button className="Keys operator">D</button>
        <button className="Keys operator">%</button>
        <button className="Keys operator">÷</button>
        <button className="Keys">7</button>
        <button className="Keys">8</button>
        <button className="Keys">9</button>
        <button className="Keys operator">x</button>
        <button className="Keys">4</button>
        <button className="Keys">5</button>
        <button className="Keys">6</button>
        <button className="Keys operator">-</button>
        <button className="Keys">1</button>
        <button className="Keys">2</button>
        <button className="Keys">3</button>
        <button className="Keys operator">+</button>
        <button
          className="Keys disabled"
          style={{
            backgroundColor: "#121212",
            color: "#fff",
            cursor: "default",
          }}
        ></button>
        <button className="Keys">0</button>
        <button className="Keys">,</button>
        <button className="Keys action">=</button>
      </div>
    </div>
  );
}

export default Calculator;
