import React from "react";
import ReactDOM from "react-dom";

class ControlPanel extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
        <div className="color-picker" id="background-color-picker">
          <h3 className = "color-picker__header">Background Color</h3>
          <label className = "color-picker__label" id="hex_label">Hex</label>
          <input className = "color-picker__color" id="background-hex-color" type="text" defaultValue="#191919" maxLength={7} className="large-12" />

          <div id="background_color_bar" className="large-12" />
          <div id="rgb-background" className="large-12">
            <div className="large-4 column no-padding">
              <label>R
                <input id="background-red" type="text" maxLength={3} defaultValue={25} className="backgroundRgb" />
              </label>
            </div>
            <div className="large-4 column no-padding">
              <label>G
                <input id="background-green" type="text" maxLength={3} defaultValue={25} className="backgroundRgb" />
              </label>
            </div>
            <div className="large-4 column no-padding">
              <label>B
                <input id="background-blue" type="text" maxLength={3} defaultValue={25} className="backgroundRgb" />
              </label>
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
          <div id="rgb" className="large-12">
            <div className="large-4 column no-padding">
              <label>R
                <input id="pix-red" type="text" maxLength={3} defaultValue={0} className="rgb" />
              </label>
            </div>
            <div className="large-4 column no-padding">
              <label>G
                <input id="pix-green" type="text" maxLength={3} defaultValue={0} className="rgb" />
              </label>
            </div>
            <div className="large-4 column no-padding">
              <label>B
                <input id="pix-blue" type="text" maxLength={3} defaultValue={0} className="rgb" />
              </label>
            </div>
          </div>
        </div>
        <div id="control_view" className="column">
          <div id="view-button" className="large-12 color-button-styling">View Mode</div>
          <div id="draw-button" className="large-12 color-button-styling">Draw Mode</div>
          <div id="reset-button" className="large-12 color-button-styling">Reset</div>
          <div id="control_panel" className="color-button-styling"><span className="letter">G</span><span className="desc_text">Toggle View</span>
            {/*#github-button*/}
            {/*    a.github-button(href='https://github.com/charlieGreenman/codeIllustrator', data-icon='octicon-star', data-style='mega', data-count-href='/charlieGreenman/codeIllustrator/stargazers', data-count-api='/repos/charlieGreenman/codeIllustrator#stargazers_count', data-count-aria-label='# stargazers on GitHub', aria-label='Star charlieGreenman/codeIllustrator on GitHub') Star*/}
          </div>
        </div>
      </div>
    )
  }
}

export default ControlPanel;
