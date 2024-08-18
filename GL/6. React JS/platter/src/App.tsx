import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import RestaurantListComponent from './components/RestaurantListComponent';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import RestaurantDetailComponent from './components/RestaurantDetailComponent';

function App() {
  return (
    
      <>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Platter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/list">Restaurants List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <BrowserRouter basename='/'> {/* Move BrowserRouter here */}
        {/* Your components outside of the routing */}
        {/* <HomeComponent></HomeComponent>
        <AboutComponent></AboutComponent>
        <RestaurantListComponent></RestaurantListComponent> */}

        {/* Links for navigation */}
        {/* <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/list">List </Link> */}

        {/* Routes for rendering components */}
        <Routes>
          <Route index element={<HomeComponent/>}></Route>
          <Route path='/about' element={<AboutComponent/>}></Route>
          <Route path='/list' element={<RestaurantListComponent/>}></Route>
          <Route path='/single/:id' element={<RestaurantDetailComponent/>}></Route>
        </Routes>
        </BrowserRouter>
        <Outlet></Outlet>
      </>
      
    
    
  );
}

export default App;
