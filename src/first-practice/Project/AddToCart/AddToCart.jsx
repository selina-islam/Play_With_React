import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Product A",
    price: "$50",
  },
  {
    id: 2,
    name: "Product B",
    price: "$30",
  },
  {
    id: 3,
    name: "Product C",
    price: "$20",
  },
];

function AddToCart() {
  const [cart, setCart] = useState([]);
  //  add to cart functionality
  const addToCart = (product) => {
    setCart((prevcart)=>[...prevcart, product])
  }
        
  return (
    <div className="px-4 py-24 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-black mb-4">Produce List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-xl transition"
          >
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <p className="text-gray-500">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-gray-300 px-4 py-1 rounded-md hover:bg-gray-400 transition-all duration-300 my-3"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* display cart item */}
      <h2 className="text-xl font-bold mt-6">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <ul className="list-disc pl-6">
          {cart.map((item, index) => (
            <li key={index} className="">
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AddToCart;
