import React from 'react';
import { useState , useEffect } from 'react';
import './App.css';
function useTable(){
  const [data,setData] = useState([]); 
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  async function tabledata(){
    setLoading(true);
    setError(false);

    try {
      const ans = await fetch("https://jsonplaceholder.typicode.com/users");
      const js = ans.json();
      setData(js);
    } catch (error) {
      setError(true);
    }
      setLoading(false);
  }
  useEffect(() => {
    tabledata();
  },[]);
  return [{loading,data,error},tabledata]
}
function App() {
  const [loading,data,error] = useTable("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="App">
      {loading ? <img src = "https://i.stack.imgur.com/ATB3o.gif" alt = "Sorry" /> : <p>{JSON.stringify(data)}</p>}

      {error ? "Error" : <></>} 
    </div>
  );
}

export default App;
