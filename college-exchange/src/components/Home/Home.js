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
            {Items.map((item) => {
              return (
                <li className={item.cname}>
                  <div className="item-box">
                    <img
                      className="product-image"
                      src={item.imageURL}
                      alt="Product"
                    ></img>
                    <div className="row">
                      <div className="desc left-item">
                        Product name: {item.productName}
                      </div>
                      <div className="divider" />
                      <div className="desc right-item">
                        Seller name: {item.sellerName}
                      </div>
                    </div>

                    <div className="row">
                      <li className="desc">Item price($): {item.price}</li>
                      <div className="divider" />
                      <li className="desc">ratings: {item.ratings}</li>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
