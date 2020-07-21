import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Welcome from "./Components/Welcome";
import SignIn from "./Components/SignIn";
import Dash from "./Components/Dash";
import MealLog from "./Components/MealLog";
import Foods from "./Components/Foods";
import TheTeam from "./Components/TheTeam";
import Food from "./Components/Food";
import FoodCreate from "./Components/FoodCreate";
import FoodEdit from "./Components/FoodEdit";
import EndOfDay from './Components/EndOfDay'
import Register from './Components/Register'

function App(props) {
  return (
    <div className="App">
      <Switch>
      <Route path="/user/register" component={Register} />
        <Route path="/dash" component={Dash} />
        <Route path="/log" component={MealLog} />
        <Route path="/foods/:id/edit" component={FoodEdit} />
        <Route path="/foods/:id" component={Food} />
        <Route path="/foods" component={Foods} />
        <Route path="/team" component={TheTeam} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/create-food" component={FoodCreate} />
        <Route path="/close-day" component={EndOfDay} />
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
