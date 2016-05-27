import React, {Component, PropTypes} from "react";

import _ from "lodash";

class JSArrMap extends React.Component {
  constructor(){
    super();
  }
  render(){
    const{rowCount, columnCount, pixelCount, xPos, yPos, rectColor} = this.props;
    let colorStore     = _.uniq(rectColor);
    let arrMap = [];
    for (let x = 0; x < rowCount; x++) {
        arrMap.push([]);
    }
    for (let x = 0; x < rowCount; x++) {
        for (let y = 0; y < columnCount; y++) {
            arrMap[y].push(0);
            for (let z = 0; z < xPos; z++) {
                //tells us value needs to be changed
                if (x === parseFloat(xPos[z] / pixelCount) && y === parseFloat(yPos[z] / pixelCount)) {
                    //tells us what it should be changed to
                    arrMap[y][x] = elem.s.storeColors.indexOf(rectColor[z]) + 1;
                }
            }
        }
    }
    return(
      <div> {arrMap} </div>
    );
  }
}

export default JSArrMap;
