import React, { Component, PropTypes } from "react";
import {InitGrid} from "../actions/init-grid";
import { connect } from "react-redux";
import ChooseSize from "../components/choose-size-of-grid";

class App extends Component {
  render(){
    return(
      <ChooseSize/>
    );
  }
}

export default App;
