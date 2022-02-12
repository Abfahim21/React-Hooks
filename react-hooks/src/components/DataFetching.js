import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {
    const[data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            setData(result.data)
        }).catch((err) => {
            console.log(err);
        });
    }, [data])
  return (
    <div>
        <h2>Data Fetching using Axios</h2>
        <ul>
            {
                data.map(element => <li key={element.id}>{element.title}</li>)
            }
        </ul>
    </div>
  )
}

export default DataFetching;