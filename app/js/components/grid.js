import React from "react";
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
      for(var r = 0; r < elem.s.columnCount; r++) {
          for(var i = 0; i < elem.s.rowCount; i++) {
              ctx.strokeStyle = "#262626";
              ctx.strokeRect(r * elem.s.pixSize, i * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
              ctx.fillStyle = elem.el.backgroundHexColor.value;
              ctx.fillRect(r * elem.s.pixSize + 1, i * elem.s.pixSize + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
          }
      }
  }

  // updatedSettings(){
  //   var rowCount = document.getElementById("input-for-rows").value;
  //   var columnCount = document.getElementById("input-for-columns").value;
  //   var pixSize = document.getElementById("input-for-pixel-size").value;
  // }


  render() {
      return(
           <canvas width={500} height={500} id='canvasGrid' className='allow-handle-click' />
          )
  }
}

export default Grid;
