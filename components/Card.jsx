import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="max-w-sm bg-slate-100 rounded-lg shadow-md m-5">
      <img
        className="p-8 rounded-t-lg w-[300px] mx-auto"
        src="/assets/p1.png"
        alt="product image"
      />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
         {product.title}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          {product.description}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 ">$599</span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
