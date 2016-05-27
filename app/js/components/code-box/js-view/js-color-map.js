import React, {Component, PropTypes} from "react";

import _ from "lodash";

import{hexToRgb} from "../../../utils/colorUtils.js";

class JSColorMap extends React.Component {
  constructor(){
    super();
  }
  render(){
    const{rectColor} = this.props;
    let colorStore     = _.uniq(rectColor);
    let RGBColorStore  = [];

    colorStore.map(function(value, idx){
      RGBColorStore.push(
          `new arrMap.Color(${hexToRgb(value).r}, ${hexToRgb(value).g}, ${hexToRgb(value).b})`
      )
    });

    return(
      <pre>
      {`let colors = [
      ${RGBColorStore}
      ];
      arrMap.init();
      `}
      </pre>
    );
}
}

export default JSColorMap;
