import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import BackgroundColorPicker from "../components/color-picker/background-color-picker";
import PixelColorPicker from "../components/color-picker/pixel-color-picker";
import ColorPicker from "../components/color-picker";
import ToggleView from "../components/toggle-view";

class ControlPanel extends Component {
  render() {
    return(
      <div>
        <BackgroundColorPicker {...this.props}/>
        <PixelColorPicker {...this.props}/>
        <ToggleView/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {colorPicker} = state;
  return{
    colorPicker
  }
}


export default connect(mapStateToProps)(ControlPanel);
