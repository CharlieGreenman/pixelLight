import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

class CSSView extends React.Component {
  constructor(){
    super();
  }
  render() {
    const{dispatch, cssView} = this.props;
    if(cssView){
      return(
        <p id="inner_code_box">{cssView}</p>
      );
    }
    return(
      <div></div>
    )

  }
}

export default CSSView;
