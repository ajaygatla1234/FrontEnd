import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Car from './1.Car';
import Bike from './2.Bike';
import Counter from './3.Counter';
import Login from './4.Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Car company="Tata" model="Altroz"></Car>
    <hr></hr>
    <Car company="Hyundai" model="i10"></Car>
    <hr></hr>

    <Bike mileage={625} color='Blue'></Bike>
    <hr></hr>
    <Bike mileage={34} color='Red'></Bike>
    <hr></hr>

    <Counter count={5}></Counter>
    <hr></hr>
    <Counter count={10}></Counter>
    <hr></hr>

    <Login></Login>
    <hr></hr>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
