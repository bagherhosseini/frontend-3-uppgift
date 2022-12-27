import { products } from "./../data/db.json";
import React, { useState, useEffect } from "react";
import "./style.scss";

export default function Product() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/products");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  async function handleDelete(event) {
    event.preventDefault();
    const id = Number(event.target.name);
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        const index = data.findIndex((item) => item.id === id);
        data.splice(index, 1);
        setData([...data]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="product-container">
      <h3>Alla produkter</h3>
      {data ? (
        <ul className="products">
          {data &&
            data.map((item) => (
              <li className="product" key={item.id}>
                <div className="product-content">
                  <img src={item.imageUrl}></img>
                  <p className="productname">{item.name}</p>
                  <p>{item.price} SEK</p>
                  <button onClick={handleDelete} name={item.id}>
                    Radera
                  </button>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
