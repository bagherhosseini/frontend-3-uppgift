import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserProfile() {
  let { userId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/products");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  const filteredData = [...data].filter((item) => item.id === Number(userId));

  return (
    <div>
      {filteredData &&
        filteredData.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt="product picture"></img>
            <p className="productname">{item.name}</p>
            <p>{item.price} SEK</p>
          </div>
        ))}
    </div>
  );
}
