import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

class Grid extends React.Component {
  constructor(props){
    super(props);
    // var ctx = this.getDOMNode().getContext("2d");
  }

  componentDidMount() {
    var ctx = this.getDOMNode().getContext("2d");
  }

  //create grid and create boxes
  createGridIllustrator(){
      //module for creating a grid
      for(var r = 0; r < elem.s.columnCount; r++) {
          for(var i = 0; i < elem.s.rowCount; i++) {
              ctx.strokeStyle = "#262626";
              ctx.strokeRect(r * elem.s.pixSize, i * elem.s.pixSize, elem.s.pixSize, elem.s.pixSize);
              ctx.fillStyle = elem.el.backgroundHexColor.value;
              ctx.fillRect(r * elem.s.pixSize + 1, i * elem.s.pixSize + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
          }
      }
  }

  render() {
    return (
      <canvas width={400} height={400} id="canvasGrid" className="allow-handle-click" ></canvas>
    );
  }
}


function mapStateToProps(state) {
  const {environment, formSettings} = state;
  return{
    formSettings
  }
}

export default connect(mapStateToProps)(Grid);
