import React, { useState } from 'react'

function UseStateV1() {
    const resetValue = 0;
    const [count, setCount] = useState(resetValue)
  return (
    <div>
        <h2>React useState Hook</h2>
        <h3>Value: { count }</h3>
        <button onClick={()=> setCount(count+1)}>Increment + </button>
        <button onClick={()=> setCount(count-1)}>Decrement - </button>
        <button onClick={()=> setCount(resetValue)}>Reset to Zero</button>
    </div>
  )
}

export default UseStateV1;