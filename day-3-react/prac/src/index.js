import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quickstart from './quickstart';
import App from './App';
import FloatingActionButtons from './floatbuttons.js';
import reportWebVitals from './reportWebVitals';
import BasicSelect from './autocomplete.js';
import ColorCheckboxes from './checkbox.js';
import Avatars2 from  './avatar.js';
import ContinuousSlider from './slider.js';
import SimpleBackdrop from './backdrop.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quickstart />
    <App />
    <FloatingActionButtons />
    <BasicSelect />
    <ColorCheckboxes />
    <Avatars2 />
    <ContinuousSlider />
    <SimpleBackdrop />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
