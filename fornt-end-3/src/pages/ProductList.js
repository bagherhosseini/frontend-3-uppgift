import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(1);
  const [selectValue, setSelectValue] = useState("none");

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

  function handleChangeFilter(event) {
    setFilter(Number(event.target.value));
  }

  function handleChangeSort(event) {
    setSelectValue(event.target.value);
  }
  const filteredData = [...data].filter((item) => item.price <= 20300);
  const filterdata = filter === 1 ? data : filteredData;

  const sortedbyasc = [...filterdata].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const sortedbydesc = [...filterdata].sort((a, b) =>
    b.name.localeCompare(a.name)
  );

  const sortfilterdata =
    selectValue === "asc"
      ? sortedbyasc
      : selectValue === "desc"
      ? sortedbydesc
      : filterdata;

  return (
    <div className="product-container">
      <div className="filter-sort">
        <select onChange={handleChangeSort}>
          <option value="none">None</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <form className="filter">
          <label>
            <input
              type="radio"
              name="filter"
              value="1"
              checked={filter === 1}
              onChange={handleChangeFilter}
            />
            Alla produkter
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="2"
              checked={filter === 2}
              onChange={handleChangeFilter}
            />
            Under 20300 SEK
          </label>
        </form>
      </div>

      {sortfilterdata ? (
        <ul className="products">
          {sortfilterdata &&
            sortfilterdata.map((item) => (
              <li className="product" key={item.id}>
                <Link className="links" to={`/Product/${item.id}`}>
                  <div className="product-content">
                    <img src={item.imageUrl} alt="product piture"></img>
                    <p className="productname">{item.name}</p>

                    <div className="btn">
                      <p>{item.price} SEK</p>
                      <button onClick={handleDelete} name={item.id}>
                        🗑️
                      </button>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
