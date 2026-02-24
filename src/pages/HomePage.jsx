import React from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { useProducts } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { products } = useProducts();
    const bestSellers = products.slice(0, 3);


    return (
        <div className="page-home">
            {/* 1. HERO SECTION */}
            <section className="hero-section bg-dark-plum" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container hero-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                    <div className="hero-text">
                        <h1 style={{ fontSize: '4rem', marginBottom: '20px', lineHeight: '1.2' }}>Your Aura.<br />Amplified.</h1>
                        <p className="subtext" style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--color-text-secondary)' }}>High-shine lip elixirs designed to glow with you.</p>
                        <div className="hero-buttons" style={{ display: 'flex', gap: '20px' }}>
                            <button className="btn-primary dark-mode">Shop the Gloss</button>
                            <button className="btn-secondary dark-text" style={{ color: 'var(--color-text-primary)', borderColor: 'var(--color-text-primary)' }}>View Shades</button>
                        </div>
                    </div>
                    <div className="hero-image" style={{ height: '500px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                        <img src="/images/hero_gloss.png" alt="Aura Elixir Lipgloss" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* 2. FEATURE STRIP */}
            <section className="feature-strip bg-cocoa" style={{ padding: '40px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                    <div>
                        <span style={{ fontSize: '2rem' }}>✨</span>
                        <p>High-Shine Finish</p>
                    </div>
                    <div>
                        <span style={{ fontSize: '2rem' }}>💧</span>
                        <p>Non-Sticky Formula</p>
                    </div>
                    <div>
                        <span style={{ fontSize: '2rem' }}>🌸</span>
                        <p>Soft Nude Shades</p>
                    </div>
                </div>
            </section>

            {/* 3. BEST SELLERS */}
            <section className="best-sellers section bg-light-cream">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px', color: 'var(--color-text-dark)' }}>Best Sellers</h2>
                    <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                        {bestSellers.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/catalog" className="btn-secondary dark-text" style={{ borderColor: 'var(--color-text-dark)', display: 'inline-flex', textDecoration: 'none' }}>&rarr; View Full Catalog</Link>
                    </div>
                </div>
            </section>

            {/* 4. BRAND STORY */}
            <section className="brand-story section" style={{ backgroundColor: 'var(--color-beige)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div className="story-text">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-text-dark)' }}>The Aura Moment</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-dark)' }}>
                            Aura Elixir was created for the woman who enters a room and owns it quietly.
                            Gloss that doesn’t scream. It glows.
                        </p>
                    </div>
                    <div className="story-image" style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <img src="/images/aura_moment.png" alt="The Aura Moment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* 5. CTA BLOCK */}
            <section className="cta-block section bg-burgundy" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '30px', color: 'var(--color-text-primary)' }}>Find Your Shade. Own Your Glow.</h2>
                    <button className="btn-primary" style={{ backgroundColor: 'var(--color-nude-base)', color: 'var(--color-text-dark)' }}>Shop Now</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
