import React from "react";
import ReactDOM from "react-dom";
import elem from "../_elem.js";
import $ from "jquery";
require("../../scss/core.scss");


class ChooseSize extends React.Component {
  constructor(){
    super()
    this.state = {isSelected: false}
    //allows us to simply call this.handleClick to call the handleClick function
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleClick(){
        const container = this.refs.chooseSizeContainer
        container.style.display = "none";
        // $(".choose-size").css("display", "none");
        // elem.el.codeBoxContainer.style.display = "block";
        // elem.el.colorPicker.style.display = "block";
        // elem.el.backgroundColorPicker.style.display = "block";
        // elem.el.headerContainer.style.display = "block";
        // elem.s.canvas.style.display = "block";
        alert("works");
        //taken from createGridIllustrator
  }

  handleChange(){
      elem.s.rowCount = document.getElementById("input-for-rows").value;
      elem.s.columnCount = document.getElementById("input-for-columns").value;
      elem.s.pixSize = document.getElementById("input-for-pixel-size").value;
      alert("works");
  }




  render() {
      return(
        <div className="choose-size" ref = "chooseSizeContainer">
          <h6 className="choose-size__header">Choose size of grid</h6>
          <form className="choose-size__form" >
            <label className = "choose-size__form__label">columns</label>
            <label className = "choose-size__form__label">rows</label>
            <input onChange={this.handleChange} type="text" defaultValue={20} id="input-for-columns" className = "choose-size__form__input" />
            <input onChange={this.handleChange} type="text" defaultValue={20} id="input-for-rows" className = "choose-size__form__input" />
            <label className = "choose-size__form__label">Pixel Size</label>
            <button onClick={this.handleClick} id="create_grid" type="button" className = "choose-size__form__button">Create Grid</button>
            <input onChange={this.handleChange} type="text" defaultValue={20} id="input-for-pixel-size" className = "choose-size__form__input" />
          </form>
        </div>
          )
     }
}

ReactDOM.render(<ChooseSize/>, document.getElementById("choose_size_container"));

export default ChooseSize;
