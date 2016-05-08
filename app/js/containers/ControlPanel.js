import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import BackgroundColorPicker from "../components/color-picker/background-color-picker";
import PixelColorPicker from "../components/color-picker/pixel-color-picker";
import ToggleView from "../components/toggle-view";

import CSSModules from 'react-css-modules';
import styles from "../../scss/visual-settings-control-panel.scss";

class ControlPanel extends Component {
  render() {
    return(
      <div styleName='header-container'>
        <BackgroundColorPicker {...this.props}/>
        <PixelColorPicker {...this.props}/>
        <ToggleView/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {colorPicker, settings} = state;
  return{
    colorPicker,
    backgroundHex: colorPicker.backgroundHex,
    backgroundRed: colorPicker.backgroundRed,
    backgroundGreen: colorPicker.backgroundGreen,
    backgroundBlue: colorPicker.backgroundBlue,
    pixelHex: colorPicker.pixelHex,
    pixelRed: colorPicker.pixelRed,
    pixelGreen: colorPicker.pixelGreen,
    pixelBlue: colorPicker.pixelBlue,
    rowCount: settings.row.count,
    columnCount: settings.column.count,
    pixelCount: parseFloat(settings.pixel.count)
  }
}


export default connect(mapStateToProps)(CSSModules(ControlPanel,styles));
