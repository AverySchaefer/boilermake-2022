import React from "react";

function Item(props) {
  return (
    <>
      <div className="cards__item__wrapper">
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="cards__item__atag"
        >
          <li className="cards__item">
            <figure
              className="cards__item__pic-wrap"
              data-category={props.skills}
            >
              <img className="cards__item__img" src={props.src} alt=" " />
            </figure>
            <div className="cards__item__info">
              <h4 className="cards__item__title">{props.title}</h4>
              <h5 className="cards__item__body">{props.body}</h5>
            </div>
          </li>
        </a>
      </div>
    </>
  );
}

export default CardItem;
