import React from "react";

import { formatPrice, getShortString } from "../../utils/lib";

import "./card.css";

function Card({ products }) {
  return (
    <>
      {products.map((product, index) => {
        let { furniture_style } = product;

        return (
          <div key={`product-${index}`} className="col-md-6">
            <div className="product--card">
              <div className="d-flex flex-row justify-content-between product--card-price">
                <h4>{product.name}</h4>
                <p>Rp {formatPrice(product.price)}</p>
              </div>

              <div className="mt-2 product--card-description">
                <p>{getShortString(product.description, 114)}</p>
              </div>

              <div className="mt-2 d-flex flex-row product--card-style">
                {furniture_style.map((style, index) => {
                  return <p key={`furniture-${index}`}>{(index ? ", " : "") + style}</p>;
                })}
              </div>

              <div className="mt-2 product--card-delivery">
                <p>{product.delivery_time} day</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
