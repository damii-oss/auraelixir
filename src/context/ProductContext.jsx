import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();
export const useProducts = () => useContext(ProductContext);

const defaultProducts = [
    { id: 1, name: "Velvet Nude", vibe: "Soft Boss Energy", price: 12000, image: "/images/velvet_nude.png" },
    { id: 2, name: "Champagne Glow", vibe: "Rich Girl Aesthetic", price: 12500, image: "/images/champagne_glow.png" },
    { id: 3, name: "Deep Berry", vibe: "After Dark Seduction", price: 13000, image: "/images/deep_berry.png" },
    { id: 4, name: "Crystal Clear", vibe: "Everyday Glass", price: 11000, image: "/images/hero_gloss.png" },
    { id: 5, name: "Rose Blush", vibe: "Feminine Power", price: 12000, image: "/images/velvet_nude.png" },
    { id: 6, name: "Honey Glazed", vibe: "Warm & Seductive", price: 12500, image: "/images/champagne_glow.png" },
];

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem('aura_products');
        if (saved) {
            return JSON.parse(saved);
        }
        return defaultProducts;
    });

    // Sync to local storage whenever products change
    useEffect(() => {
        localStorage.setItem('aura_products', JSON.stringify(products));
    }, [products]);

    const addProduct = (newProduct) => {
        setProducts([...products, { ...newProduct, id: Date.now() }]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const resetToDefault = () => {
        setProducts(defaultProducts);
    }

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, resetToDefault }}>
            {children}
        </ProductContext.Provider>
    );
};
