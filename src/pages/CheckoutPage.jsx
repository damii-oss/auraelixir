import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';

const CheckoutPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        delivery: 'Standard (2-3 Days)'
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckoutInfo = (e) => {
        e.preventDefault();

        let orderDetails = `*Aura Elixir Order Request*%0A%0A`;
        orderDetails += `*Customer Details:*%0A`;
        orderDetails += `Name: ${formData.name}%0A`;
        orderDetails += `Phone: ${formData.phone}%0A`;
        orderDetails += `Address: ${formData.address}%0A`;
        orderDetails += `Delivery: ${formData.delivery}%0A%0A`;

        orderDetails += `*Order Items:*%0A`;
        cart.forEach(item => {
            orderDetails += `- ${item.quantity}x ${item.name} (₦${(item.price * item.quantity).toLocaleString()})%0A`;
        });

        orderDetails += `%0A*Total: ₦${cartTotal.toLocaleString()}*`;

        const waUrl = `https://wa.me/1234567890?text=${orderDetails}`;
        window.open(waUrl, '_blank');
    };

    if (cart.length === 0) {
        return (
            <div className="page-checkout bg-light-cream" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-text-dark)' }}>Your Aura Bag is Empty</h2>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '30px' }}>Looks like you haven't added any glosses yet.</p>
                    <Link to="/catalog" className="btn-primary">Shop the Gloss</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-checkout bg-light-cream" style={{ minHeight: '100vh', padding: '60px 0' }}>
            <div className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--color-text-dark)' }}>Your Aura Bag</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '50px', alignItems: 'start' }}>

                    {/* Cart Items Area */}
                    <div className="cart-items" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {cart.map(item => (
                            <div key={item.id} className="cart-item" style={{ display: 'flex', gap: '20px', backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px' }} />

                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-dark)' }}>{item.name}</h3>
                                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{item.vibe}</p>
                                        </div>
                                        <p style={{ fontWeight: '600', color: 'var(--color-text-dark)' }}>₦{(item.price * item.quantity).toLocaleString()}</p>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid #EAEAEA', borderRadius: '8px', padding: '5px 10px' }}>
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-secondary)' }}><Minus size={16} /></button>
                                            <span style={{ fontWeight: '500' }}>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-secondary)' }}><Plus size={16} /></button>
                                        </div>

                                        <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#E57373', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                                            <Trash2 size={16} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Checkout Form Area */}
                    <div className="checkout-summary" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-text-dark)', borderBottom: '1px solid #EAEAEA', paddingBottom: '15px' }}>Order Summary</h2>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--color-text-secondary)' }}>
                            <span>Subtotal</span>
                            <span>₦{cartTotal.toLocaleString()}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: 'var(--color-text-secondary)' }}>
                            <span>Delivery</span>
                            <span>Calculated on WhatsApp</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontWeight: '600', fontSize: '1.2rem', color: 'var(--color-text-dark)', borderTop: '1px solid #EAEAEA', paddingTop: '15px' }}>
                            <span>Estimated Total</span>
                            <span>₦{cartTotal.toLocaleString()}</span>
                        </div>

                        <form onSubmit={handleCheckoutInfo} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none' }} />
                            <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none' }} />
                            <textarea name="address" placeholder="Delivery Address" required value={formData.address} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none', minHeight: '80px', resize: 'vertical' }} />
                            <select name="delivery" value={formData.delivery} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none', backgroundColor: 'white' }}>
                                <option value="Standard (2-3 Days)">Standard Lagos Delivery (2-3 Days)</option>
                                <option value="Express (Same Day)">Express Lagos Delivery (Same Day)</option>
                                <option value="Interstate">Interstate Delivery (3-5 Days)</option>
                            </select>

                            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px', justifyContent: 'center' }}>
                                <MessageCircle size={18} /> Order via WhatsApp <ArrowRight size={18} />
                            </button>
                        </form>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '15px' }}>
                            We will confirm your order details and payment directly on WhatsApp.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
