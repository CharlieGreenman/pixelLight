import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

import _ from "lodash";

import {compare} from '../../utils/code-box-utils';

class CSSView extends React.Component {
  constructor(){
    super();
  }
  render() {
    const{dispatch, cssView, pixelCount, rectData} = this.props;
    // let sortedRectData = rectData.sort(compare);
    let sortedRectData = rectData.slice(0);
    // console.log(`sortedRectData: ${sortedRectData}`);
    sortedRectData = sortedRectData.sort(compare);
    let cssCode = [];

    if(cssView){

      rectData.map(function(value, idx, arr){
        if(idx === arr.length - 1){
          cssCode.push(
            `${sortedRectData[idx][0]}px ${sortedRectData[idx][1]}px ${sortedRectData[idx][2]};`
          )
        }
        else{
          cssCode.push(
            `${sortedRectData[idx][0]}px ${sortedRectData[idx][1]}px ${sortedRectData[idx][2]}, `
          )
        }
      });

      return(
        <p id="inner_code_box">
          box-shadow:<br/>
        {cssCode}</p>
      );
    }
    return(
      <div></div>
    );

  }
}

export default CSSView;
