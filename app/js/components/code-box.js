import React from "react";
import ReactDOM from "react-dom";

class CodeBox extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div id="code_box" className="css_box">
          <div className="row">
            <div id="css_toggle" className="column large-6 code_toggle"><span>CSS</span></div>
            <div id="sass_toggle" className="column large-6 code_toggle"><span>SASS</span></div>
            <div id="less_toggle" className="column large-6 code_toggle"><span>LESS</span></div>
            <div id="js_toggle" className="column large-6 code_toggle"><span>JS</span></div>
            <div id="code_box_border" className="column left large-offset-1 large-10" />
          </div>
          <p id="inner_code_box">box-shadow:</p>
      </div>
    );
  }
}

export default CodeBox;
