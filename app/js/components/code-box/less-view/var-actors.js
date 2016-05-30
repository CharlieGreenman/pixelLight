import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../../scss/_code-box.scss";

class VarActors extends React.Component {
  constructor(){
    super();
  }
  render(){
    const{rectColor, pixelCount} = this.props;
    let colorVar       = [];
    let colorStore     = _.uniq(rectColor);
    colorStore.map(function(value,idx){
      colorVar.push(
        `@color-${idx}: @{value}; `
      )
    });
    return(
      <div>
        $num: `${pixelCount}`;<br />
        {colorVar}<br /><br />
      </div>
    )
  }
}

export default VarActors;
