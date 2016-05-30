import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../../scss/_code-box.scss";

class BoxShadowContent extends React.Component {
  constructor(){
    super();
  }
  render(){
    const{pixelCount, xPos, yPos, rectColor} = this.props;
    let colorStore     = _.uniq(rectColor);
    let xPosSorted     = _.sortBy(xPos);
    let yPosSorted     = _.sortBy(yPos);
    let colorVar       = [];
    let sassColorStore = [];
    let boxShadowVar   = [];

    colorStore.map(function(value,idx){
      colorVar.push(
        `$color-${idx}: ${value}; `
      )
    });

    rectColor.map(function(value,idx){
       sassColorStore.push(
         `$color-${colorStore.indexOf(value)}`
       )
    });

    xPos.map(function(value, idx){
      boxShadowVar.push(
        `$X${xPosSorted[idx] / pixelCount} $O${yPosSorted[idx] / pixelCount} ${sassColorStore[idx]}, `
      )
    });

    return(
      <div>
        box-shadow: {boxShadowVar}
      </div>
    )
  }
}

export default BoxShadowContent;
