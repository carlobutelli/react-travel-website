import React from "react";
import './App.css';
import Navbar from "./Components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/home/Home';
import Services from "./Views/services/Services";
import Products from "./Views/products/Products";
import About from "./Views/about/About";
import SignUp from "./Views/sign-up/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/about' exact component={About} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;