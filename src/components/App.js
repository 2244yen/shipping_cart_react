import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Common/Nav';
import Shop from './Shop/Shop';
import Order from './Order/Order';
import NotFound from './Common/NotFound';
import logo from '../assets/images/logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <img src={logo} alt="" className="img-responsive" width="200px"/>
          </div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Shop}></Route>
            <Route path='/order' component={Order}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
