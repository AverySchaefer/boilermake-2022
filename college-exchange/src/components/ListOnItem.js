import React, { Component } from "react";
import "./ListOnItem.css";

export class ListOnItem extends Component {
  render() {
    return (
      <div>
        <div className="list-wrapper">
          <div className="product">
            Product name: <input type="text" placeholder="Product name"></input>
            Price($):<input type="text" placeholder="Price"></input>
          </div>
          <div className="descNTag">
            <textarea
              type="text"
              placeholder="Description"
              className="description"
              rows="10"
            ></textarea>
            Please select tag:
            <select>
              <option value="food">food</option>
              <option value="utensil">utensil</option>
              <option value="furniture">furniture</option>
              <option value="fruit">fruit</option>
              <option value="computer">computer</option>
              <option value="phone">phone</option>
              <option value="snack">snack</option>
              <option value="drink">drink</option>
              <option value="charger">charger</option>
              <option value="toy">toy</option>
              <option value="electronics">electronics</option>
              <option value="drink">drink</option>
              <option value="goods">goods</option>
              <option value="musical-instrument">musical-instrument</option>
            </select>
          </div>
          <button className="btn">Upload</button>
        </div>
      </div>
    );
  }
}

export default ListOnItem;
