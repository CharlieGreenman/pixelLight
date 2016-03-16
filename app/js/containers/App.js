import React, { Component, PropTypes } from "react";
import {InitGrid} from "../actions/init-grid";
import { connect } from "react-redux";
import ChooseSize from "../components/choose-size";

class App extends React.Component {
  constructor(){
    super();

  }

  componentDidMount () {


  }

  render() {
    return(
      <div>
        <ChooseSize />
      </div>
    )
  }
}

App.propTypes = {

}

export default App;
