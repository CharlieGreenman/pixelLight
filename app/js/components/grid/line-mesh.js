import React from "react";

import {Layer, Line} from 'react-konva';

import {clearPixel, createPixel} from "../../utils/grid-utils";

import CSSModules from 'react-css-modules';
import styles from "../../../scss/grid.scss";

class GridMesh extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
      return(
        <Layer>
          <Line
            points={[73, 70, 340, 23, 450, 60, 500, 20]}
            stroke= 'black'
            strokeWidth='1'
            ref="gridMesh"
          />
        </Layer>
      )
    }
}

export default GridMesh;
