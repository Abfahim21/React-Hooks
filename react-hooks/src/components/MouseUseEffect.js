import React, { useState, useEffect} from 'react'

function MouseUseEffect() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition= (e) =>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect is called");
        window.addEventListener('mousemove', logMousePosition)
    }, [])

  return (
    <div>
        <h2>Mouse Position of X: {x}</h2>
        <h2>Mouse Position of Y: {y}</h2>
    </div>
  )
}

export default MouseUseEffect