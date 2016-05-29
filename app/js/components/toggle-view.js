import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import CSSModules from 'react-css-modules';
import styles from "../../scss/visual-settings-control-panel.scss";

import {InitViewMode, InitDrawMode, ResetApp} from '../actions/toggle-view.js';

class ToggleView extends React.Component {
  constructor(props){
    super(props);
    this.viewMode = this.viewMode.bind(this);
    this.drawMode = this.drawMode.bind(this);
    this.reset    = this.reset.bind(this);
  }
  viewMode() {
    const{dispatch} = this.props;
    dispatch(InitViewMode());
  }
  drawMode(){
    const{dispatch} = this.props;
    dispatch(InitDrawMode());
  }
  reset(){
    const{dispatch} = this.props;
    dispatch(ResetApp());
  }

  render() {
      return (
          <div id="control_view" className="column">
            <div styleName="view-button" onClick={this.viewMode} >View Mode</div>
            <div styleName="draw-button" onClick={this.drawMode}>Draw Mode</div>
            <div styleName="reset-button" onClick={this.reset}>Reset</div>
            <div styleName="color-button-styling" id="control_panel">
              <span styleName="letter">G</span><span styleName="desc_text">Toggle View</span>
              {/*#github-button*/}
              {/*    a.github-button(href='https://github.com/charlieGreenman/codeIllustrator', data-icon='octicon-star', data-style='mega', data-count-href='/charlieGreenman/codeIllustrator/stargazers', data-count-api='/repos/charlieGreenman/codeIllustrator#stargazers_count', data-count-aria-label='# stargazers on GitHub', aria-label='Star charlieGreenman/codeIllustrator on GitHub') Star*/}
            </div>
          </div>
      )
  }
}

export default connect()(CSSModules(ToggleView, styles));
