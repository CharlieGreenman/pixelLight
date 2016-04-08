import React from "react";
import { connect, Provider } from "react-redux";
import ReactDOM from "react-dom";
require("../../scss/core.scss");

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
              //conisder including utility function to work off of values
              ctx.strokeRect(r * pixelCount, i * pixelCount, pixelCount, pixelCount);
              // ctx.fillStyle = elem.el.backgroundHexColor.value;
              ctx.fillStyle = backgroundHex;
              ctx.fillRect(r * pixelCount + 1, i * pixelCount + 1, pixelCount - 2, pixelCount - 2);
          }
      }
  }

  handleClick(e){
      // this.updateGridColor();
      const{columnCount, rowCount, pixelCount, pixelHex, backgroundRed, backgroundGreen, backgroundBlue } = this.props;
      let ctx = ReactDOM.findDOMNode(this).getContext("2d");
      // clrPckr.pickBackgroundHexColor();
      // console.log(`rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`);
      e = e || window.event;
      var xVal = Math.floor(e.offsetX === undefined ? e.layerX : e.offsetX / pixelCount) * pixelCount;
      var yVal = Math.floor(e.offsetY === undefined ? e.layerY : e.offsetY / pixelCount) * pixelCount;
      ctx.fillStyle = pixelHex;
      //offsetY does not have a synthetic react event
      //http://stackoverflow.com/questions/31519758/reacts-mouseevent-doesnt-have-offsetx-offsety
      // function param(pixel){
      //   reuMath.floor(e.nativeEvent.offsetX / pixel) * pixelCount + 1,
      //       Math.floor(e.nativeEvent.offsetY / pixelCount) * pixelCount + 1,
      //       pixelCount - 2, pixelCount - 2
      // }
      function getPixelImgData(pixelSize){
        return ctx.getImageData(Math.floor(e.nativeEvent.offsetX / pixelSize) * pixelSize + 1,
            Math.floor(e.nativeEvent.offsetY / pixelSize) * pixelSize + 1,
            pixelSize - 2, pixelSize - 2);
      }

      function clearPixel(pixelSize){
        return ctx.clearRect(Math.floor(e.nativeEvent.offsetX / pixelSize) * pixelSize + 1,
            Math.floor(e.nativeEvent.offsetY / pixelSize) * pixelSize + 1,
            pixelSize - 2, pixelSize - 2);
      }
      function fillPixel(pixelSize){
        return ctx.fillRect(Math.floor(e.nativeEvent.offsetX / pixelSize) * pixelSize + 1,
            Math.floor(e.nativeEvent.offsetY / pixelSize) * pixelSize + 1,
            pixelSize - 2, pixelSize - 2);
      }

      let imgData = getPixelImgData(pixelCount);

      if(imgData.data[0] !== parseFloat(backgroundRed) && imgData.data[1] !== parseFloat(backgroundGreen) && imgData.data[2] !== parseFloat(backgroundBlue)){
          console.log('imgData properly being called');
          ctx.fillStyle = `rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`;
          clearPixel(pixelCount);
          fillPixel(pixelCount);
          ctx.fillStyle = `rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`;
          //elem.s.storeValues.indexOf([xVal, yVal, elem.el.hexColor.value]).pop();
          //this return false is causing wonky behavior, should look into it
          return false;
      }

      fillPixel(pixelCount);

  }

  // updateGridColor() {
  //   let ctx = ReactDOM.findDOMNode(this).getContext("2d");
  //   const{columnCount, rowCount, pixelCount, backgroundRed, backgroundGreen, backgroundBlue, backgroundHex} = this.props;
  //     for(let x = 0; x < columnCount; x++) {
  //         for(let y = 0; y < rowCount; y++) {
  //             ctx.strokeStyle = `${backgroundRed + 44}. ${backgroundGreen + 44}. ${backgroundBlue + 44}`;
  //             ctx.strokeRect(x * pixelCount, y * pixelCount, pixelCount, pixelCount);
  //             ctx.fillStyle = backgroundHex;
  //             ctx.fillRect(x * pixelCount + 1, y * pixelCount + 1, pixelCount - 2, pixelCount - 2);
  //         }
  //     }
  //
  //     // for(let x = 0; x < elem.s.storeValues.length; x++){
  //     //     ctx.fillStyle = elem.s.storeValues[x][2];
  //     //     ctx.fillRect(parseFloat(elem.s.storeValues[x][0]) + 1, parseFloat(elem.s.storeValues[x][1]) + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
  //     // }
  //
  // }

  render() {
      return(
           <canvas onClick={this.handleClick} width={500} height={500} id='canvasGrid' ref="canvasGrid"  className='allow-handle-click' />
          )
  }
}

function mapStateToProps(state) {
  const {environment, settings, colorPicker} = state;
  return{
    rowCount: settings.row.count,
    columnCount: settings.column.count,
    pixelCount: parseFloat(settings.pixel.count),
    pixelHex: colorPicker.pixel.pixelColor,
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

export default connect(mapStateToProps)(Grid);
