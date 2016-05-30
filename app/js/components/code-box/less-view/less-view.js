import React from "react";

import CSSModules from 'react-css-modules';
import styles from "../../../../scss/_code-box.scss";

import _ from "lodash";

import VarActors from "./var-actors";
import DynamicMultipliers from "./dynamic-multipliers";
import BoxShadowContent from "./box-shadow-content";

class LESSView extends React.Component {
  constructor(){
    super();
  }
  render() {
    const{lessView} = this.props;
    if(lessView){
      return(
        <div>
         <VarActors {...this.props} />
         <DynamicMultipliers {...this.props}/>
         <BoxShadowContent {...this.props}/>
        </div>
      );
    }
    return(
      <div></div>
    );

  }

}

export default LESSView;
