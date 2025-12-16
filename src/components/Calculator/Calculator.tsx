import "./Calculator.css";

function Calculator() {
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
