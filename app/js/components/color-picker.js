import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import classNames from "classnames";

class ColorPickerColumn extends React.Component{
  render(){
    return(
      <div className="color-picker__row__column">
          <label className="color-picker__row__column__label" >{this.props.letter}</label>
          <input className={classNames("color-picker__row__column__input", this.props.inputClass)} id={this.props.inputId} type="text" maxLength={3} defaultValue={25} />
      </div>
    )
  }
}

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundHex: "#191919",
      pixelHex: "#000000",
    }
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
    this.handlePixelColorChange      = this.handlePixelColorChange.bind(this);
  }

  handleBackgroundColorChange(e){
    this.setState({backgroundHex: e.target.value});
  }
  handlePixelColorChange(e){
    this.setState({pixelHex: e.target.value});
  }

  render() {
    const {dispath} = this.props;
      return (
        <div>
          <div className="color-picker" id="background-color-picker">
            <h3 className = "color-picker__header">Background Color</h3>
            <label className = "color-picker__label" id="hex_label">Hex</label>
            <input className = "color-picker__color" id="background-hex-color" type="text" defaultValue={this.state.backgroundHex}  onChange={this.handleBackgroundColorChange} maxLength={7} className="large-12" />
            <div id="background_color_bar" className="color-picker__color-bar" />
            <div id="rgb-background" className="color-picker__row">
              <ColorPickerColumn letter = "R" inputClass = "backgroundRgb" inputId = "background-red" />
              <ColorPickerColumn letter = "G" inputClass = "backgroundRgb" inputId = "background-green" />
              <ColorPickerColumn letter = "B" inputClass = "backgroundRgb" inputId = "background-blue" />
            </div>
          </div>

          <div id="color-picker" className="column large-12">
            <h3 className = "color-picker__header">Pixel Color</h3>
            <label id="hex_label" className = "color-picker__header" >Hex</label>
            <input id="pix-hex-color" type="text" defaultValue={this.state.pixelHex} onChange={this.handlePixelColorChange} maxLength={7} className = "color-picker__color" />
            <div id="color_bar" className="large-12" />
            <div id="rgb" className="color-picker__row">
              <ColorPickerColumn letter = "R" inputClass = "backgroundRgb" inputId = "background-red" />
              <ColorPickerColumn letter = "G" inputClass = "backgroundRgb" inputId = "background-green" />
              <ColorPickerColumn letter = "B" inputClass = "backgroundRgb" inputId = "background-blue" />
            </div>
          </div>
        </div>  
        )
      }
}

export default connect()(ColorPicker);
