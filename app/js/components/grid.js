import React from "react";
import { connect, Provider } from "react-redux";
import ReactDOM from "react-dom";

import {getPixelImgData, clearPixel, createPixel} from "../utils/grid-utils";

import CSSModules from 'react-css-modules';
import styles from "../../scss/grid.scss";

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.createGrid = this.createGrid.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.updateGridColor = this.updateGridColor.bind(this);
  }

  componentDidMount(){
    let ctx = ReactDOM.findDOMNode(this).getContext("2d");
    this.createGrid();
  }

  createGrid(){
    let ctx = ReactDOM.findDOMNode(this).getContext("2d");
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
      // this.updateGridColor();
      const{columnCount, rowCount, pixelCount, pixelHex, pixelRed, pixelGreen, pixelBlue, backgroundRed, backgroundGreen, backgroundBlue } = this.props;
      let ctx = ReactDOM.findDOMNode(this).getContext("2d");
      let imgData = getPixelImgData(e, ctx, pixelCount);

      e = e || window.event;
      ctx.fillStyle = pixelHex;

      if(imgData.data[0] !== parseFloat(backgroundRed)
         && imgData.data[1] !== parseFloat(backgroundGreen)
         && imgData.data[2] !== parseFloat(backgroundBlue)
        ){
          ctx.fillStyle = `rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`;
          clearPixel(e, ctx, pixelCount);
          createPixel(e, ctx, pixelCount);
          return false;
      }

      createPixel(e, ctx, pixelCount);

  }

  updateGridColor(){

    const{columnCount, rowCount, pixelCount, backgroundRed, backgroundGreen, backgroundBlue, backgroundHex} = this.props;
      for(let x = 0; x < columnCount; x++) {
          for(let y = 0; y < rowCount; y++) {
              ctx.strokeStyle = `${backgroundRed + 44}. ${backgroundGreen + 44}. ${backgroundBlue + 44}`;
              ctx.strokeRect(x * pixelCount, y * pixelCount, pixelCount, pixelCount);
              ctx.fillStyle = 'rgba(backgroundRed, backgroundGreen, backgroundBlue, 1)';
              ctx.fillRect(x * pixelCount + 1, y * pixelCount + 1, pixelCount - 2, pixelCount - 2);
          }
      }

      // for(let x = 0; x < elem.s.storeValues.length; x++){
      //     ctx.fillStyle = elem.s.storeValues[x][2];
      //     ctx.fillRect(parseFloat(elem.s.storeValues[x][0]) + 1, parseFloat(elem.s.storeValues[x][1]) + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
      // }
  }


  render() {
    const {rowCount, columnCount} = this.props;
      return(
        <canvas styleName='canvasGrid' id='canvasGrid' onClick={this.handleClick} width={rowCount * rowCount} height={columnCount * columnCount} ref="canvasGrid" />
      )
  }
}

function mapStateToProps(state) {
  const {environment, settings, colorPicker} = state;
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
    settings,
    environment
  }
}

export default connect(mapStateToProps)(CSSModules(Grid, styles));
