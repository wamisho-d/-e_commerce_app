import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const PlaceOrderForm = () => {
  const [order, setOrder] = useState({ customerId: '', products: [] });
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('There was an error fetching the customers:', error));

    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error fetching the products:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleProductChange = (e) => {
    const { value, checked } = e.target;
    const selectedProducts = checked
      ? [...order.products, value]
      : order.products.filter(productId => productId !== value);
    setOrder({ ...order, products: selectedProducts });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/orders', order)
      .then(response => console.log('Order placed:', response.data))
      .catch(error => console.error('There was an error placing the order:', error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCustomer">
        <Form.Label>Customer</Form.Label>
        <Form.Control as="select" name="customerId" value={order.customerId} onChange={handleChange} required>
          <option value="">Select a customer</option>
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>{customer.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formProducts">
        <Form.Label>Products</Form.Label>
        {products.map(product => (
          <Form.Check
            key={product.id}
            type="checkbox"
            label={`${product.name} - $${product.price}`}
            value={product.id}
            onChange={handleProductChange}
          />
        ))}
      </Form.Group>
      <Button variant="primary" type="submit">Place Order</Button>
    </Form>
  );
};

export default PlaceOrderForm;
