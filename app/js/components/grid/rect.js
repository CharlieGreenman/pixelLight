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
    const {columnCount, rowCount, pixelHex, pixelCount, xVal, yVal} = this.props;
    let rect = [];
    let counter = 0;
    // for(let x = 0; x < columnCount; x++) {
    //     for(let y = 0; y < rowCount; y++) {
    //       counter++;
    //       if(this.state.counter){
            rect.push(<Rect
                x={xVal} y={yVal} width={pixelCount} height={pixelCount}
                fill="black"
                ref="fillRect"
                onClick={this.handleClick}
                key={counter}
                />
            )
    //       }
    //     }
    // }

      return(
        <Layer>
        {rect}
        </Layer>
      )

    // return(
    //   <Layer>
    //   </Layer>
    // )
  }
}

export default FillRect;
