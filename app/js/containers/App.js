import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ChooseSize from "../components/choose-size";

console.log("containe file puller in");

class App extends Component {
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
