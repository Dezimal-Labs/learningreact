import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import StarRating from './components1/starRating.js';

const star=5;

ReactDOM.render(
  <React.StrictMode>
   {/* <StarRating totalStars={star}/> */}
   <StarRating totalStars={star} style={{backgroundColor:"lightblue"}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
  
//   <StarRating/>
// ,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

