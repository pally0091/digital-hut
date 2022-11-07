import React from "react";

const Product = ({ product }) => {
  const { brand, description, price, thumbnail, title } = product;
  return (
    <div className="shadow-lg shadow-indigo-700 rounded p-2 mx-5 w-1/4 mt-5 border-2 border-black">
      <div className=" rounded   h-96">
        <div className="p-1 w-full h-2/5">
          <img
            className="w-full h-full"
            src={thumbnail}
            alt={title}
          ></img>
        </div>
        <h1 className="text-lg font-bold text-black text-center">{title}</h1>
        <h3 className="text-center text-black border-2 rounded shadow-md mt-2">
          {brand}
        </h3>
        <p className="text-black text-justify mt-2 h-28">{description}</p>
      </div>
      <button className="text-center w-full p-2 rounded bg-sky-400 hover:bg-green-400">
        Buy Now : $ {price}
      </button>
    </div>
  );
};

export default Product;
