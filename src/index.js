import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuizApp from './QuizApp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QuizApp  />
    {/* Passing the function as a prop */}
   
  </React.StrictMode>
);

reportWebVitals();
