import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import BS1Component from './1.BS1';
import BS2Component from './2.BS2';
import BS3CarList from './3.BS3CarList';
import BS4CarList from './4.BS4CarList';
import NavbarComponent from './5.NavBar';
import ThemeComponent from './6.ThemeComponent';
import ThemeProvider from './6.ThemedContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
  {/* <BS1Component></BS1Component>
  <BS2Component></BS2Component>
  <BS3CarList></BS3CarList> */}
  {/* <BS4CarList></BS4CarList> */}
  {/* <NavbarComponent></NavbarComponent> */}
  <ThemeProvider>
    <ThemeComponent></ThemeComponent>
  </ThemeProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
