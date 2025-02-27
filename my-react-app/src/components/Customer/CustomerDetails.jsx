import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get(`/api/customers/${id}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error('There was an error fetching the customer details:', error));
  }, [id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h2>{customer.name}</h2>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
};

export default CustomerDetails;
