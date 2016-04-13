import React, { Component, PropTypes } from "react"
import { connect, Provider } from "react-redux";

import ReactDOM from "react-dom";

import {ColumnCount, RowCount, PixelSize, InitGrid} from "../actions/init-grid";
require("../../scss/core.scss");

class ChooseSize extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isSelected: false,
      rowCount: "20",
      columnCount: "20",
      pixSize: "20",
      initGrid: false
    }
    //allows us to simply call this.handleClick to call the handleClick function
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleClick(e){
        const {dispatch} = this.props;
        dispatch(InitGrid());
        dispatch(ColumnCount(this.state.columnCount));
        dispatch(RowCount(this.state.rowCount));
        dispatch(PixelSize(this.state.pixSize));
  }

  handleChange(){
      this.setState({
        rowCount: document.getElementById("input-for-rows").value,
        columnCount: document.getElementById("input-for-columns").value,
        pixSize: document.getElementById("input-for-pixel-size").value
      });
  }

  renderForm(){
    const{environment, dispatch} = this.props;
      return(
        <div className="choose-size" ref = "chooseSizeContainer">
          <h6 className="choose-size__header">Choose size of grid</h6>
          <form className="choose-size__form" >
            <label className = "choose-size__form__label">columns</label>
            <label className = "choose-size__form__label">rows</label>
            <input onChange={this.handleChange} type="text" value = {this.state.columnCount} defaultValue={20} id="input-for-columns" className = "choose-size__form__input" />
            <input onChange={this.handleChange} type="text" value = {this.state.rowCount} defaultValue={20} id="input-for-rows" className = "choose-size__form__input" />
            <label className = "choose-size__form__label">Pixel Size</label>
            <button onClick={(e) => this.handleClick(e)} id="create_grid" type="button" className = "choose-size__form__button">Create Grid</button>
            <input onChange={this.handleChange} type="text" value = {this.state.pixSize} defaultValue={20} id="input-for-pixel-size" className = "choose-size__form__input" />
          </form>
        </div>
          )
  }

  render() {
    return(
      <div>
          {this.renderForm()}
      </div>
    )
   }
}

export default ChooseSize;
