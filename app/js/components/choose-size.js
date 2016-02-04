import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import elem from "../_elem.js";
import $ from "jquery";
import {initApp} from "../actions/init-grid.js";
import ControlPanel from "../components/control-panel.js";
import CodeBox from "../components/code-box.js";
require("../../scss/core.scss");


class ChooseSize extends React.Component {

  constructor(props){
    super(props)
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
  }

  handleClick(){
        // this.refs.chooseSizeContainer;
        console.log("rowCount: " + this.state.rowCount);
        console.log("columnCount: " + this.state.columnCount);
        console.log("pixSize: " + this.state.pixSize);
        this.props.onInitGrid(init);
        const container = document.getElementById("choose_size_container");
        ReactDOM.unmountComponentAtNode(container);
  }

  handleChange(){
    //  ReactDOM.unmountComponentAtNode
      // elem.s.rowCount = document.getElementById("input-for-rows").value;
      // elem.s.columnCount = document.getElementById("input-for-columns").value;
      // elem.s.pixSize = document.getElementById("input-for-pixel-size").value;
      this.setState({
        rowCount: document.getElementById("input-for-rows").value,
        columnCount: document.getElementById("input-for-columns").value,
        pixSize: document.getElementById("input-for-pixel-size").value
      });
  }

  componentWillMount(){
    // console.log(this.state.rowCount);
  }

  render() {
    console.log("render");
      return(
        <div className="choose-size" ref = "chooseSizeContainer">
          <h6 className="choose-size__header">Choose size of grid</h6>
          <form className="choose-size__form" >
            <label className = "choose-size__form__label">columns</label>
            <label className = "choose-size__form__label">rows</label>
            <input onChange={this.handleChange} type="text" value = {this.state.columnCount} defaultValue={20} id="input-for-columns" className = "choose-size__form__input" />
            <input onChange={this.handleChange} type="text" value = {this.state.rowCount} defaultValue={20} id="input-for-rows" className = "choose-size__form__input" />
            <label className = "choose-size__form__label">Pixel Size</label>
            <button onClick={this.handleClick} id="create_grid" type="button" className = "choose-size__form__button">Create Grid</button>
            <input onChange={this.handleChange} type="text" value = {this.state.pixSize} defaultValue={20} id="input-for-pixel-size" className = "choose-size__form__input" />
          </form>
        </div>
          )
   }

   componentDidMount(){

   }

   componentWillUnmount(){
     ReactDOM.render(<ControlPanel/>, document.getElementById("header-container"));

     //need to put new elements that should be rendered here
   }
}
// dispatch(addTodo(text));
ReactDOM.render(<ChooseSize oninitGrid = {init => dispatch(initApp(init))}  />, document.getElementById("choose_size_container"));
// ReactDOM.render({ ChooseSize.state.showResults ? <CodeBox/> : null }, document.getElementById("code_box_container"));

export default ChooseSize;
