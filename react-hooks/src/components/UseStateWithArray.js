import React, { useState } from 'react'

function UseStateWithArray() {
    const [ item, setItem ] = useState([])
    const AddNumber = () =>{
        setItem([...item, {
            id : item.length,
            value : Math.floor(Math.random()*100) + 1
        }])
    }
  return (
    <div>
        <button onClick={()=>AddNumber()}>Add a Number</button>
        <ul>
            {
                item.map(e=> <li key={e.id}>{e.value}</li>)
            }
        </ul>

    </div>
  )
}

export default UseStateWithArray