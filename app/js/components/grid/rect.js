import React from "react";

import {Rect, Layer} from 'react-konva';

import {FillRectClicked} from "../../actions/canvas";

import {clearPixel, createPixel} from "../../utils/grid-utils";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

class FillRect extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const{dispatch} = this.props;
      dispatch(FillRectClicked(e.target.index));
  }

  render() {
    const {columnCount, rowCount, pixelHex, pixelCount, xPos, yPos, rectColor} = this.props;
    let rect = [];
    xPos.map(function(value, idx){
      rect.push(<Rect
          x={xPos[idx]} y={yPos[idx]} width={pixelCount} height={pixelCount}
          fill={rectColor[idx]}
          onClick={this.handleClick}
          key={idx}
          />
      )
    }, this);

    return(
      <Layer>
      {rect}
      </Layer>
    )

  }
}

export default FillRect;
