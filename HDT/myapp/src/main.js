import React, {useState} from 'react';

export function Datas() {
  
    const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    //console.log('Calling fetchData')
    setData(result);
  }
  fetchData();
  return (
    <div className="App">
        <h1>DATAS</h1>
      {
        data.map((item) => (
          <h1>{item.title}</h1>
        ))
      }
    </div>
    )
}

//key={item.id}//