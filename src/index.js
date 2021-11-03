import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import StarRating from './components/starRating.js';
import ColorApp from './components/colorApp';
import { ColorProvider } from './hooks/colorProvider';
import simpleRedux from './components/simpleRedux';
import store from './store/store';
import  store1     from './store/incrementStore'
import { Provider } from 'react-redux';
import SimpleRedux from './components/simpleRedux';
import Increment from './components/increment';

const star = 5;

// ReactDOM.render(
//   // <React.StrictMode>
//   //   {/* <StarRating totalStars={star}/> */}
//   //   {/* <ColorProvider>
//   //     <ColorApp />
//   //   </ColorProvider> */}
//   //   {/* <App></App> */}
//   //   {/* <simpleRedux /> */}
//   // </React.StrictMode>,

  
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Provider store={store}>
//   <React.StrictMode>
//   <SimpleRedux></SimpleRedux>
//   </React.StrictMode>
//   </Provider>,

  
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store1}>
  <React.StrictMode>
  <Increment></Increment>
  </React.StrictMode>
  </Provider>
  ,

  
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

