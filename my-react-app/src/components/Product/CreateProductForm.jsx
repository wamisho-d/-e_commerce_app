import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/products', product)
      .then(response => console.log('Product created:', response.data))
      .catch(error => console.error('There was an error creating the product:', error));
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
      <Button variant="primary" type="submit">Create Product</Button>
    </Form>
  );
};

export default CreateProductForm;
