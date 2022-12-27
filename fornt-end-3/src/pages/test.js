import _ from "lodash";
import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/products");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  const activeData = _.filter(data, { name: "BOULOGNE BAG" });

  return (
    <div>
      {activeData.map((item) => (
        <div key={item.id}>{item.price}</div>
      ))}
    </div>
  );
}
