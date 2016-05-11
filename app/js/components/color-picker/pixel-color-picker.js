import React from "react";
import CSSX from 'react-cssx';
import { connect} from "react-redux";
import { PixelColor, PixelColorRGB} from "../../actions/control-panel";
import ColorPickerColumn from "../../components/color-picker/color-picker-column";

import{hexToRgb, rgbToHex} from "../../utils/colorUtils.js";

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
        dispatch(PixelColor(rgbToHex(parseFloat(this.state.red), parseFloat(this.state.green), parseFloat(this.state.blue))));
    });
  }
  handlePixelColorChange(e){
    const {dispatch} = this.props;
    this.setState({pixelHex: e.target.value}, function(){
        dispatch(PixelColor(this.state.pixelHex));
        dispatch(PixelColorRGB(hexToRgb(this.state.pixelHex).r, hexToRgb(this.state.pixelHex).g, hexToRgb(this.state.pixelHex).b));
        styleColorBar(this.state.pixelHex);
    });
  }

  render() {
     const{pixelRed, pixelGreen, pixelBlue} = this.props;
      return (
        <div>
          <div styleName='color-picker'>
            <h3 styleName='header'>Pixel Color</h3>
            <label styleName='header' id="hex_label">Hex</label>
            <input styleName='color-input' id="pix-hex-color" type="text" defaultValue={this.state.pixelHex} onChange={this.handlePixelColorChange} value={this.props.pixelHex} maxLength={7} />
            <CSSX styles={ this.styleColorBar(this.state.pixelHex) }>
            <div id="color_bar" />
            </CSSX>
            <div styleName='row' id="rgb" >
              <ColorPickerColumn letter = "R" id = "background-red" onChange={this.handlePixelRGBColorChange.bind(this, "red")} value={this.props.pixelRed} />
              <ColorPickerColumn letter = "G" id = "background-green" onChange={this.handlePixelRGBColorChange.bind(this, "green")} value={this.props.pixelGreen} />
              <ColorPickerColumn letter = "B" id = "background-blue" onChange={this.handlePixelRGBColorChange.bind(this, "blue")} value={this.props.pixelBlue} />
            </div>
          </div>
        </div>
        )
      }
  styleColorBar(color) {
   return (
     <style>
       #color_bar {
         height: 6px;
         background: {{ color }};
       }
     </style>
   )
 }
}

export default connect()(CSSModules(PixelColorPicker, styles));
