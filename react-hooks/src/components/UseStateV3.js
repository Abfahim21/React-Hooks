import React, { useState } from 'react'

function UseStateV3() {
    const [ name, setName ] = useState({firstName: '', lastName: ''});
  return (
    <div>
        <h2>Type Your Name Below</h2>
        <input type="text" value={name.firstName} onChange={e=>setName({...name, firstName: e.target.value})}/>
        <input type="text" value={name.lastName} onChange={e=>setName({...name, lastName: e.target.value})}/>
        <h2>My First Name is : {name.firstName} </h2>
        <h2>My Last Name is : {name.lastName} </h2>

    </div>
  )
}

export default UseStateV3