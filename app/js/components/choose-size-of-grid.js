import React, { Component, PropTypes } from "react"
import { connect, Provider } from "react-redux";

import ReactDOM from "react-dom";

import {ColumnCount, RowCount, PixelSize, InitGrid} from "../actions/init-grid";

import CSSModules from 'react-css-modules';
import styles from "../../scss/components/choose-size-of-grid.scss";

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
        <div styleName='choose-size' ref = "chooseSizeContainer">
          <h6 styleName='header' >Choose size of grid</h6>
          <form styleName='form'>
            <label styleName='label'>columns</label>
            <label styleName='label'>rows</label>
            <input styleName='input' onChange={this.handleChange} type="text" value = {this.state.columnCount} defaultValue={20} id="input-for-columns"  />
            <input styleName='input' onChange={this.handleChange} type="text" value = {this.state.rowCount} defaultValue={20} id="input-for-rows"  />
            <label styleName='label'>Pixel Size</label>
            <button className = {styles.button} onClick={(e) => this.handleClick(e)} id="create_grid" type="button" >Create Grid</button>
            <input styleName='input' onChange={this.handleChange} type="text" value = {this.state.pixSize} defaultValue={20} id="input-for-pixel-size"  />
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

export default CSSModules(ChooseSize, styles);
