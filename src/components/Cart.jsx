import React from 'react';

const Cart = ({ cart, onClose, onRemoveFromCart }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white w-3/4 max-w-lg p-6 rounded shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Your Cart</h2>
                        <button
                                onClick={onClose}
                                className="bg-green-700 text-white py-2 px-4 rounded font-bold"
                        >
                        Close
                        </button>
                </div>
                       {cart.length === 0 ? (
                       <p>Your cart is empty.</p>
                       ) : (
                <ul>
                   {cart.map((item) => (
                     <li
                            key={item.id}
                            className="flex justify-between items-center border-b py-2"
                     >
                          <img
                              src={item.image}
                              alt={item.title}
                              className=" flex h-20 w-20 object-contain"
                          />
                         <div>
                            <p className="font-semibold text-center">{item.title}</p>
                            <p className="text-green-600 text-center font-bold">${item.price}</p>
                         </div>
                          <button
                             onClick={() => onRemoveFromCart(item.id)}
                             className="bg-red-500 py-2 px-4 text-white rounded font-bold"
                          >
                          Remove
                          </button>
                      </li>
                     ))}
                </ul>
          )}
        </div>
      </div>
    );
};

export default Cart;