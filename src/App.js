import "./App.css";
import * as math from "mathjs";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import { useState } from "react";

function App() {

  const [result,setResult] = useState("");
  const [inputNumber,setInputNumber] = useState("")


  const enterNumber = (Input) => {
    setInputNumber((inputNumber) => [...inputNumber, Input,""]);
  };
  
  const clearAll = () => {
    setInputNumber("");
    setResult("");
  };

  const calculateFinalResult = () =>{
    const input = inputNumber.join("");
    setResult(math.evaluate(input))
  }

  const equalButtonColor = "#9de4ed";
  const actionButtonColor = 'orange';
  return (
    <div className="calculator-body">
      
      <h1>Calculator</h1>
      <div className="calculator-wrapper">   
      <InputBox inputNumber={inputNumber} result={result}/>  
      <div className="calculator-row">
        <Button symbol="7" handleClick={enterNumber}/>
        <Button symbol="8" handleClick={enterNumber}/>
        <Button symbol="9" handleClick={enterNumber}/>
        <Button symbol="/" color={actionButtonColor} handleClick={enterNumber}/>
      </div>
      <div className="calculator-row">
        <Button symbol="4" handleClick={enterNumber}/>
        <Button symbol="5" handleClick={enterNumber}/>
        <Button symbol="6" handleClick={enterNumber}/>
        <Button symbol="*" color={actionButtonColor} handleClick={enterNumber}/>
      </div>
      <div className="calculator-row">
        <Button symbol="3" handleClick={enterNumber}/>
        <Button symbol="2" handleClick={enterNumber}/>
        <Button symbol="1" handleClick={enterNumber}/>
        <Button symbol="+" color={actionButtonColor} handleClick={enterNumber}/>
      </div>
      <div className="calculator-row">
      <Button symbol="0" handleClick={enterNumber}/>
        <Button symbol="."/>
        <Button symbol="=" color={equalButtonColor} handleClick={calculateFinalResult}/>
        <Button symbol="-" color={actionButtonColor} handleClick={enterNumber}/>
      </div>
     <div className="calculator-row">
      <Button symbol="CLEAR" handleClick={clearAll}/>
     </div>
      </div>
      </div>
  );
}

export default App;
