import React, { useState, createContext } from "react";
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
import EndOfDay from "./Components/EndOfDay";
import Register from "./Components/Register";

export const DataContext = createContext();

function App(props) {
  const [username, setUsername] = useState("");

  const getUserName = (user) => {
    setUsername(user);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route
          path="/sign-in"
          render={(routerProps) => (
            <SignIn {...routerProps} getUserName={getUserName} />
          )}
        />
        <Route path="/user/register" component={Register} />
        <DataContext.Provider value={{ username }}>
          <Route path="/dash" component={Dash} />
          <Route path="/log" component={MealLog} />
          <Route path="/foods/:id/edit" component={FoodEdit} />
          <Route exact path="/foods/:id" component={Food} />
          <Route exact path="/foods" component={Foods} />
          <Route path="/team" component={TheTeam} />
          <Route path="/create-food" component={FoodCreate} />
          <Route path="/close-day" component={EndOfDay} />
        </DataContext.Provider>
      </Switch>
    </div>
  );
}

export default withRouter(App);
