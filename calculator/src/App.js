import './App.css';
import {useState,useEffect} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [display,setDisplay]=useState("");
  const [invalid,setInvalid]=useState(false);

  const handleNumber=(num)=>{
    if(invalid){
      console.log(invalid);
      setDisplay(num);
      setInvalid(false);
    }
    else{
      const tempString=display+num;
      setDisplay(tempString)
    }
  }

  const handleEquate=()=>{
    try{

      let ans=evaluate(display);
      // ans=math.format(ans,{precision:14});
      ans=String(ans)
      setDisplay(ans);
    }
    catch(e){
      setInvalid(true);
      setDisplay("Invalid Input");
    }
  }

  const handleBackSpace=()=>{
    let tempString=display;
    tempString=tempString.slice(0,-1);
    setDisplay(tempString);
  }

  const focusInputRight = () => {
    const inputField = document.getElementById('output-field');
    inputField.scrollLeft = inputField.scrollWidth;
  };

  useEffect(() => {
    // Whenever the content of the input field changes, call the focusInputRight function
    focusInputRight();
  }, [display]);

  return (
    <div className="App">
      <div className="Region">
        <input id='output-field' readOnly value={display} placeholder='0'></input>
        <div className='inputs'>
          <button onClick={()=>{handleBackSpace()}}><img src='Backspace.png' width={'20px'} height={'20px'} alt='<'></img></button>
          <button onClick={()=>{handleNumber("(")}} className='operators'>(</button>
          <button onClick={()=>{handleNumber(")")}} className='operators'>)</button>
          <button onClick={()=>{setDisplay("")}} className='close'>C</button>
          <button onClick={()=>{handleNumber("1")}} className="numbers">1</button>
          <button onClick={()=>{handleNumber("2")}} className="numbers">2</button>
          <button onClick={()=>{handleNumber("3")}} className="numbers">3</button>
          <button onClick={()=>{handleNumber("+")}} className="operators ">+</button>
          <button onClick={()=>{handleNumber("4")}} className="numbers">4</button>
          <button onClick={()=>{handleNumber("5")}} className="numbers">5</button>
          <button onClick={()=>{handleNumber("6")}} className="numbers">6</button>
          <button onClick={()=>{handleNumber("-")}} className="operators ">-</button>
          <button onClick={()=>{handleNumber("7")}} className="numbers">7</button>
          <button onClick={()=>{handleNumber("8")}} className="numbers">8</button>
          <button onClick={()=>{handleNumber("9")}} className="numbers">9</button>
          <button onClick={()=>{handleNumber("*")}} className="operators ">*</button>
          <button onClick={()=>{handleNumber(".")}} className="decimal">.</button>
          <button onClick={()=>{handleNumber("0")}} className="numbers">0</button>
          <button onClick={()=>{handleEquate()}} className="equal">=</button>
          <button onClick={()=>{handleNumber('/')}} className="operators ">/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
