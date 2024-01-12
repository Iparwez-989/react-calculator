import React, { useState } from 'react'

function Calculator() {

    const [uInput,setuInput]= useState('')
    function handleClick(value){
        console.log(value);

        setuInput((prevValue)=> prevValue+value)
        
    }
    function handleClear(){
        setuInput('')
    }
    function handleCalculate(){

        setuInput(()=>eval(uInput))

    }

  return (
    <div>
        <input type="text" value={uInput} readOnly />
        <div className="btn">
        
        <div>
            <button onClick={()=>handleClick('7')}>7</button>
            <button onClick={()=>handleClick('8')}>8</button>
            <button onClick={()=>handleClick('9')}>9</button>
            <button onClick={()=>handleClick('+')}>+</button>
        </div>
        <div>
            <button onClick={()=>handleClick('4')}>4</button>
            <button onClick={()=>handleClick('5')}>5</button>
            <button onClick={()=>handleClick('6')}>6</button>
            <button onClick={()=>handleClick('-')}>-</button>
        </div>
        <div>
            <button onClick={()=>handleClick('1')}>1</button>
            <button onClick={()=>handleClick('2')}>2</button>
            <button onClick={()=>handleClick('3')}>3</button>
            <button onClick={()=>handleClick('*')}>*</button>
        </div>
        <div>
            <button onClick={()=>handleCalculate()}>=</button>
            <button onClick={()=>handleClear()}style={{backgroundColor:'orange'}}>C</button>
            <button onClick={()=>handleClick('0')}>0</button>
            <button onClick={()=>handleClick('/')}>/</button>
        </div>


         
        </div>
    </div>
  )
}

export default Calculator
