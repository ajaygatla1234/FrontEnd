import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyTask from './1.MyTask';
// import HomeComponent from './2.HomeComponent';
// import AboutComponent from './2.AboutComponent';
// import ContactComponent from './3.ContactComponent';

import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

const Home=lazy(()=>import("./2.HomeComponent"))
const About=lazy(()=>import("./2.AboutComponent"))
const Contact=lazy(()=>import("./2.ContactComponent"))
const LifeCycle=lazy(()=>import("./3.LifeCycle"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const LoadingScreen:React.FC=()=><div></div>

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyTask></MyTask> */}

    <div>
      <BrowserRouter basename='/'>
        {/**<a> will load whole page , so we use Link */}
        <Link to="/">Home</Link><span> </span>
        <Link to="/about">About</Link><span> </span>
        <Link to="/contact">Contact</Link>
        <Link to="/lifecycle">LifeCycle</Link>

        <Suspense fallback={<LoadingScreen></LoadingScreen>}>
        <Routes>
          {/*index ==> '/' */}
          <Route index element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/lifecycle' element={<LifeCycle></LifeCycle>}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
      <Outlet></Outlet> {/*this is where the element/component will be rendered */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
