import { products } from './../data/db.json';
import React, { useState, useEffect } from 'react';

export default function Product(){
    const [data, setData] = useState(null);
    const [data1, setData1] = useState();

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3001/products');
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }, []); 
  
    return (
      <div>
        {data ? (
          <ul>
            {data && data.map(item => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <img src={item.imageUrl} width = '200px'></img>
                <br></br>
                <button>ok</button>
              </div>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
}

