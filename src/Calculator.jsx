import { useState } from "react";
import './Calculator.css'
function Calculator(){
   const [display,setDisplay]=useState('0')
   function handleClick(value){
    if(display === '0'){
        setDisplay(value)
    }else{
        setDisplay(display+value)
    }
   }
   function handleEqual(){
    try{
        setDisplay(eval(display).toString())
    }catch{
        setDisplay('Error')
    }
   }
   function handleClear(){
    setDisplay('0')
   }
   return (
    <>
    <h1>Simple Calculator</h1>
    <div className="center">
    <div className='Main'>
    <div className="heading">
    <h2>{display}</h2></div>
    <div>
    <button onClick={()=>handleClick('7')} className="a">7</button>
    <button onClick={()=>handleClick('8')} className="a">8</button>
    <button onClick={()=>handleClick('9')} className="a">9</button>
    <button onClick={()=>handleClick('+')} className="w">+</button>
    </div>
    <div>
    <button onClick={()=>handleClick('4')} className="b">4</button>
    <button onClick={()=>handleClick('5')} className="b">5</button>
    <button onClick={()=>handleClick('6')} className="b">6</button>
    <button onClick={()=>handleClick('-')} className="c">-</button>
    </div>
    <div >
    <button onClick={()=>handleClick('1')} className="a">1</button>
    <button onClick={()=>handleClick('2')} className="a">2</button>
    <button onClick={()=>handleClick('3')} className="a">3</button>
    <button onClick={()=>handleClick('*')} className="w">X</button>
    </div>
    <div className="d">
    <button onClick={handleClear} className="w">C</button>
    <button onClick={()=>handleClick('0')}className="a">0</button>
    <button onClick={handleEqual}className="a">=</button>
    <button onClick={()=>handleClick('/')} className="w">/</button>
    </div>
    </div>
    </div>
    </>
   )
}
export default Calculator