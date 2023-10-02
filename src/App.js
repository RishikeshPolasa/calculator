import { useState } from "react";
import "./App.css";

function App() {
  const [sign, setSign] = useState("+");
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [result, setResult] = useState(0);
  const [count, setCount] = useState(0);
  const submitResult = () => {
    let tempResult;
    switch (sign) {
      case "+":
        tempResult = parseInt(input1) + parseInt(input2);
        break;
      case "-":
        tempResult = parseInt(input1) - parseInt(input2);
        break;
      case "*":
        tempResult = parseInt(input1) * parseInt(input2);
        break;
      default:
        tempResult = parseInt(input1) % parseInt(input2);
        break;
    }
    setResult(tempResult);
    let tempCount = count;
    tempCount++;
    setCount(tempCount);
  };

  const changeSign = (e) => {
    const curSign = e.target.textContent;
    switch (curSign) {
      case "+":
        setSign("+");
        break;
      case "-":
        setSign("-");
        break;
      case "*":
        setSign("*");
        break;
      default:
        setSign("%");
        break;
    }
  };

  const handleReset = () => {
    setResult(0);
    setInput1("");
    setInput2("");
  };
  return (
    <div className="App">
      <div>Total Count:{count}</div>
      <div className="InputWrapper">
        <input
          name="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <div className="SignValue">{sign}</div>
        <input
          name="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div className="SignButtons">
        <div className="Plus" onClick={(e) => changeSign(e)}>
          +
        </div>
        <div className="Plus" onClick={(e) => changeSign(e)}>
          -
        </div>
        <div className="Plus" onClick={(e) => changeSign(e)}>
          *
        </div>
        <div className="Plus" onClick={(e) => changeSign(e)}>
          %
        </div>
      </div>
      <div className="ResetAndResultWrapper">
        <button onClick={handleReset}>Reset</button>
        <button onClick={submitResult}>Result{result}</button>
      </div>
    </div>
  );
}

export default App;
