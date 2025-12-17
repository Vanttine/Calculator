import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num, setNum] = useState("");
  const [justCalculated, setJustCalculated] = useState(false);

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
        setJustCalculated(true);
      } catch {
        setNum("ERRO");
      }
      return;
    }

    // after calc reset
    if (justCalculated) {
      if (operators.includes(value)) {
        setNum(num + value); // continua a conta
      } else {
        setNum(value); // nova conta
      }
      setJustCalculated(false);
      return;
    }
    if (justCalculated) {
      setNum(value);
      setJustCalculated(false);
      return;
    }

    if (num === "ERRO") {
      setNum(value);
      return;
    }

    // Blocking repetitive operator
    if (operators.includes(value) && operators.includes(lastChar)) {
      return;
    }
    setNum(num + value);
  }

  return (
    <div className="Calculator">
      <div className="Visor">{num}</div>
      <div className="Keyboard">
        <button className="Keys operator" onClick={() => handleClick("C")}>
          C
        </button>
        <button className="Keys operator" onClick={() => handleClick("C")}>
          D
        </button>
        <button className="Keys operator" onClick={() => handleClick("%")}>
          %
        </button>
        <button className="Keys operator" onClick={() => handleClick("÷")}>
          ÷
        </button>
        <button className="Keys" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="Keys" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="Keys" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="Keys operator" onClick={() => handleClick("x")}>
          x
        </button>
        <button className="Keys" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="Keys" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="Keys" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="Keys operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="Keys" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="Keys" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="Keys" onClick={() => handleClick("3")}>
          3
        </button>

        <button className="Keys operator" onClick={() => handleClick("+")}>
          +
        </button>

        <button
          className="Keys disabled"
          style={{
            backgroundColor: "#121212",
            color: "#fff",
            cursor: "default",
          }}
        ></button>
        <button className="Keys" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="Keys" onClick={() => handleClick(",")}>
          ,
        </button>
        <button className="Keys action" onClick={() => handleClick("=")}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
