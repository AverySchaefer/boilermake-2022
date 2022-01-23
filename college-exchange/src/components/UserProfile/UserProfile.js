import React, { Component } from "react";
import { HistoryItems } from "./HistoryItems";
import "./UserProfile.css";
import test from "./test.jpg";

export class UserProfile extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <img src={test} alt="profile" className="profile-img"></img>

          <div className="text-desc">
            <textarea
              type="text"
              value="Waldo"
              className="name"
              readonly="readonly"
            ></textarea>
            <textarea
              type="text"
              value="Description: NO ONE CAN AGREE ON WHO CAME UP WITH THE IDEA OF WALDO."
              className="desc"
              readonly="readonly"
            ></textarea>
            <h2>4.5</h2>
          </div>
        </div>

        <button>Edit</button>

        <ul className="histories">
          {HistoryItems.map((item) => {
            return (
              <li>
                <div className="historyItem">
                  <img
                    src={item.image}
                    alt={item.alter}
                    className="historyImg"
                  ></img>
                  <textarea
                    type="text"
                    value={item.product}
                    className="historyItemName"
                    readonly="readonly"
                  ></textarea>

                  <textarea
                    type="text"
                    value={item.price}
                    className="historyItemPrice"
                    readonly="readonly"
                  ></textarea>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserProfile;
