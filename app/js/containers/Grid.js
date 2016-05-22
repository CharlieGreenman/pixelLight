import React from "react";
import { connect, Provider } from "react-redux";

import Canvas from "../components/grid/canvas";

class Grid extends React.Component {
  render(){
    return(
       <Canvas {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  const {environment, settings, colorPicker, grid} = state;
  return{
    rowCount: settings.row.count,
    columnCount: settings.column.count,
    pixelCount: parseFloat(settings.pixel.count),
    pixelHex: colorPicker.pixelHex,
    backgroundHex: colorPicker.backgroundHex,
    backgroundRed: colorPicker.backgroundRed,
    backgroundGreen: colorPicker.backgroundGreen,
    backgroundBlue: colorPicker.backgroundBlue,
    pixelRed: colorPicker.pixelRed,
    pixelGreen: colorPicker.pixelGreen,
    pixelBlue: colorPicker.pixelBlue,
    xPos: grid.xPos,
    yPos: grid.yPos,
    settings,
    environment
  }
}

export default connect(mapStateToProps)(Grid);
