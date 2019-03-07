import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Hotels from "./components/Hotels";
import TabLink from "./components/TabLink";
import Cars from "./components/Cars";
import Header from "./components/Header";
import Flights from "./components/Flights";
import ThingsToDo from "./components/ThingsToDo";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TabLinkUp from "./components/TabLinkUp";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <TabLinkUp/>
        <TabLink/>
        <Switch>
          <Route exact path="/" component={Hotels} />
          <Route path="/Flights" component={Flights} />
          <Route path="/Cars" component={Cars} />
          <Route path="/ThingsToDo" component={ThingsToDo}/>
        </Switch>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
