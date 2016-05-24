import React, { Component, PropTypes } from "react";
import {InitGrid} from "../actions/init-grid";
import { connect } from "react-redux";
import ChooseSize from "../components/choose-size-of-grid";
import ControlPanel from "../containers/ControlPanel";
import ChooseSizeContainer from "../containers/ChooseSizeContainer";
import CodeBox from "../containers/CodeBox";
import Grid from "../containers/Grid";

import CSSModules from 'react-css-modules';

class App extends Component {
  render(){
    const{environment} = this.props;
    if(environment.init){
      return(
        <div>
            <ControlPanel />
          <div>
            <CodeBox/>
          </div>
          <div>
            <Grid />
          </div>
        </div>
      )
    }
    return(
        <div id ="choose_size_container">
          <ChooseSizeContainer />
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
