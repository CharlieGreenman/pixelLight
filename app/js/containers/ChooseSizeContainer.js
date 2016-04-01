import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ChooseSize from "../components/choose-size-of-grid";

class ChooseSizeContainer extends Component{
  render(){
    return <ChooseSize {...this.props} />
  }
}

function mapStateToProps(state) {
  const {environment} = state;
  return{
    environment
  }
}

export default connect(mapStateToProps)(ChooseSizeContainer);
