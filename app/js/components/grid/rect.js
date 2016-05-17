import React from "react";

import {Rect, Layer} from 'react-konva';

import {clearPixel, createPixel} from "../../utils/grid-utils";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

class FillRect extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const{dispatch, pixelCount, backgroundRed, backgroundGreen, backgroundBlue } = this.props;
    e = e || window.event;
    var xVal = Math.floor(e.nativeEvent.offsetX / pixelCount) * pixelCount;
    var yVal = Math.floor(e.nativeEvent.offsetY / pixelCount) * pixelCount;
    dispatch(GridClicked(xVal, yVal));

    // ctx.fillStyle = `rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`;
    clearPixel(e, ctx, pixelCount);
    createPixel(e, ctx, pixelCount);
  }

  render() {
    const {columnCount, rowCount, pixelHex} = this.props;
      return(
        <Layer>
          <Rect
              x={2} y={3} width={20} height={20}
              fill="black"
              onClick={this.handleClick}
              ref="fillRect"
          />
        </Layer>
      )

  }
}

export default FillRect;
