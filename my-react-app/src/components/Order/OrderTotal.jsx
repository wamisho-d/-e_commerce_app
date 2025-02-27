import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderTotal = ({ orderId }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(`/api/orders/${orderId}/total`)
      .then(response => setTotal(response.data.total))
      .catch(error => console.error('There was an error calculating the order total:', error));
  }, [orderId]);

  return (
    <div>
      <h3>Order Total: ${total}</h3>
    </div>
  );
};

export default OrderTotal;
