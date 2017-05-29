import React, {Component, PropTypes} from "react";

import {connect} from "react-redux";

import CSSX from 'react-cssx';
import CSSModules from 'react-css-modules';
import styles from "../../scss/_code-box.scss";

import CodeBoxNav from "../components/code-box/code-box";
import LineSeparator from "../components/code-box/line-separator";
import CSSView    from "../components/code-box/css-view";
import SASSView    from "../components/code-box/sass-view/sass-view";
import LESSView    from "../components/code-box/less-view/less-view";
import JSView    from "../components/code-box/js-view/js-view";

class CodeBox extends Component {
  render() {
    const{cssView, lessView, sassView, jsView, codeBoxColor} = this.props;
    return(
      <div styleName='code_box_container'>
        <CSSX styles={ this.styleCodeBoxBorder(codeBoxColor) }>
          <div className = "code-box-border" styleName="code_box">
            <CodeBoxNav {...this.props}/>
            
            <CSSView {...this.props} />
            <SASSView {...this.props} />
            <LESSView {...this.props} />
            <JSView {...this.props} />
          </div>
        </CSSX>
      </div>
    )
  }
  styleCodeBoxBorder(color) {
   return (
     <style>
       .code-box-border {
         box-shadow: 0 0 0 10px {{color}} inset;
       }
     </style>
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
    codeBoxColor: codeBox.color,
    xPos: grid.xPos,
    yPos: grid.yPos,
    rectColor: grid.rectColor,
    rectData: grid.rectData
  }
}


export default connect(mapStateToProps)(CSSModules(CodeBox,styles));
