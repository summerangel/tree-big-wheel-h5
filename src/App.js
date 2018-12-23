import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent/AsyncComponent';

import './App.css';

const MainPageAsync = asyncComponent(()=> import('./containers/MainPage/MainPage.js'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/h5">
          <Switch>
            <Route exact path="/" component={MainPageAsync}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
