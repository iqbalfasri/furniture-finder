import React, { useEffect, useState } from "react";

import { formatPrice, getShortString } from "./utils/lib";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [style, setStyle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFurniture() {
      let response = await fetch(
        "http://www.mocky.io/v2/5c9105cb330000112b649af8"
      );
      let responseJson = await response.json();

      setProducts(responseJson.products);
      setStyle(responseJson.furniture_styles);
    }

    getFurniture();
  }, []);

  function _renderProduct() {
    if (products.length == 0) return;
    return products.map(product => {
      let { furniture_style } = product;

      return (
        <div className="col-md-6">
          <div className="product--card">
            <div className="d-flex flex-row justify-content-between">
              <h4>{product.name}</h4>
              <p>Rp {formatPrice(product.price)}</p>
            </div>

            <div className="mt-2 product--card-description">
              <p>{getShortString(product.description, 114)}</p>
            </div>

            <div className="mt-2 d-flex flex-row product--card-style">
              {furniture_style.map((style, index) => {
                return <p>{(index ? ", " : "") + style}</p>;
              })}
            </div>

            <div className="mt-2 product--card-delivery">
              <p>{product.delivery_time} day</p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <h1>furniture_styles</h1>
        </div>
      </header>

      <main className="list--products">
        <div className="container">
          <div className="row">{_renderProduct()}</div>
        </div>
      </main>
    </>
  );
}

export default App;
