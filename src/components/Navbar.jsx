import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();

    return (
        <nav className="navbar" style={{ padding: '30px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F1EADF' }}>
            <Link to="/" className="nav-logo" style={{ textDecoration: 'none', color: '#6A2E3B' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '500' }}>AuraElixir</h2>
            </Link>

            <div className="nav-links" style={{ display: 'flex', gap: '40px', fontSize: '14px', color: '#6A2E3B', fontWeight: '500' }}>
                <Link to="/">Home</Link>
                <Link to="/catalog">Our Products</Link>
                <Link to="/about">About</Link>
            </div>

            <div className="nav-actions" style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '14px', color: '#6A2E3B', fontWeight: '500' }}>
                <Link to="/checkout" className="text-link" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#6A2E3B' }}>
                    <ShoppingCart size={16} /> Cart {cartCount > 0 && `(${cartCount})`}
                </Link>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-link" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#6A2E3B' }}>
                    <MessageCircle size={16} /> WhatsApp
                </a>
                <button style={{ background: 'none', border: 'none', color: '#6A2E3B', cursor: 'pointer', marginLeft: '10px' }}>
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
