import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

import {CurrView, cssView, lessView, sassView, jsView} from "../../actions/code-box";

class CodeBoxNav extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      css: true,
      less: false,
      sass: false,
      js: false
    }
  }
  handleClick(e){
    const{dispatch} = this.props;
    dispatch(CurrView(e.target.id));
  }

  render() {
    const{dispatch} = this.props;
    return (
        <div className="row">
          <div styleName="css_toggle" id ="css" onClick={this.handleClick}><span>CSS</span></div>
          <div styleName="sass_toggle" id ="sass" onClick={this.handleClick}><span>SASS</span></div>
          <div styleName="less_toggle" id ="less" onClick={this.handleClick}><span>LESS</span></div>
          <div styleName="js_toggle" id ="js" onClick={this.handleClick}><span>JS</span></div>
        </div>
    );
  }
}

export default CSSModules(CodeBoxNav,styles);
