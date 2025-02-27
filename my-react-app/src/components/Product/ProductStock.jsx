import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductStock = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error fetching the products:', error));
  }, []);

  const handleRestock = (id) => {
    axios.post(`/api/products/${id}/restock`)
      .then(response => {
        setProducts(products.map(product => product.id === id ? response.data : product));
      })
      .catch(error => console.error('There was an error restocking the product:', error));
  };

  return (
    <div>
      <h2>Product Stock Levels</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - Stock: {product.stock}
            <button onClick={() => handleRestock(product.id)}>Restock</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductStock;
