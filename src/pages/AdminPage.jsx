import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { Edit, Trash2, Plus, RefreshCw } from 'lucide-react';

const AdminPage = () => {
    const { products, addProduct, updateProduct, deleteProduct, resetToDefault } = useProducts();

    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        vibe: '',
        price: '',
        image: '/images/hero_gloss.png'
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            updateProduct(currentId, { ...formData, price: Number(formData.price) });
            setIsEditing(false);
            setCurrentId(null);
        } else {
            addProduct({ ...formData, price: Number(formData.price) });
        }
        setFormData({ name: '', vibe: '', price: '', image: '/images/hero_gloss.png' });
    };

    const handleEdit = (product) => {
        setIsEditing(true);
        setCurrentId(product.id);
        setFormData({
            name: product.name,
            vibe: product.vibe,
            price: product.price,
            image: product.image
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentId(null);
        setFormData({ name: '', vibe: '', price: '', image: '/images/hero_gloss.png' });
    }

    return (
        <div className="page-admin bg-light-cream" style={{ minHeight: '100vh', padding: '60px 0' }}>
            <div className="container">
                <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--color-text-dark)' }}>Admin Portal</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'start' }}>

                    {/* Add/Edit Product Form */}
                    <div className="admin-form" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--color-text-dark)' }}>
                            {isEditing ? 'Edit Lipgloss' : 'Add New Lipgloss'}
                        </h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input type="text" name="name" placeholder="Product Name" required value={formData.name} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none' }} />
                            <input type="text" name="vibe" placeholder="Vibe / Description (e.g., Soft Boss Energy)" required value={formData.vibe} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none' }} />
                            <input type="number" name="price" placeholder="Price (₦)" required value={formData.price} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none' }} />
                            <select name="image" value={formData.image} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #EAEAEA', fontSize: '1rem', outline: 'none', backgroundColor: 'white' }}>
                                <option value="/images/hero_gloss.png">Crystal Clear Image</option>
                                <option value="/images/velvet_nude.png">Velvet Nude Image</option>
                                <option value="/images/champagne_glow.png">Champagne Glow Image</option>
                                <option value="/images/deep_berry.png">Deep Berry Image</option>
                            </select>

                            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                                {isEditing ? 'Update Product' : <><Plus size={18} /> Add Product</>}
                            </button>
                            {isEditing && (
                                <button type="button" onClick={handleCancel} className="btn-secondary" style={{ width: '100%', color: 'var(--color-text-dark)', borderColor: 'var(--color-text-dark)' }}>
                                    Cancel Edit
                                </button>
                            )}
                        </form>
                    </div>

                    {/* Product List */}
                    <div className="admin-list" style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-dark)' }}>Current Inventory</h2>
                            <button onClick={resetToDefault} className="btn-secondary" style={{ padding: '8px 15px', fontSize: '0.9rem', color: '#E57373', borderColor: '#E57373', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <RefreshCw size={14} /> Factory Reset
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {products.length === 0 ? (
                                <p>No products in inventory.</p>
                            ) : (
                                products.map(product => (
                                    <div key={product.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', border: '1px solid #EAEAEA', borderRadius: '12px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <img src={product.image} alt={product.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-dark)' }}>{product.name}</h3>
                                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>₦{product.price.toLocaleString()} • {product.vibe}</p>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button onClick={() => handleEdit(product)} style={{ background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer', padding: '5px' }}>
                                                <Edit size={20} />
                                            </button>
                                            <button onClick={() => deleteProduct(product.id)} style={{ background: 'none', border: 'none', color: '#E57373', cursor: 'pointer', padding: '5px' }}>
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminPage;
