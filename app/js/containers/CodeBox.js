import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import CSSModules from 'react-css-modules';
import styles from "../../scss/_code-box.scss";

import CodeBoxNav from "../components/code-box/code-box";
import CSSView    from "../components/code-box/css-view";
import SASSView    from "../components/code-box/sass-view";
import LESSView    from "../components/code-box/less-view";
import JSView    from "../components/code-box/js-view/js-view";

class CodeBox extends Component {
  render() {
    return(
      <div styleName='code_box_container'>
        <div styleName="code_box">
          <CodeBoxNav {...this.props}/>
          <CSSView {...this.props} />
          <SASSView {...this.props} />
          <LESSView {...this.props} />
          <JSView {...this.props} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {colorPicker, settings, codeBox, grid} = state;
  return{
    colorPicker,
    rowCount: settings.row.count,
    columnCount: settings.column.count,
    pixelCount: parseFloat(settings.pixel.count),
    cssView: codeBox.css,
    lessView: codeBox.less,
    sassView: codeBox.sass,
    jsView: codeBox.js,
    xPos: grid.xPos,
    yPos: grid.yPos,
    rectColor: grid.rectColor
  }
}


export default connect(mapStateToProps)(CSSModules(CodeBox,styles));
