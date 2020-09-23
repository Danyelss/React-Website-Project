import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FirstPage from './pages';
import NotFoundPage from './pages/404';
import Products from './pages/products';
import Cart from './pages/cart';
import Contact from './pages/contact';

class App extends Component {
  render(){
  return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={FirstPage}></Route>
              <Route exact path="/404" component={NotFoundPage}></Route>      
              <Route exact path="/products" component={Products}></Route>
              <Route exact path="/cart" component={Cart}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Redirect to="/404"></Redirect>
              </Switch>    
          </Router>
        </div>
  );
}
}
export default App;
