import React, { useEffect, useState } from "react";
import Shop from "./Shop";

const Shoplist = () => {
  const [list, setList] = useState([]);
  const apiUrl = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    fetchData();
  });
  async function fetchData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setList(data);
  }
  return (
    <div>
      {list.map((list) => (
        <Shop key={list.id} list={list} />
      ))}
    </div>
  );
};

export default Shoplist;
