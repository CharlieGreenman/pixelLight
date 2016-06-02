import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

import {CurrView, cssView, lessView, sassView, jsView} from "../../actions/code-box";

class CodeBoxNav extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    const{dispatch} = this.props;
    dispatch(CurrView(e.target.id));
  }

  render() {
    const{dispatch} = this.props;
    return (
        <div>
          <button styleName="css_toggle" id ="css" onClick={this.handleClick}>CSS</button>
          <button styleName="sass_toggle" id ="sass" onClick={this.handleClick}>SASS</button>
          <button styleName="less_toggle" id ="less" onClick={this.handleClick}>LESS</button>
          <button styleName="js_toggle" id ="js" onClick={this.handleClick}>JS</button>
        </div>
    );
  }
}

export default CSSModules(CodeBoxNav,styles);
