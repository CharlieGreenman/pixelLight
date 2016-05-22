import React from "react";

import {Rect, Layer} from 'react-konva';

import {clearPixel, createPixel} from "../../utils/grid-utils";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

class FillRect extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showRect: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
      console.log('works as expected');
      console.log(this.refs.fillRect);
  }

  render() {
    const {columnCount, rowCount, pixelHex, pixelCount, xPos, yPos} = this.props;
    let rect = [];

    xPos.map(function(value, idx){
      rect.push(<Rect
          x={xPos[idx]} y={yPos[idx]} width={pixelCount} height={pixelCount}
          fill="black"
          ref="fillRect"
          // onClick={this.handleClick}
          key={idx}
          />
      )
    });

    return(
      <Layer>
      {rect}
      </Layer>
    )

  }
}

export default FillRect;
