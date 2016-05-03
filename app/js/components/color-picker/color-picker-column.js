import React from "react";
import { connect, Provider } from "react-redux";

import classNames from "classnames";
import CSSModules from 'react-css-modules';
import styles from "../../../scss/visual-settings-control-panel.scss";


class ColorPickerColumn extends React.Component{
  render(){
    return(
      <div>
          <label styleName={this.props.styleName}>{this.props.letter}</label>
          <input styleName={this.props.styleName} dispatch={this.props.dispatch} id={this.props.id} onChange={this.props.onChange} type="text" maxLength={3} defaultValue={25} />
      </div>
    )
  }
}

export default ColorPickerColumn;
