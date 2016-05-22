import React from "react";

import {Rect, Layer} from 'react-konva';

import {GridClicked} from "../../actions/canvas";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

class HandlePosition extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const{dispatch, pixelCount} = this.props;
    e = e || window.event;

    var xVal = Math.floor(e.evt.offsetX / pixelCount) * pixelCount;
    var yVal = Math.floor(e.evt.offsetY / pixelCount) * pixelCount;

    dispatch(GridClicked(xVal, yVal));
  }

  render(){
    const{rowCount, columnCount} = this.props;
    return(
      <Layer ref='layer'>
       <Rect
         x={0} y={0}
         width={rowCount * rowCount}
         height={columnCount * columnCount}
         ref='handlePosition'
         onClick={this.handleClick}
       />
      </Layer>
    )
  }
}

export default HandlePosition;
