import React from "react";
import { connect, Provider } from "react-redux";
import ReactDOM from "react-dom";
require("../../scss/core.scss");

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.createGrid = this.createGrid.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    let ctx = ReactDOM.findDOMNode(this).getContext("2d");

    this.createGrid();
  }

  createGrid(){
    let ctx = ReactDOM.findDOMNode(this).getContext("2d");
    const{columnCount, rowCount, pixelCount, } = this.props;
      for(var r = 0; r < columnCount; r++) {
          for(var i = 0; i < rowCount; i++) {
              ctx.strokeStyle = "#262626";
              //conisder including utility function to work off of values
              ctx.strokeRect(r * pixelCount, i * pixelCount, pixelCount, pixelCount);
              // ctx.fillStyle = elem.el.backgroundHexColor.value;
              ctx.fillStyle = "black";
              ctx.fillRect(r * pixelCount + 1, i * pixelCount + 1, pixelCount - 2, pixelCount - 2);
          }
      }
  }

  handleClick(e){
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
      var imgData = ctx.getImageData(Math.floor(e.nativeEvent.offsetX / pixelCount) * pixelCount + 1,
          Math.floor(e.nativeEvent.offsetY / pixelCount) * pixelCount + 1,
          pixelCount - 2, pixelCount - 2);

      if(imgData.data[0] !== parseFloat(backgroundRed) && imgData.data[1] !== parseFloat(backgroundGreen) && imgData.data[2] !== parseFloat(backgroundBlue)){
          console.log('imgData properly being called');
          ctx.fillStyle = `rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`;
          ctx.clearRect(Math.floor(e.nativeEvent.offsetX / pixelCount) * pixelCount + 1,
              Math.floor(e.nativeEvent.offsetY / pixelCount) * pixelCount + 1,
              pixelCount - 2, pixelCount - 2);
          ctx.fillRect(Math.floor(e.nativeEvent.offsetX / pixelCount) * pixelCount + 1,
              Math.floor(e.nativeEvent.offsetY / pixelCount) * pixelCount + 1,
              //accomodate for 2 px border
              //need to put in a variable down the line
              pixelCount - 2, pixelCount - 2);
          ctx.fillStyle = `rgba(${backgroundRed}, ${backgroundGreen}, ${backgroundBlue}, 1)`;
          //elem.s.storeValues.indexOf([xVal, yVal, elem.el.hexColor.value]).pop();
          //this return false is causing wonky behavior, should look into it
          return false;
      }

      ctx.fillRect(Math.floor(e.nativeEvent.offsetX / pixelCount) * pixelCount + 1,
          Math.floor(e.nativeEvent.offsetY / pixelCount) * pixelCount + 1,
          //accomodate for 2 px border
          //need to put in a variable down the line
          pixelCount - 2, pixelCount - 2);

  }

  render() {
      return(
           <canvas onClick={this.handleClick} width={500} height={500} id='canvasGrid' className='allow-handle-click' />
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
    backgroundRed: colorPicker.red,
    backgroundGreen: colorPicker.green,
    backgroundBlue: colorPicker.blue,
    settings,
    environment
  }
}

export default connect(mapStateToProps)(Grid);
