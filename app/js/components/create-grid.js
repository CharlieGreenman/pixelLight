import React from "react";
import ReactDOM from "react-dom";
require("../../scss/core.scss");

class ChooseSize extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  updatedSettings(){
    elem.s.rowCount = document.getElementById("input-for-rows").value;
    elem.s.columnCount = document.getElementById("input-for-columns").value;
    elem.s.pixSize = document.getElementById("input-for-pixel-size").value;
  }


    render() {
        return(

            )
    }
}

ReactDOM.render(<ChooseSize/>, document.body);

export default chooseSize;
