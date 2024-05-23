import { useState } from 'react';
import Button from './components/buttons';
import Input from './components/input';
import { Container, Content, Row} from './styles';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [expression, setExpression] = useState("");
  const [operation, setOperation] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const [isEqual, setIsEqual] = useState(false);

  
  const handleOnClear = () =>{
    setCurrentNumber("0");
  }

  const handleTotalClear = () =>{
    setCurrentNumber("0");
    setFirstNumber("");
    setOperation("");
    setIsCalculated(false);
    setIsEqual(false);
    setExpression("");
  }

  const handleAddNumber = (num) => {
    if(isCalculated){
      handleOnClear();
      setIsCalculated(false);
    }

    if (isEqual){
      setExpression("");
      setIsEqual(false);
    }
    

    if((currentNumber === "0") && (num==="0")){
      return
    } else if((currentNumber.includes(".")) && (num === '.')){ 
      return
    } else {
      setCurrentNumber(prev => ((prev === "0") && (num !== ".")) ?`${num}`:`${prev}${num}`)
    }

  }

  const handleOperations = (actualOperation) =>{
    if(firstNumber === ""){
      setFirstNumber(String(currentNumber));
      setOperation(actualOperation);
      setIsCalculated(true);
      setExpression(`${currentNumber} ${actualOperation}`);
    }else {
      let result = performCalculation(operation);
      result = String(result);
      setCurrentNumber(result);
      setFirstNumber(result);
      setIsCalculated(true);
      setOperation(actualOperation);
      setExpression(`${result} ${actualOperation}`)
    }

    if(isEqual){
      setIsEqual(false);
    }
  }

  const handleEquals = () =>{
    if ((firstNumber !== "") && (operation !== "")){
      switch(operation){
        case '+':
          handleOperations("+");
          break;
        case '-':
          handleOperations("-");
          break;
        case '*':
          handleOperations("*"); 
          break;
        case '/':
          handleOperations("/");         
          break;
        default:
          break;   
      };
      setFirstNumber("");
      setOperation("");
      setExpression(`${firstNumber} ${operation} ${currentNumber} = `);
      setIsEqual(true);
    }
  }

  const handlePercentage = () =>{
    if(firstNumber ==="" || operation === ""){
      handleOnClear();
      setExpression("");
      return
    }else{
      if((operation === "+") || ( operation === "-")){
        const result = Number(firstNumber) * (Number(currentNumber) / 100);
        setCurrentNumber(String(result));
      } else {
        const result = Number(currentNumber) / 100;
        setCurrentNumber(String(result));
      }
    }
  }

  const handleSignalInversion = () => {
    const result = Number(currentNumber) * -1;
    setCurrentNumber(String(result));
  }

  function performCalculation(actualOperation){
    switch(actualOperation){
      case "+":
        return Number(firstNumber) + Number(currentNumber);
      case "-":
        return Number(firstNumber) - Number(currentNumber);
      case "*":
        return Number(firstNumber) * Number(currentNumber);
      case "/":
        return Number(firstNumber) / Number(currentNumber);
      default:
        break;
    }
  }
  return (
    <Container>
      <Content>
        <Input value={expression} id="small" />
        <Input value={currentNumber}/>
        <Row>
          <Button label="+/-" onClick={handleSignalInversion}/>
          <Button label="%" onClick={handlePercentage}/>
          <Button label="/" onClick={() => handleOperations('/')}/>
          <Button label="*" onClick={() => handleOperations('*')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperations('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperations('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="C" onClick={handleTotalClear}/>
          <Button label="CE" onClick={handleOnClear}/>
          <Button label="." onClick={() => handleAddNumber('.')}/>
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
