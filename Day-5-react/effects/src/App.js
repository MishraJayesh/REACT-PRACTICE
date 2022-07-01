import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Jayesh');

  useEffect(() => {
    console.log('Page Rendered Again...!!!');
  }, [name]);

  return (
    <div className="App">
      <h1>{name}</h1>
      <button type="button" onClick={() => setName('Priya')}>Change Name</button>
    </div>
  );
}

export default App;