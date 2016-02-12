import React, { Component, PropTypes } from "react";
import {InitGrid} from "../actions/init-grid";
import { connect } from "react-redux";
import ChooseSize from "../components/choose-size";

console.log("containe file puller in");

class App extends React.Component {
  constructor(){
    super();


  }

  componentDidMount () {
    const {dispatch} = this.props;
    dispatch(InitGrid());
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
