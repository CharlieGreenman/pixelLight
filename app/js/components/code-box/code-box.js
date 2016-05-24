import React from "react";
import ReactDOM from "react-dom";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

import {CurrView} from "../../actions/code-box";

class CodeBoxNav extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      sass: false
    }
  }
  handleClick(e){
    this.setState({
        [e.target.id]: true
    });
    console.log('e.target.id: ' + e.target.id);
  }

  render() {
    if(this.state.sass){
      return(
        <p>sass</p>
      );
    }
    return (
      <div>
        <div className="row">
          <div styleName="css_toggle" id ="css" onClick={this.handleClick}><span>CSS</span></div>
          <div styleName="sass_toggle" id ="sass" onClick={this.handleClick}><span>SASS</span></div>
          <div styleName="less_toggle" id ="less" onClick={this.handleClick}><span>LESS</span></div>
          <div styleName="js_toggle" id ="js" onClick={this.handleClick}><span>JS</span></div>
        </div>
        <p id="inner_code_box">box-shadow:</p>
      </div>
    );
  }
}

export default CSSModules(CodeBoxNav,styles);
