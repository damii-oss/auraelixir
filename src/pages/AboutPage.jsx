import React from 'react';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="page-about">
            <section className="bg-dark-plum" style={{ paddingTop: '120px', paddingBottom: '80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--color-text-primary)' }}>About Aura Elixir</h1>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '20px', fontSize: '1.2rem', maxWidth: '600px', margin: '20px auto 0' }}>
                        Aura Elixir was created for the woman who enters a room and owns it quietly.
                    </p>
                </div>
            </section>

            <section className="section bg-beige">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div className="about-image" style={{ height: '500px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <img src="/images/aura_moment.png" alt="Aura Elixir Lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="about-text" style={{ color: 'var(--color-text-dark)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Our Philosophy</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                            We believe that luxury doesn't have to be loud. It can be found in a soft, glowing smile, a confident stride, and the perfect shade of gloss that complements your natural aura.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                            Every Aura Elixir product is formulated with high-quality, nourishing ingredients that provide a rich, non-sticky shine. Our palette is carefully curated to match a variety of skin tones, enhancing the natural beauty of the modern woman.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Designed with love, worn with confidence. Welcome to the world of Aura Elixir.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section bg-cocoa" style={{ color: 'var(--color-text-primary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>The Aura Standard</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-gold)' }}>Cruelty-Free</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Never tested on animals. We believe in beauty without harm.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-gold)' }}>Nourishing Formula</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Infused with natural oils to keep your lips hydrated all day.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-gold)' }}>Premium Packaging</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Elegance you can feel, designed to be shown off.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
