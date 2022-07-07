//import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './table';
function App() {
  /*const [name, setName] = useState('Jayesh');
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    console.log('Calling fetchData')
    setData(result);
  }

  useEffect(() => {
    console.log('Page Rendered Again..!!!');
    fetchData();

  }, []);*/

  return (
    <div className="App">
      {/*<h1>{name}</h1>
      <button type="button" onClick={() => setName('Naresh')}>Change Name</button>

      {
        data.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))
      }*/}
      <Table />
    </div>

  );
}

export default App;