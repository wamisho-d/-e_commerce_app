import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

const DeleteProduct = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    axios.delete(`/api/products/${id}`)
      .then(response => {
        console.log('Product deleted:', response.data);
        history.push('/products');
      })
      .catch(error => console.error('There was an error deleting the product:', error));
  };

  return (
    <Button variant="danger" onClick={handleDelete}>Delete Product</Button>
  );
};

export default DeleteProduct;
