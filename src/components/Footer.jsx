import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-cocoa" style={{ color: 'var(--color-text-secondary)', padding: '60px 0', borderTop: '1px solid var(--color-plum)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                <div>
                    <h3 style={{ color: 'var(--color-text-primary)' }}>Shop</h3>
                    <ul style={{ marginTop: '20px', lineHeight: '2' }}>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li>Best Sellers</li>
                        <li>New Drop</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{ color: 'var(--color-text-primary)' }}>Brand</h3>
                    <ul style={{ marginTop: '20px', lineHeight: '2' }}>
                        <li><Link to="/about">About Aura</Link></li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{ color: 'var(--color-text-primary)' }}>Support</h3>
                    <ul style={{ marginTop: '20px', lineHeight: '2' }}>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                <p>&copy; {new Date().getFullYear()} Aura Elixir. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '20px', color: 'var(--color-text-primary)' }}>
                    <Instagram size={24} />
                    <MessageCircle size={24} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
