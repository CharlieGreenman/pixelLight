import React, {Component, PropTypes} from "react";

class StaticJSCode extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
    <pre>
    {`arrMap = {
  Color: function(r, g, b, a) {

      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;

      this.toString = function() {

          return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
      }

  },

  draw: function(){
    for(var y = 0; y < map.length; y++) {
      for(var x = 0; x < map.length; x++) {
        ctx.fillStyle = colors[map[y][x]].toString();
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  },
  init: function(){
    canvas = document.getElementById("canvas");
    canvas.width = window.outerWidth;
    canvas.height = window.outerHeight;
    ctx = canvas.getContext("2d");

    window.setInterval(function() {

        arrMap.draw();
    }, 1000 / 30);
  }
};`}
</pre>
  );
}
}

export default StaticJSCode;
