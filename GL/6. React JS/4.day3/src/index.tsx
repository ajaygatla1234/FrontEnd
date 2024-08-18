import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyList from './1.MyList';
import SchoolComponent from './7.SchoolComponent';
import UncontrolledComponent from './3.Uncontrolled_Component';
import ControlledComponent from './4.Controlled_component';
import Addition from './5.Addition_Controlled';
import EventComponent from './6.Event_Example';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
  {/* <MyList></MyList> */}
  {/* <UncontrolledComponent></UncontrolledComponent> */}
  {/* <ControlledComponent></ControlledComponent> */}
  {/* <Addition></Addition> */}
  {/* <EventComponent></EventComponent> */}

  <SchoolComponent></SchoolComponent>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
