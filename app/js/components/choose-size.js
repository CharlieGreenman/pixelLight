import React from "react";
import ReactDOM from "react-dom";
require("../../scss/core.scss");


class ChooseSize extends React.Component {
  constructor(){
    super()
    this.state = {isSelected: false}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
        alert("works");
  }


    render() {
        return(
          <div className="choose-size">
            <h6 className="choose-size__header">Choose size of grid</h6>
            <form className="choose-size__form" >
              <label className = "choose-size__form__label">columns</label>
              <label className = "choose-size__form__label">rows</label>
              <input type="text" defaultValue={20} id="input-for-columns" className = "choose-size__form__input" />
              <input type="text" defaultValue={20} id="input-for-rows" className = "choose-size__form__input" />
              <label className = "choose-size__form__label">Pixel Size</label>
              <button onClick={this.handleClick} id="create_grid" type="button" className = "choose-size__form__button">Create Grid</button>
              <input type="text" defaultValue={20} id="input-for-pixel-size" className = "choose-size__form__input" />
            </form>
          </div>
            )
    }
}

ReactDOM.render(<ChooseSize/>, document.body);

export default chooseSize;
