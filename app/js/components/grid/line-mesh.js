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
      const{columnCount, rowCount, pixelCount, drawMode, viewMode} = this.props;
      let columns = [];
      let rows = [];

      for (var i=0; i < columnCount; i++) {
          columns.push(
            <Line
            points={[0, i * columnCount, columnCount * columnCount, i * columnCount]}
            key={i}
            stroke= 'black'
            strokeWidth='1'
            ref="gridMesh"
            />
          );
      }
      for (var i=0; i < rowCount; i++) {
          rows.push(
            <Line
            points={[i * rowCount, 0, i * rowCount, rowCount * rowCount]}
            key={i}
            stroke= 'black'
            strokeWidth='1'
            ref="gridMesh"
            />
          );
      }
      console.log(`drawMode: ${drawMode}`);
      if(drawMode){
        return(
          <Layer>
          {columns}
          {rows}
          </Layer>
        )
      }
      else{
        return(
          <Layer>
          </Layer>
        )
      }
    }
}

export default GridMesh;
