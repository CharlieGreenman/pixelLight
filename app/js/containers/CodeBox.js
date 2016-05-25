import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import CSSModules from 'react-css-modules';
import styles from "../../scss/_code-box.scss";

import CodeBoxNav from "../components/code-box/code-box";
import CSSView    from "../components/code-box/css-view";

class CodeBox extends Component {
  render() {
    return(
      <div styleName='code_box_container'>
        <div styleName="code_box">
          <CodeBoxNav {...this.props}/>
          <CSSView {...this.props} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {colorPicker, settings, codeBox} = state;
  return{
    colorPicker,
    rowCount: settings.row.count,
    columnCount: settings.column.count,
    pixelCount: parseFloat(settings.pixel.count),
    view: codeBox.view
  }
}


export default connect(mapStateToProps)(CSSModules(CodeBox,styles));
