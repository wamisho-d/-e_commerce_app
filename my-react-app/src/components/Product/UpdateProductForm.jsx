import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProductForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', price: '' });

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('There was an error fetching the product details:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/products/${id}`, product)
      .then(response => console.log('Product updated:', response.data))
      .catch(error => console.error('There was an error updating the product:', error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">Update Product</Button>
    </Form>
  );
};

export default UpdateProductForm;
