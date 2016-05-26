import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

import _ from "lodash";

class CSSView extends React.Component {
  constructor(){
    super();
  }
  render() {
    const{dispatch, cssView, pixelCount, xPos, yPos, rectColor} = this.props;
    if(cssView){
      let cssCode = []
      xPos.map(function(value, idx){
        cssCode.push(
          `${xPos[idx]}px ${yPos[idx]}px ${rectColor[idx]}, `
        )
      });
      return(
        <p id="inner_code_box">
          box-shadow:<br/>


        {_.sortBy(cssCode)}</p>
      );
    }
    return(
      <div></div>
    )

  }
}

export default CSSView;
