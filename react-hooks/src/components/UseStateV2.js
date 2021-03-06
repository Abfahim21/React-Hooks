import React, {useState} from 'react';
import './useState.css';

function UseStateV2() {
    const initialValue = 0;
    const [ count, setCount ] = useState(initialValue);

    const IncrementTen = () =>{
        for(let i =0; i<10; i++){
            setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
        <h3>Count: { count }</h3>
        <button onClick={()=>setCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={()=>setCount(prevCount => prevCount-1)}>Decrement</button>
        <button onClick={()=>setCount(initialValue)}>Reset to Zero</button>
        <button onClick={()=>IncrementTen()}>Increment 10</button>
    </div>
  )
}

export default UseStateV2