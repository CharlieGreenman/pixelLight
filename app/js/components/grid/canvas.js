import React from "react";
import CSSX from 'react-cssx';

import {GridClicked} from "../../actions/canvas";

import {Layer, Rect, Stage, Group} from 'react-konva';

import {getPixelImgData, clearPixel, createPixel} from "../../utils/grid-utils";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

import FillRect from './rect.js';
import GridMesh from './line-mesh.js';

class Canvas extends React.Component {
  constructor(props){
    super(props);
    this.createGrid = this.createGrid.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.updateGridColor = this.updateGridColor.bind(this);
    this.styleCanvasBackground = this.styleCanvasBackground.bind(this);
  }

  componentDidMount(){
    // this.createGrid();
  }

  createGrid(){
    const{columnCount, rowCount, pixelCount, backgroundHex } = this.props;
      for(var r = 0; r < columnCount; r++) {
          for(var i = 0; i < rowCount; i++) {
              ctx.strokeStyle = "#262626";
              ctx.strokeRect(r * pixelCount, i * pixelCount, pixelCount, pixelCount);
              ctx.fillStyle = backgroundHex;
              ctx.fillRect(r * pixelCount + 1, i * pixelCount + 1, pixelCount - 2, pixelCount - 2);
          }
      }
  }

  handleClick(e){
      const{dispatch, columnCount, rowCount, pixelCount, pixelHex, pixelRed, pixelGreen, pixelBlue, backgroundRed, backgroundGreen, backgroundBlue } = this.props;
      e = e || window.event;

      var xVal = Math.floor(e.nativeEvent.offsetX / pixelCount) * pixelCount;
      var yVal = Math.floor(e.nativeEvent.offsetY / pixelCount) * pixelCount;
      dispatch(GridClicked(xVal, yVal));

      // this.updateGridColor();


      let imgData = getPixelImgData(e, ctx, pixelCount);

      // ctx.fillStyle = pixelHex;

      if(imgData.data[0] !== parseFloat(backgroundRed)
         && imgData.data[1] !== parseFloat(backgroundGreen)
         && imgData.data[2] !== parseFloat(backgroundBlue)
        ){
          // ctx.fillStyle = `rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`;
          clearPixel(e, ctx, pixelCount);
          createPixel(e, ctx, pixelCount);
          return false;
      }

      createPixel(e, ctx, pixelCount);

  }

  updateGridColor(){

    // const{columnCount, rowCount, pixelCount, backgroundRed, backgroundGreen, backgroundBlue, backgroundHex} = this.props;
    //   for(let x = 0; x < columnCount; x++) {
    //       for(let y = 0; y < rowCount; y++) {
    //           ctx.strokeStyle = `${backgroundRed + 44}. ${backgroundGreen + 44}. ${backgroundBlue + 44}`;
    //           ctx.strokeRect(x * pixelCount, y * pixelCount, pixelCount, pixelCount);
    //           ctx.fillStyle = 'rgba(backgroundRed, backgroundGreen, backgroundBlue, 1)';
    //           ctx.fillRect(x * pixelCount + 1, y * pixelCount + 1, pixelCount - 2, pixelCount - 2);
    //       }
    //   }

      // for(let x = 0; x < elem.s.storeValues.length; x++){
      //     ctx.fillStyle = elem.s.storeValues[x][2];
      //     ctx.fillRect(parseFloat(elem.s.storeValues[x][0]) + 1, parseFloat(elem.s.storeValues[x][1]) + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
      // }
  }



  render() {
      const{backgroundHex, rowCount, columnCount} = this.props;
      return(
        <CSSX styles={ this.styleCanvasBackground(backgroundHex) }>
        <Stage className='canvasGrid' styleName='canvasGrid' width={rowCount * rowCount} height={columnCount * columnCount} ref='canvasGrid' onClick={this.handleClick} >
        <FillRect />
        <GridMesh />
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
