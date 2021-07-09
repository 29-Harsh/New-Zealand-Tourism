import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./About";
import App from "./App";
import Places from "./Places";
import Fplaces from "./Fplaces";
import Contact from "./Contact";
import Gallery from "./Gallery";


const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/places-to-visit" component={Places} />
        <Route path="/food-places-to-visit" component={Fplaces} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  )
}
export default Main;
