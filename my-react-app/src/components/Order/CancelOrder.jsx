import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

const CancelOrder = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleCancel = () => {
    axios.delete(`/api/orders/${id}`)
      .then(response => {
        console.log('Order cancelled:', response.data);
        history.push('/orders');
      })
      .catch(error => console.error('There was an error cancelling the order:', error));
  };

  return (
    <Button variant="danger" onClick={handleCancel}>Cancel Order</Button>
  );
};

export default CancelOrder;
