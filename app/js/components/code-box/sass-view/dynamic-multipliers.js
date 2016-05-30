import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../../scss/_code-box.scss";

class DynamicMultipliers extends React.Component {
  constructor(){
    super();
  }
  render(){
    const{columnCount, rowCount} = this.props;
    let xVar           = [];
    let yVar           = [];
    //x value array
    for(let x = 0; x < columnCount; x++){
        xVar.push(
          `$X${x}: $num*${x}; `
        )
    }
    //y value array
    for(let y = 0; y < rowCount; y++){
      yVar.push(
        `$O${y}: $num*${y}; `
      )
    }

    return(
      <div>
        {xVar}<br /><br />
        {yVar}<br /><br />
      </div>
    )
  }
}

export default DynamicMultipliers;
