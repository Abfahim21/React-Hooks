import React, { useState} from 'react'

function UseStateWithObject() {
    const [ name, setName ] = useState({ fatherName: "", motherName: "" })
  return (
    <div>
        <h2>Enter Your Father's Name: </h2>
        <input type="text" value={ name.fatherName} onChange={e=> setName({...name, fatherName: e.target.value})}/>
        <h2>Enter Your Mother's Name: {}</h2>
        <input type="text" value={name.motherName} onChange={e=> setName({...name, motherName: e.target.value})}/>
        <br />
        <h2>Your Father Name is : { name.fatherName }</h2>
        <h2>Your Mother Name is : { name.motherName }</h2>
    </div>
  )
}

export default UseStateWithObject