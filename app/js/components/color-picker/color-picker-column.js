import React from "react";
import { connect, Provider } from "react-redux";

import classNames from "classnames";

class ColorPickerColumn extends React.Component{
  render(){
    return(
      <div className="color-picker__row__column">
          <label className="color-picker__row__column__label" >{this.props.letter}</label>
          <input className={classNames("color-picker__row__column__input", this.props.inputClass)} dispatch={this.props.dispatch} id={this.props.id} onChange={this.props.onChange} type="text" maxLength={3} defaultValue={25} />
      </div>
    )
  }
}

export default ColorPickerColumn;
