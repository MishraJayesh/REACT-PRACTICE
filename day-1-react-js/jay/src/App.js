import './App.css';
import './f1.css';
import './f2.css';
import './f3.css';
import './f4.css';
import './f5.css';
import { Hello, Bye } from './function';
import Ok from './function';  

import Student from './function1'
import React from './function2';
import Chemistry from './function3';  
import Neon from './function4';  
import Software from './function5';

export default function App()
{

  return (
    <div className="App">
      <h1>Jayesh</h1>
      <Hello /> 
      <Bye />
      <Ok />
      <Student />
      <React />
      <Chemistry />
      <Neon />
      <Software />
     </div>
  );
}