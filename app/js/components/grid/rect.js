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
    this.setState({ showRect: false });
  }

  render() {
    const {columnCount, rowCount, pixelHex, pixelCount} = this.props;
    if(this.state.showRect){
      return(
        <Layer>
          <Rect
              x={0} y={0} width={pixelCount} height={pixelCount}
              fill="black"
              onClick={this.handleClick}
              ref="fillRect"
          />
        </Layer>
      )
    }
    return(
      <Layer>
      </Layer>
    )
  }
}

export default FillRect;
