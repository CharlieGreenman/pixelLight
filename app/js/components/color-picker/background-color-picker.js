import React from "react";
import CSSX from 'react-cssx';
import { connect} from "react-redux";
import {BackgroundColor, BackgroundColorRGB} from "../../actions/control-panel";
import ColorPickerColumn from "../../components/color-picker/color-picker-column";

import{hexToRgb, rgbToHex} from "../../utils/colorUtils.js";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/visual-settings-control-panel.scss";

class BackgroundColorPicker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      backgroundHex: "#191919",
      backgroundRed: "25",
      backgroundGreen: "25",
      backgroundBlue: "25"
    }
    this.handleBackgroundColorChange    = this.handleBackgroundColorChange.bind(this);
    this.handleBackgroundRGBColorChange = this.handleBackgroundRGBColorChange.bind(this);
    this.updateGridBackground           = this.updateGridBackground.bind(this);
    this.styleColorBar                  = this.styleColorBar.bind(this);
  }

  handleBackgroundRGBColorChange(name, e){
    const {dispatch} = this.props;
    //http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var change = {};
    change[name] = e.target.value;
    //http://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
    this.setState(change, function(){
        dispatch(BackgroundColorRGB(this.state.backgroundRed, this.state.backgroundGreen, this.state.backgroundBlue));
        dispatch(BackgroundColor(rgbToHex(parseFloat(this.state.backgroundRed), parseFloat(this.state.backgroundGreen), parseFloat(this.state.backgroundBlue))));
    });
    this.updateGridBackground();
  }

  handleBackgroundColorChange(e){
    const {dispatch} = this.props;
    this.setState({backgroundHex: e.target.value}, function(){
      dispatch(BackgroundColor(this.state.backgroundHex));
      dispatch(BackgroundColorRGB(hexToRgb(this.state.backgroundHex).r, hexToRgb(this.state.backgroundHex).g, hexToRgb(this.state.backgroundHex).b));
    });
    this.updateGridBackground();

  }

  updateGridBackground() {
    //need to come up with a more sophisticated way of targeting canvas element
    let ctx = document.getElementById("canvasGrid").getContext("2d");
    const{columnCount, rowCount, pixelCount, backgroundRed, backgroundGreen, backgroundBlue, backgroundHex} = this.props;
      for(let x = 0; x < columnCount; x++) {
          for(let y = 0; y < rowCount; y++) {
              ctx.strokeStyle = `${backgroundRed + 44}. ${backgroundGreen + 44}. ${backgroundBlue + 44}`;
              ctx.strokeRect(x * pixelCount, y * pixelCount, pixelCount, pixelCount);
              ctx.fillStyle = backgroundHex;
              ctx.fillRect(x * pixelCount + 1, y * pixelCount + 1, pixelCount - 2, pixelCount - 2);
          }
      }
      // for(let x = 0; x < elem.s.storeValues.length; x++){
      //     ctx.fillStyle = elem.s.storeValues[x][2];
      //     ctx.fillRect(parseFloat(elem.s.storeValues[x][0]) + 1, parseFloat(elem.s.storeValues[x][1]) + 1, elem.s.pixSize - 2, elem.s.pixSize - 2);
      // }
  }

  render() {
      return (
        <div>
          <div styleName="color-picker">
            <h3 styleName="header">Background Color</h3>
            <label sstyleName='header' id="hex_label">Hex</label>
            <input styleName='color-input' type="text" defaultValue={this.state.backgroundHex}  onChange={this.handleBackgroundColorChange} value={this.props.backgroundHex} maxLength={7} />
            <CSSX styles={ this.styleColorBar(this.state.backgroundHex) }>
            <div className="color_bar" />
            </CSSX>
            <div id="rgb-background" styleName='row'>
              <ColorPickerColumn letter = "R" inputClass = "backgroundRgb" id = "background-red" onChange={this.handleBackgroundRGBColorChange.bind(this, "backgroundRed")} value={this.props.backgroundRed} />
              <ColorPickerColumn letter = "G" inputClass = "backgroundRgb" id = "background-green" onChange={this.handleBackgroundRGBColorChange.bind(this, "backgroundGreen")} value={this.props.backgroundGreen} />
              <ColorPickerColumn letter = "B" inputClass = "backgroundRgb" id = "background-blue" onChange={this.handleBackgroundRGBColorChange.bind(this, "backgroundBlue")} value={this.props.backgroundBlue}/>
            </div>
          </div>
        </div>

        )
      }
  styleColorBar(color) {
   return (
     <style>
       .color_bar {
         height: 6px;
         background: {{ color }};
       }
     </style>
   )
 }
}

export default connect()(CSSModules(BackgroundColorPicker, styles));
