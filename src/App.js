import React, { useEffect, useState } from "react";

import Card from "./components/Card";

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

  return (
    <>
      <header className="header">
        <div className="container">
          <h1>furniture_styles</h1>
        </div>
      </header>

      <main className="list--products">
        <div className="container">
          <div className="row">
            <Card products={products} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
