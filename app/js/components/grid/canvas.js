import React from "react";
import CSSX from 'react-cssx';

import {GridClicked} from "../../actions/canvas";

import {Layer, Rect, Stage, Group} from 'react-konva';

import {getPixelImgData, clearPixel, createPixel} from "../../utils/grid-utils";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

import HandlePosition from './handlePosition';
import FillRect from './rect.js';
import GridMesh from './line-mesh.js';

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.styleCanvasBackground = this.styleCanvasBackground.bind(this);
  }

  render() {
      const{backgroundHex, rowCount, columnCount} = this.props;
      return(
        <CSSX styles={ this.styleCanvasBackground(backgroundHex) }>
        <Stage className='canvasGrid' styleName='canvasGrid' width={rowCount * rowCount} height={columnCount * columnCount} ref='stage' >
        <HandlePosition {...this.props}/>
        <FillRect {...this.props }/>
        <GridMesh {...this.props}/>
        </Stage>
        </CSSX>
      )
  }

  styleCanvasBackground(color) {
   return (
     <style>
       .canvasGrid {
         background: {{color}};
       }
     </style>
   )
 }
}

export default CSSModules(Canvas, styles);
