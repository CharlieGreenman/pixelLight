import React, { Component, PropTypes } from "react";
import {InitGrid} from "../actions/init-grid";
import { connect } from "react-redux";
import ChooseSize from "../components/choose-size-of-grid";
import ControlPanel from "../components/control-panel";
import CodeBox from "../components/code-box";

class App extends Component {
  render(){
    const{environment} = this.props;
    if(environment.init === true){
      return(
        <div>
          <div id="header-container">
            <ControlPanel />
          </div>
          <div id="code_box_container">
            <CodeBox/>
          </div>
        </div>
      )
    }
    return(
        <div id ="choose_size_container">
          <ChooseSize />
        </div>
    )
  }
}

function mapStateToProps(state) {
  const {environment} = state;
  return{
    environment
  }
}

export default connect(mapStateToProps)(App);
