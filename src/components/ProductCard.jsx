import React from 'react';
import { ShoppingCart, MessageCircle, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart, cart } = useCart();

    // Check if product is already in cart for UI feedback
    const inCart = cart.some(item => item.id === product.id);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-card">
            <div className="product-image-container" style={{ aspectRatio: '1', borderRadius: 'var(--radius-soft)', overflow: 'hidden', marginBottom: '15px' }}>
                <img src={product.image} alt={product.name} className="product-image" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-vibe">{product.vibe}</p>
                <p className="product-price">₦{product.price.toLocaleString()}</p>

                <div className="product-actions" style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button
                        className="btn-primary product-add-btn"
                        onClick={handleAddToCart}
                        style={{ flex: 1, padding: '10px', fontSize: '0.9rem' }}
                    >
                        {inCart ? <><Check size={16} /> Added</> : <><ShoppingCart size={16} /> Add to Cart</>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
