import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateCustomerForm = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get(`/api/customers/${id}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error('There was an error fetching the customer details:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/customers/${id}`, customer)
      .then(response => console.log('Customer updated:', response.data))
      .catch(error => console.error('There was an error updating the customer:', error));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={customer.name} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={customer.email} onChange={handleChange} required />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" value={customer.phone} onChange={handleChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">Update Customer</Button>
    </Form>
  );
};

export default UpdateCustomerForm;
