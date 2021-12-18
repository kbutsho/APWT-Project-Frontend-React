import React, { useEffect, useState } from 'react';
import FeatureProductCard from './FeatureProductCard';

const FeatureProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
            .then(res => res.json())
            .then(getData => setProducts(getData[1]));
    }, []);
    return (
        <div className="container">
        <h3 className="mt-5 fw-bold text-uppercase">Latest Products</h3>
            <div className="row">
                {
                    products.map(products => <FeatureProductCard product={products}></FeatureProductCard>)
                }
            </div>

        </div>
    );
};

export default FeatureProducts;