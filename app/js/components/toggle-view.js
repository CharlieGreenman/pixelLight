import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";

class ToggleView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return (
          <div id="control_view" className="column">
            <div id="view-button" className="large-12 color-button-styling">View Mode</div>
            <div id="draw-button" className="large-12 color-button-styling">Draw Mode</div>
            <div id="reset-button" className="large-12 color-button-styling">Reset</div>
            <div id="control_panel" className="color-button-styling"><span className="letter">G</span><span className="desc_text">Toggle View</span>
              {/*#github-button*/}
              {/*    a.github-button(href='https://github.com/charlieGreenman/codeIllustrator', data-icon='octicon-star', data-style='mega', data-count-href='/charlieGreenman/codeIllustrator/stargazers', data-count-api='/repos/charlieGreenman/codeIllustrator#stargazers_count', data-count-aria-label='# stargazers on GitHub', aria-label='Star charlieGreenman/codeIllustrator on GitHub') Star*/}
            </div>
          </div>
      )
  }
}

function mapStateToProps(state) {
  const {environment} = state;
  return{
    environment
  }
}

export default connect(mapStateToProps)(ToggleView);
