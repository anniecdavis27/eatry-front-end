import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Welcome from './Components/Welcome'
import SignIn from './Components/SignIn'
import Dash from './Components/Dash'
import MealLog from './Components/MealLog'
import Foods from './Components/Foods'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/dash' component={Dash} />
      <Route path='/log' component={MealLog} />
      <Route path='/foods' component={Foods} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/' component={Welcome} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
