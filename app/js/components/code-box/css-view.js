import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

class CSSView extends React.Component {
  constructor(){
    super();
  }
  render() {
    const{dispatch, view} = this.props;

      return(
        <p id="inner_code_box">{view}</p>
      );
  }
}

export default CSSView;
