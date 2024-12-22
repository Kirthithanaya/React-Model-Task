import React from 'react';

const Product = ({ product, onAddToCart }) => {
    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
                       <img
                               src={product.image}
                               alt={product.title}
                               className="h-48 w-full object-contain mb-4"
                       />
                      <h2 className="text-lg text-center font-semibold mb-2">{product.title}</h2>
                      <p className="text-green-600 text-center font-bold mb-4">${product.price}</p>
                      <button
                              onClick={onAddToCart}
                              className="bg-blue-600 text-white  py-2  w-full rounded hover:bg-blue-700"
                      >
                        Add to Cart
                      </button>
        </div>
    );
};

export default Product;