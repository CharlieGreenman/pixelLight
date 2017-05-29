import React, {Component, PropTypes} from "react";

import CSSX from 'react-cssx';
import CSSModules from 'react-css-modules';
import styles from "../../../scss/_code-box.scss";

class LineSeparator  extends Component {
  render() {
    const{codeBoxColor} = this.props;
    return(
      <CSSX styles={ this.styleCodeBoxBorder(codeBoxColor) }>
        <hr className = "line_separator" styleName = "line_separator" />
      </CSSX>
    );
  }
  
}

export default CSSModules(LineSeparator, styles);
