import React, { useState, useEffect} from 'react'

function IntervaloHookCount() {
    const[count, setCount] = useState(0);

    const tick =()=>{
        return setCount(prevCount => prevCount+1)
    }
useEffect(()=>{
    const interval = setInterval(tick, 1000)
    return () =>{
        clearInterval(interval)
    }
}, [count])
  return (
    <div>
        <h3>You have been here for : {count} seconds! </h3>
    </div>
  )
}

export default IntervaloHookCount