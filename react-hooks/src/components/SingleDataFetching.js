import React, {useEffect, useState} from 'react';
import axios from 'axios';

function SingleDataFetching() {
    const[data, setData] = useState({})
    const[id, setId] = useState(1)
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((result) => {
        setData(result.data)        
    }).catch((err) => {
        console.log(err)
    });
},[id])
  return (
    <div>
        <h2>Single Data Fetching using Axios</h2>
        <h4>Enter a ID: </h4>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <p>{data.title}</p>
    </div>
  )
}

export default SingleDataFetching