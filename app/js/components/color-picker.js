import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import classNames from "classnames";
import {BackgroundColor, BackgroundColorRGB, PixelColor} from "../actions/control-panel";

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

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundHex: "#191919",
      pixelHex: "#000000"
    }
    this.handleBackgroundColorChange    = this.handleBackgroundColorChange.bind(this);
    this.handleBackgroundRGBColorChange = this.handleBackgroundRGBColorChange.bind(this);
    this.handlePixelColorChange         = this.handlePixelColorChange.bind(this);
  }

  handleBackgroundColorChange(e){
    const {dispatch} = this.props;
    this.setState({backgroundHex: e.target.value});
    dispatch(BackgroundColor(this.state.backgroundHex));
  }
  handleBackgroundRGBColorChange(name, e){
    const {dispatch} = this.props;
    //http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var change = {};
    change[name] = e.target.value;
    console.log("change: " + change);
    //http://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
    this.setState(change, function(){
        dispatch(BackgroundColorRGB(this.state.red, this.state.green, this.state.blue));
    });
  }

  handlePixelColorChange(e){
    const {dispatch} = this.props;
    this.setState({pixelHex: e.target.value}, function(){
        dispatch(PixelColor(this.state.pixelHex));
    });
  }

  render() {
      return (
        <div>
          <div className="color-picker" id="background-color-picker">
            <h3 className = "color-picker__header">Background Color</h3>
            <label className = "color-picker__label" id="hex_label">Hex</label>
            <input className = "color-picker__color" id="background-hex-color" type="text" defaultValue={this.state.backgroundHex}  onChange={this.handleBackgroundColorChange} maxLength={7} className="large-12" />
            <div id="background_color_bar" className="color-picker__color-bar" />
            <div id="rgb-background" className="color-picker__row">
              <ColorPickerColumn letter = "R" state={this.state.red} inputClass = "backgroundRgb" id = "background-red" onChange={this.handleBackgroundRGBColorChange.bind(this, "red")}/>
              <ColorPickerColumn letter = "G" inputClass = "backgroundRgb" id = "background-green" onChange={this.handleBackgroundRGBColorChange.bind(this, "green")} />
              <ColorPickerColumn letter = "B" inputClass = "backgroundRgb" id = "background-blue" onChange={this.handleBackgroundRGBColorChange.bind(this, "blue")} />
            </div>
          </div>

          <div id="color-picker" className="column large-12">
            <h3 className = "color-picker__header">Pixel Color</h3>
            <label id="hex_label" className = "color-picker__header" >Hex</label>
            <input id="pix-hex-color" type="text" defaultValue={this.state.pixelHex} onChange={this.handlePixelColorChange} maxLength={7} className = "color-picker__color" />
            <div id="color_bar" className="large-12" />
            <div id="rgb" className="color-picker__row">
              <ColorPickerColumn letter = "R" inputClass = "backgroundRgb" id = "background-red" />
              <ColorPickerColumn letter = "G" inputClass = "backgroundRgb" id = "background-green" />
              <ColorPickerColumn letter = "B" inputClass = "backgroundRgb" id = "background-blue" />
            </div>
          </div>
        </div>
        )
      }
}

export default connect()(ColorPicker);
