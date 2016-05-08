import ReactDOM from "react-dom";

export function getPixelImgData(e, ctx, pixelSize){
  return ctx.getImageData(Math.floor(e.nativeEvent.offsetX / pixelSize) * pixelSize + 1,
      //http://stackoverflow.com/questions/31519758/reacts-mouseevent-doesnt-have-offsetx-offsety
      Math.floor(e.nativeEvent.offsetY / pixelSize) * pixelSize + 1,
      pixelSize - 2, pixelSize - 2);
}

export function clearPixel(e, ctx, pixelSize){
  return ctx.clearRect(Math.floor(e.nativeEvent.offsetX / pixelSize) * pixelSize + 1,
      Math.floor(e.nativeEvent.offsetY / pixelSize) * pixelSize + 1,
      pixelSize - 2, pixelSize - 2);
  ctx.fillStyle = `rgba(${pixelRed}, ${pixelGreen}, ${pixelBlue}, 1)`;
}

export function createPixel(e, ctx, pixelSize){
  return ctx.fillRect(Math.floor(e.nativeEvent.offsetX / pixelSize) * pixelSize + 1,
      Math.floor(e.nativeEvent.offsetY / pixelSize) * pixelSize + 1,
      pixelSize - 2, pixelSize - 2);
}
