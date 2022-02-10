import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [ count, setCount] = useState(0);

    useEffect(()=>{
        document.title = (`Clicked ${count} Times !`)
    })
  return (
    <div>
        <h2>UseEffect() Hooks after Every Render</h2>
        <button onClick={()=> setCount(prevCount => prevCount+1)}>Clicked {count} Times</button>
    </div>
  )
}

export default UseEffect