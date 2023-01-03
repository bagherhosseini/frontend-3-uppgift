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
          <div className="single-product-content" key={item.id}>
            <div style={{width: '100%', display:'flex', flexDirection:'row', alignItems:'center'}}>
              <img src={item.imageUrl} alt="product picture"></img>
              <div>
                <h3 className="productname">{item.name}</h3>
                <p className="product-price">{item.price} SEK</p>
                <div>
                  <div>
                    <span className="product-info">{item.info}</span>
                  </div>
                  <hr style={{width: '100%'}} />
                  <div style={{position: 'relative'}}>
                    <h4>Product details</h4>
                    <input id="all-product-details" class="all-details" type="checkbox"></input>
                    <ul class="product-details-list">
                      <li>Black</li>
                      <li>Monogram coated canvas</li>
                      <li>Smooth cowhide leather trim</li>
                      <li>Gold-colour hardware</li>
                      <li>Drawstring</li>
                    </ul>
                  </div>
                  <hr style={{width: '100%'}} />
                  <div> 
                    <h4>SHIPPING & RETURNS</h4>
                    <span>
                      We offer the following delivery methods:
                      Free Home delivery: 2-5 working days
                      Express Home delivery: 1-5 working days – Free

                      Click&Collect: 1-3 working days - FREE
                      Collect your order in a Louis Vuitton store.
                      This option might not be available in all locations.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{width: '100%'}} />
            <div>
              <img src={item.imageUrl1} alt="product picture" className="product-4-img"></img>
              <img src={item.imageUrl2} alt="product picture" className="product-4-img"></img>
              <img src={item.imageUrl3} alt="product picture" className="product-4-img"></img>
              <img src={item.imageUrl4} alt="product picture" className="product-4-img"></img>
            </div>
          </div>
        ))}
    </div>
  );
}
