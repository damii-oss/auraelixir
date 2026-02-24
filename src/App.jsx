import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';

function App() {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin-portal');

    return (
        <ProductProvider>
            <CartProvider>
                <div className="app-container">
                    {!isAdmin && <Navbar />}
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/catalog" element={<CatalogPage />} />
                            <Route path="/checkout" element={<CheckoutPage />} />
                            <Route path="/admin-portal" element={<AdminPage />} />
                        </Routes>
                    </main>
                </div>
            </CartProvider>
        </ProductProvider>
    );
}

export default App;
