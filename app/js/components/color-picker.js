import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return (
          <div className="color-picker" id="background-color-picker">
            <h3 className = "color-picker__header">Background Color</h3>
            <label className = "color-picker__label" id="hex_label">Hex</label>
            <input className = "color-picker__color" id="background-hex-color" type="text" defaultValue="#191919" maxLength={7} className="large-12" />

            <div id="background_color_bar" className="color-picker__color-bar" />
              <div id="rgb-background" className="color-picker__row">
                <div className="color-picker__row__column">
                    <label className="color-picker__row__column__label" >R </label>
                    <input className="color-picker__row__column__input backgroundRgb" id="background-red" type="text" maxLength={3} defaultValue={25} />
                </div>
                <div className="color-picker__row__column">
                  <label className="color-picker__row__column__label" >G</label>
                  <input className="color-picker__row__column__input backgroundRgb" id="background-green" type="text" maxLength={3} defaultValue={25} />
                </div>
                <div className="color-picker__row__column">
                  <label className="color-picker__row__column__label" >B</label>
                  <input className="color-picker__row__column__input backgroundRgb" id="background-blue" type="text" maxLength={3} defaultValue={25} />
                </div>
              </div>

          <div id="color-picker" className="column large-12">
            <h3 className = "color-picker__header">Pixel Color</h3>
            <div className="large-12">
              <label id="hex_label">Hex
                <input id="pix-hex-color" type="text" defaultValue="#000" maxLength={7} className="large-12" />
              </label>
            </div>
            <div id="color_bar" className="large-12" />
            <div id="rgb" className="color-picker__row">
              <div className="color-picker__row__column">
                  <label className="color-picker__row__column__label" >R </label>
                  <input className="color-picker__row__column__input backgroundRgb" id="background-red" type="text" maxLength={3} defaultValue={25} />
              </div>
              <div className="color-picker__row__column">
                <label className="color-picker__row__column__label" >G</label>
                <input className="color-picker__row__column__input backgroundRgb" id="background-green" type="text" maxLength={3} defaultValue={25} />
              </div>
              <div className="color-picker__row__column">
                <label className="color-picker__row__column__label" >B</label>
                <input className="color-picker__row__column__input backgroundRgb" id="background-blue" type="text" maxLength={3} defaultValue={25} />
              </div>
              </div>
          </div>
        </div>
        )
      }
}

export default connect()(ColorPicker);
