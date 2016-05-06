import React from "react";
import ReactDOM from "react-dom";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";



class CodeBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div styleName="code_box">
          <div className="row">
            <div styleName="css_toggle"><span>CSS</span></div>
            <div styleName="sass_toggle"><span>SASS</span></div>
            <div styleName="less_toggle"><span>LESS</span></div>
            <div styleName="js_toggle"><span>JS</span></div>
            <div styleName="code_box_border" />
          </div>
          <p id="inner_code_box">box-shadow:</p>
      </div>
    );
  }
}

export default CSSModules(CodeBox,styles);
