import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Hero = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios("https://e-commerce.urownsite.xyz/products");
      console.log(response.data.data);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center w-full h-screen gap-10 ">
          <div className="space-y-5">
            <h1 className="text-5xl font-bold">Welcome to our shop</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              iusto natus debitis ea cupiditate dignissimos?
            </p>

            <button
              type="button"
              className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-md px-8 py-3 text-center dark:focus:ring-yellow-900"
            >
              Read More
            </button>
          </div>
          <img src="/assets/drone.png" className="w-[600px]" />
        </div>

        {/* products section */}
        <section className="space-y-5">
          <h1 className="text-3xl font-bold text-center">Our Products</h1>
          <div className="flex flex-wrap">
            {products.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
