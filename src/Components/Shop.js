import React from "react";
import "./Shop.css";

const Shop = ({ list }) => {
  return (
    <div className="listtype">
      <div className="item">
        <h1 className="heading">{list.title}</h1>
        <p>{list.description}</p>

        <img src={list.images} alt="" className="img" />
        <div>
          <p className="rate"> Rs {list.price}</p>
          <p className="bold">Created At: {list.creationAt}</p>
          <p className="bold">Updated At: {list.updatedAt} </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
