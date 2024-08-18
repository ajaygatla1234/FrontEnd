import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import HomeComponent from './HomeComponent';
// import AboutComponent from './AboutComponent';
// import ContactComponent from './ContactComponent';

import ReactTable1 from './1.ReactTable1';
import AxiosExample from './2.AxiosExample';
import AxiosExample1 from './3.AxiosExample';

import ReactTableAxios from './4.ReactTableAxios';
import ParentComponent from './5.ParentComponent';
import ErrorBoundary from './6.ErrorBoundary';
import ErrorCreator from './6.ErrorCreator';
import Dialog from './7.Dialog';
import AxiosExample2 from './8.AxiosExample';
import ErrorCreator1 from './9.ErrorCreator';
import ErrorBoundary1 from './9.ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root-2') as HTMLElement
);



const LoadingScreen:  React.FC =() => <div>Loading...</div>;

const columns = [
  {Header : "Id",accessor:"id"},
  {Header : "Name", accessor:"name"},
  {Header : "Gender", accessor:"gender"},
  {Header : "Location", accessor:"location"}
]
const data = [
  {id : 1, name : "Ramya", gender : "Female", location:"Hyd"},
  {id : 2, name : "RamaRaju", gender : "Male",location:"Hyd"},
  {id : 3, name : "Subhashini", gender : "Female",location:"Hyd"},
  {id : 4, name : "Ram", gender : "Male",location:"Hyd"},
]


//student details
const columns1 = [
  {Header : "Id",accessor:"id"},
  {Header : "Name", accessor:"name"},
  {Header : "Gender", accessor:"gender"},
  {Header : "Standard", accessor:"standard"},
  {Header : "Section", accessor:"section"}
]
const data1 = [
  {id : 1, name : "Ramya", gender : "Female", standard:"1st", section:"A"},
  {id : 2, name : "RamaRaju", gender : "Male",standard:"2nd", section:"B"},
  {id : 3, name : "Subhashini", gender : "Female",standard:"3rd", section:"A"},
  {id : 4, name : "Ram", gender : "Male",standard:"4th", section:"B"}
]



root.render(
  <React.StrictMode>
    <div>
      {/* <ReactTable1 columns={columns} data={data}></ReactTable1>
      <h1>Student details</h1>
      <ReactTable1 columns={columns1} data={data1}></ReactTable1>
      <hr></hr> */}
      {/* <AxiosExample></AxiosExample> */}
      {/* <AxiosExample1></AxiosExample1> */}

      <ReactTableAxios></ReactTableAxios>

      <ParentComponent></ParentComponent>

      <ErrorBoundary>
        <ErrorCreator></ErrorCreator>
      </ErrorBoundary>

      <Dialog></Dialog>

      {/* <AxiosExample2></AxiosExample2> */}

        <ErrorBoundary1>
          <ErrorCreator1></ErrorCreator1>
        </ErrorBoundary1>

      
    
      </div>

     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();