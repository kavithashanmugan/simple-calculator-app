import "./InputBox.css";
const InputBox = ({inputNumber,result}) => {
  return (
    <div className="inputbox-wrapper">
      <div className="operand-area">{inputNumber}</div>
      <div className="result">
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default InputBox;
