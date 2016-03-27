import React from "react";
import { connect, Provider } from "react-redux";
import ReactDOM from "react-dom";
require("../../scss/core.scss");

class Grid extends React.Component {
  constructor(props){
    super(props)
    this.createGrid = this.createGrid.bind(this);
    this.updatedSettings = this.createGrid.bind(this);
  }

  componentDidMount(){
    let ctx = ReactDOM.findDOMNode(this).getContext("2d");
    this.updatedSettings();
    this.createGrid();
  }

  createGrid(){
    let ctx = ReactDOM.findDOMNode(this).getContext("2d");
    const{settings} = this.props;
      for(var r = 0; r < settings.column.column; r++) {
          for(var i = 0; i < settings.row.row; i++) {
              ctx.strokeStyle = "#262626";
              ctx.strokeRect(r * settings.pixel.pixel, i * settings.pixel.pixel, settings.pixel.pixel, settings.pixel.pixel);
              // ctx.fillStyle = elem.el.backgroundHexColor.value;
              ctx.fillStyle = "black";
              ctx.fillRect(r * settings.pixel.pixel + 1, i * settings.pixel.pixel + 1, settings.pixel.pixel - 2, settings.pixel.pixel - 2);
          }
      }
  }

  render() {
      return(
           <canvas width={500} height={500} id='canvasGrid' className='allow-handle-click' />
          )
  }
}

function mapStateToProps(state) {
  const {environment, settings} = state;
  return{
    settings,
    environment
  }
}

export default connect(mapStateToProps)(Grid);
