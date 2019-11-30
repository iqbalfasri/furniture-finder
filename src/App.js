import React, { useEffect, useState } from "react";

import Card from "./components/Card";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [style, setStyle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

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

  const prodcutNotNull = products.length !== 0 ? products : [];

  const filterWithKeyword = prodcutNotNull.filter(product => {
    return product.name.toLowerCase().indexOf(search) !== -1;
  });

  // setFilteredProduct(filteredProduct);
  // console.log(filteredProduct, "Filter")

  return (
    <>
      <header className="header">
        <div className="container">
          <form onSubmit={e => {

          }}>
            <input
              className="header--search"
              type="text"
              placeholder="Cari Furniture"
              onChange={e => setSearch(e.target.value)}
            />
          </form>
        </div>
      </header>

      <main className="list--products">
        <div className="container">
          <div className="row">
            <Card products={filterWithKeyword} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
