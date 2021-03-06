import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

import CSSModules from 'react-css-modules';
import styles from "../../scss/visual-settings-control-panel.scss";

import {InitViewMode, InitDrawMode, ToggleGridView, ResetApp} from '../actions/toggle-view.js';

class ToggleView extends React.Component {
  constructor(props){
    super(props);
    this.viewMode = this.viewMode.bind(this);
    this.drawMode = this.drawMode.bind(this);
    this.reset    = this.reset.bind(this);
    this.toggle    = this.toggle.bind(this);
    this.onKeyDown    = this.onKeyDown.bind(this);
    this.state = {
      draw: true,
      view: false
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }
  onKeyDown(e){
    if(e.keyCode === 71){
      this.toggle();
    }
  }
  viewMode() {
    const{dispatch} = this.props;
    this.setState({
      view: true,
      draw: false
    },function(){
        dispatch(InitViewMode(this.state.view, this.state.draw));
    });

  }
  drawMode(){
    const{dispatch} = this.props;
    this.setState({
      draw: true,
      view: false
    },function(){
        dispatch(InitDrawMode(this.state.draw, this.state.view));
    });
  }
  toggle(){
    const{dispatch} = this.props;
    this.setState({
      draw: !this.state.draw,
      view: !this.state.view
    },function(){
        dispatch(InitDrawMode(this.state.draw, this.state.view));
    });
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
            <div styleName="color-button-styling" id="control_panel" onClick={this.toggle}>
              <span styleName="letter">G</span><span styleName="desc_text">Toggle View</span>
              {/*#github-button*/}
              {/*    a.github-button(href='https://github.com/charlieGreenman/codeIllustrator', data-icon='octicon-star', data-style='mega', data-count-href='/charlieGreenman/codeIllustrator/stargazers', data-count-api='/repos/charlieGreenman/codeIllustrator#stargazers_count', data-count-aria-label='# stargazers on GitHub', aria-label='Star charlieGreenman/codeIllustrator on GitHub') Star*/}
            </div>
          </div>
      )
  }
}

export default connect()(CSSModules(ToggleView, styles));
