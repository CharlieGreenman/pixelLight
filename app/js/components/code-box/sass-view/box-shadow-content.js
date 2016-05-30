import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../../scss/_code-box.scss";

import _ from "lodash";

import {compare} from '../../../utils/code-box-utils';

class BoxShadowContent extends React.Component {
  constructor(){
    super();
  }
  render(){
    const{pixelCount, xPos, yPos, rectColor, rectData} = this.props;
    let colorStore     = _.uniq(rectColor);
    let xPosSorted     = _.sortBy(xPos);
    let yPosSorted     = _.sortBy(yPos);
    let sortedRectData = rectData.slice(0);
    sortedRectData = sortedRectData.sort(compare);
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

    sortedRectData.map(function(value, idx){
      boxShadowVar.push(
        `$X${sortedRectData[idx][0] / pixelCount} $O${sortedRectData[idx][1] / pixelCount} ${sassColorStore[idx]}, `
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
