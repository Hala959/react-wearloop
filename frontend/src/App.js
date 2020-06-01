import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nave from './navber/Nave';
import Home from './Home/Home';
import {Switch,Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />

    <Nave />
<Home/>
</Switch>
  
      </div>
    )
  }
}
