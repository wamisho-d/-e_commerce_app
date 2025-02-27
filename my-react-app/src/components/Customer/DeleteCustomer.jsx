import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

const DeleteCustomer = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    axios.delete(`/api/customers/${id}`)
      .then(response => {
        console.log('Customer deleted:', response.data);
        history.push('/customers');
      })
      .catch(error => console.error('There was an error deleting the customer:', error));
  };

  return (
    <Button variant="danger" onClick={handleDelete}>Delete Customer</Button>
  );
};

export default DeleteCustomer;
