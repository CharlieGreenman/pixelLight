import React from "react";
import { connect, Provider } from "react-redux";

import classNames from "classnames";
import CSSModules from 'react-css-modules';
import styles from "../../../scss/components/visual-settings-control-panel.scss";


class ColorPickerColumn extends React.Component{
  render(){
    return(
      <div>
          <label styleName='label'>{this.props.letter}</label>
          <input styleName='input' dispatch={this.props.dispatch} id={this.props.id} onChange={this.props.onChange} type="text" maxLength={3} defaultValue={25} />
      </div>
    )
  }
}

export default CSSModules(ColorPickerColumn,styles);
