import React, { Component, PropTypes } from "react"
import { connect, Provider } from "react-redux";

import ReactDOM from "react-dom";

import {ColumnCount, RowCount, PixelSize, InitGrid} from "../actions/init-grid";
// require("../../scss/core.scss");
import styles from "../../scss/components/_choose-size-of-grid.scss";

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
        <div className={styles.chooseSize} ref = "chooseSizeContainer">
          <h6 className={styles.header}>Choose size of grid</h6>
          <form className={styles.form} >
            <label className = {styles.label}>columns</label>
            <label className = {styles.label}>rows</label>
            <input className = {styles.input} onChange={this.handleChange} type="text" value = {this.state.columnCount} defaultValue={20} id="input-for-columns"  />
            <input className = {styles.input} onChange={this.handleChange} type="text" value = {this.state.rowCount} defaultValue={20} id="input-for-rows"  />
            <label className = {styles.label}>Pixel Size</label>
            <button className = {styles.button} onClick={(e) => this.handleClick(e)} id="create_grid" type="button" >Create Grid</button>
            <input className = {styles.input} onChange={this.handleChange} type="text" value = {this.state.pixSize} defaultValue={20} id="input-for-pixel-size"  />
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
