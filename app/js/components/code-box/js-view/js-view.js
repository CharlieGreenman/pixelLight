import React, {Component, PropTypes} from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../../scss/_code-box.scss";

import _ from "lodash";

import StaticJSCode  from "./static-js-code";
import JSColorMap    from "./js-color-map";
import JSArrMap      from "./js-arr-map";

class JSView extends React.Component {
  constructor(){
    super();
  }
  render () {
    const{dispatch, jsView, pixelCount, columnCount, rowCount, xPos, yPos, rectColor} = this.props;
    if(jsView){
      return(
        <div>let canvas, ctx, tileSize = {pixelCount}, map = [<br />
          <JSArrMap {...this.props} />
          <StaticJSCode />
          <JSColorMap {...this.props} />
          </div>
      );
    }
    return(
      <div></div>
    );
  }
}

export default JSView;
