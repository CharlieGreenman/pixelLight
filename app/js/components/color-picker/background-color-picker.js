import React from "react";
import { connect} from "react-redux";
import {BackgroundColor, BackgroundColorRGB} from "../../actions/control-panel";
import ColorPickerColumn from "../../components/color-picker/color-picker-column";

class BackgroundColorPicker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundHex: "#191919"
    }
    this.handleBackgroundColorChange    = this.handleBackgroundColorChange.bind(this);
    this.handleBackgroundRGBColorChange = this.handleBackgroundRGBColorChange.bind(this);
  }

  handleBackgroundColorChange(e){
    const {dispatch} = this.props;
    this.setState({backgroundHex: e.target.value}, function(){
      dispatch(BackgroundColor(this.state.backgroundHex));
    });

  }
  handleBackgroundRGBColorChange(name, e){
    const {dispatch} = this.props;
    //http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var change = {};
    change[name] = e.target.value;
    //http://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
    this.setState(change, function(){
        dispatch(BackgroundColorRGB(this.state.backgroundRed, this.state.backgroundGreen, this.state.backgroundBlue));
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
              <ColorPickerColumn letter = "R" inputClass = "backgroundRgb" id = "background-red" onChange={this.handleBackgroundRGBColorChange.bind(this, "backgroundRed")}/>
              <ColorPickerColumn letter = "G" inputClass = "backgroundRgb" id = "background-green" onChange={this.handleBackgroundRGBColorChange.bind(this, "backgroundGreen")} />
              <ColorPickerColumn letter = "B" inputClass = "backgroundRgb" id = "background-blue" onChange={this.handleBackgroundRGBColorChange.bind(this, "backgroundBlue")} />
            </div>
          </div>
        </div>
        )
      }
}

export default connect()(BackgroundColorPicker);
