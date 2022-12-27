import { products } from './../data/db.json';
import React, { useState, useEffect } from 'react';
import './style.scss';

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
      <div className='product-container'>
        <h3>Alla produkter</h3>
        {data ? (
          <ul className='products'>
            {data && data.map(item => (
              <li className='product' key={item.id}>
                <div className='product-content'>
                  <img src={item.imageUrl}></img>
                  <p className='productname'>{item.name}</p>
                  <p>{item.price} SEK</p>
                  <button>Tabort</button>
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

