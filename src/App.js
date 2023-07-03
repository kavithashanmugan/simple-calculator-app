import "./App.css";
import Button from "./components/Button";
import InputBox from "./components/InputBox";

function App() {

  const equalButtonColor = "#9de4ed";
  const actionButtonColor = 'orange';
  return (
    <div className="calculator-body">
      
      <h1>Calculator</h1>
      <div className="calculator-wrapper">   
      <InputBox/>  
      <div className="calculator-row">
        <Button symbol="7"/>
        <Button symbol="8"/>
        <Button symbol="9"/>
        <Button symbol="÷" color={actionButtonColor}/>
      </div>
      <div className="calculator-row">
        <Button symbol="4"/>
        <Button symbol="5"/>
        <Button symbol="6"/>
        <Button symbol="*" color={actionButtonColor}/>
      </div>
      <div className="calculator-row">
        <Button symbol="3"/>
        <Button symbol="2"/>
        <Button symbol="1"/>
        <Button symbol="+" color={actionButtonColor}/>
      </div>
      <div className="calculator-row">
      <Button symbol="0"/>
        <Button symbol="."/>
        <Button symbol="=" color={equalButtonColor}/>
        <Button symbol="-" color={actionButtonColor}/>
      </div>
      
      </div>
      </div>
  );
}

export default App;
