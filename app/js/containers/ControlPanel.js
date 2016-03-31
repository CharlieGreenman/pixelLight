import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ColorPicker from "../components/color-picker";
import ToggleView from "../components/toggle-view";

class ControlPanel extends Component {
  render() {
    return(
      <div>
        <ColorPicker/>
        <ToggleView/>
      </div>
    )
  }
}

export default connect()(ControlPanel);
