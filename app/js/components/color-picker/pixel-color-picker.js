import React from "react";
import { connect} from "react-redux";
import { PixelColor, PixelColorRGB} from "../../actions/control-panel";
import ColorPickerColumn from "../../components/color-picker/color-picker-column";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/visual-settings-control-panel.scss";


class PixelColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pixelHex: "#000000"
    }
    this.handlePixelColorChange         = this.handlePixelColorChange.bind(this);
    this.handlePixelRGBColorChange      = this.handlePixelRGBColorChange.bind(this);
  }

  handlePixelRGBColorChange(name, e){
    const {dispatch} = this.props;
    //http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var pixelChange = {};
    pixelChange[name] = e.target.value;
    //http://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
    this.setState(pixelChange, function(){
        dispatch(PixelColorRGB(this.state.red, this.state.green, this.state.blue));
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
          <div styleName='color-picker'>
            <h3 styleName='header'>Pixel Color</h3>
            <label styleName='header' id="hex_label">Hex</label>
            <input id="pix-hex-color" type="text" defaultValue={this.state.pixelHex} onChange={this.handlePixelColorChange} maxLength={7} className = "color-picker__color" />
            <div id="color_bar" />
            <div styleName='row' id="rgb" >
              <ColorPickerColumn letter = "R" styleName="label-red" id = "background-red" onChange={this.handlePixelRGBColorChange.bind(this, "red")}/>
              <ColorPickerColumn letter = "G" styleName="label-green" id = "background-green" onChange={this.handlePixelRGBColorChange.bind(this, "blue")}/>
              <ColorPickerColumn letter = "B" styleName="label-blue" id = "background-blue" onChange={this.handlePixelRGBColorChange.bind(this, "green")}/>
            </div>
          </div>
        </div>
        )
      }
}

export default connect()(CSSModules(PixelColorPicker, styles));
