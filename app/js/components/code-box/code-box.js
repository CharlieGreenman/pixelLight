import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";



import {CurrView, cssView, lessView, sassView, jsView} from "../../actions/code-box";

class CodeBoxNav extends React.Component {
  constructor(e){
    super(e);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    const{dispatch} = this.props;
    const{id, style} = this.toggleButton;
    const backgroundStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");

    dispatch(CurrView(e.target.id, backgroundStyle));
  }

  render() {
    const{dispatch} = this.props;
    return (
        <div>
          <button styleName="code_toggle--css" key ="css" id ="css" ref={(e) => { this.toggleButton = e}} onClick={this.handleClick}>CSS</button>
          <button styleName="code_toggle--sass" key ="sass" id ="sass" onClick={this.handleClick}>SASS</button>
          <button styleName="code_toggle--less" key ="less" id ="less" onClick={this.handleClick}>LESS</button>
          <button styleName="code_toggle--js" key ="js" id ="js" onClick={this.handleClick}>JS</button>
        </div>
    );
  }
}

export default CSSModules(CodeBoxNav,styles);
