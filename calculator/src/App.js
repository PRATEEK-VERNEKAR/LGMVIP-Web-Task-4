import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [display,setDisplay]=useState("");
  const [operatorOnNot,setOperatorOrNot]=useState(false);
  const [decimalAllow,setDecimalAllow]=useState(false);
  const [mulDevAllow,setMulDevAllow]=useState(true);

  const handleNumber=(num)=>{
    const tempString=display+num;
    setDisplay(tempString)

    if(num==="+" || num==="-" || num==="*" || num==='/' || num==='='){
      setOperatorOrNot(true);
      setDecimalAllow(false);
    }
    else{
      setOperatorOrNot(false);
    }
    
    if(num==='.'){
      setOperatorOrNot(true);
      setDecimalAllow(true);
    }

    setMulDevAllow(false);
  }

  const handleEquate=()=>{
    let ans=evaluate(display);
    // ans=math.format(ans,{precision:14});
    ans=String(ans)
    setDisplay(ans);
    setDecimalAllow(false);
    
    if(display==='0'){
      setDecimalAllow(true);
    }
  }

  return (
    <div class="App">
      <div class="Region">
        <div class='output-panel'>
          <input id='output-field' readOnly value={display} placeholder='0'></input>
          {/* <button>C</button> */}
          <button onClick={()=>{setDisplay("")}}>C</button>
        </div>
        <div class='inputs'>
          <button onClick={()=>{handleNumber("1")}} class="numbers">1</button>
          <button onClick={()=>{handleNumber("2")}} class="numbers">2</button>
          <button onClick={()=>{handleNumber("3")}} class="numbers">3</button>
          <button onClick={()=>{handleNumber("+")}} class="operators" disabled={operatorOnNot}>+</button>
          <button onClick={()=>{handleNumber("4")}} class="numbers">4</button>
          <button onClick={()=>{handleNumber("5")}} class="numbers">5</button>
          <button onClick={()=>{handleNumber("6")}} class="numbers">6</button>
          <button onClick={()=>{handleNumber("-")}} class="operators" disabled={operatorOnNot}>-</button>
          <button onClick={()=>{handleNumber("7")}} class="numbers">7</button>
          <button onClick={()=>{handleNumber("8")}} class="numbers">8</button>
          <button onClick={()=>{handleNumber("9")}} class="numbers">9</button>
          <button onClick={()=>{handleNumber("*")}} class="operators" disabled={operatorOnNot || mulDevAllow}>*</button>
          <button onClick={()=>{handleNumber(".")}} class="decimal" disabled={decimalAllow}>.</button>
          <button onClick={()=>{handleNumber("0")}} class="numbers">0</button>
          <button onClick={()=>{handleNumber("/")}} class="operators" disabled={operatorOnNot || mulDevAllow}>/</button>
          <button onClick={()=>{handleEquate()}} class="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
