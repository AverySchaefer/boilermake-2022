import React, { Component } from "react";
import { Items } from "./Items.js";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="searchInput">
          <i class="fas fa-search"></i>
          <input
            type="text"
            placeholder="What items you are looking for?"
          ></input>
        </div>

        <h1>Recommended Item for you</h1>
        <div className="recommendedItem">
          <ul className="Items">
            {
              /*Items.map((cname, productName, sellerName, price, rating) => {
              return (
                <li className={cname}>
                  <div className="item-box">
                    <p1>{productName}</p1>
                    {sellerName}
                    {price}
                    {rating}
                  </div>
                </li>
              );
              })*/
              Items.map((item) => {
                return (
                  <li className={item.cname}>
                    <div className="item-box">
                      <p1>{item.productName1}</p1>
                      {item.sellerName}
                      {item.price}
                      {item.ratings}
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
