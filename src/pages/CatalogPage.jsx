import React from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { useProducts } from '../context/ProductContext';

const CatalogPage = () => {
    const { products } = useProducts();
    return (
        <div className="page-catalog">
            <section className="bg-cocoa" style={{ paddingTop: '100px', paddingBottom: '60px', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--color-text-primary)' }}>Our Products</h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '20px', fontSize: '1.1rem' }}>Find your perfect shade. Every gloss is crafted for high-shine, non-sticky wear.</p>
                </div>
            </section>

            <section className="section bg-light-cream">
                <div className="container">
                    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CatalogPage;
