import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Comp1 from './Component1';
// import Thumb2 from './Component2';
// import Parent from './Parent';
// import Component3 from './Component3';
// import Class_helloworld from './Component4';
// import Function_helloworld from './Component5';
// import HomePage from './Home';
// import Nav from './Nav';
// import Section from './Section';
// import Footer from './Footer';
// import Form from './Form';

import Student from './Student';
import Teacher from './10.Teacher';
import Animal from './11.Animal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <h1>Welcome to react js</h1> */}
    {/* <App></App> */}
    {/* <Comp1></Comp1>
    <Thumb2></Thumb2>
    <Parent></Parent>
    <Component3></Component3> */}
    {/* <Class_helloworld></Class_helloworld> */}
    {/* <Function_helloworld></Function_helloworld>
    <HomePage></HomePage>
    <Nav></Nav>
    <Section></Section>
    <Footer></Footer>
    <Form></Form> */}



    <h2>Student Details</h2>
    <Student name="Subbu" age="30" gender="male" unno="1001"></Student>
    <hr></hr>
    <Student name="Jaggu" age="30" gender="male" unno="1001"></Student>
    <hr></hr>
    <Student name="Rakesh" age="30" gender="male" unno="1001"></Student>
    <hr></hr>
    <Student name="Prashant" age="30" gender="male" unno="1001"></Student>
    <hr></hr>
    <Student name="Jadhav" age="30" gender="male" unno="1001"></Student>
    <hr></hr>

    <h2>Teacher Details</h2>
    <Teacher name="Vidhya" gender="male" exp="15"></Teacher>
    <hr></hr>
    <Teacher name="Sagar" gender="male" exp="15"></Teacher>
    <hr></hr>

    <Animal message="Good Morning"></Animal>
    <hr></hr>

  </React.StrictMode>
);              

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
