import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav className="bg-slate-800 text-white p-4 flex justify-between items-center">
                 <h1 className="text-xl font-bold">E-Shop 🛒</h1>
                        <button
                             onClick={onCartClick}
                             className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
                        >  
                            Cart ({cartCount})
                        </button>
        </nav>
    );
};

export default Navbar;