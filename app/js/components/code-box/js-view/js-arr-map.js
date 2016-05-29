import React, {Component, PropTypes} from "react";

import _ from "lodash";

class JSArrMap extends React.Component {
  constructor(){
    super();
  }
  render(){
    const{rowCount, columnCount, pixelCount, xPos, yPos, rectColor} = this.props;
    let twoDimensionalArray = [];
    let colorStore     = _.uniq(rectColor);

    for (let x = 0; x < rowCount; x++) {
        let arrMap = [];

        for (let y = 0; y < columnCount; y++) {
            arrMap.push(0);
            xPos.map(function(value, idx, arr){
              if (x === (yPos[idx] / pixelCount) && y === (xPos[idx] / pixelCount)) {
                console.log(`x value: ${x}`);
                console.log(`arrMap[y]: ${y}`);
                arrMap[y] = colorStore.indexOf(rectColor[idx]) + 1;
              }
            });
        }
        twoDimensionalArray.push("[", arrMap, "]", <br />);

    }

    return(
      <p>{twoDimensionalArray} </p>
    );
  }
}

export default JSArrMap;
