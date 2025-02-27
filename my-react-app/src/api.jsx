import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const createCustomer = (customer) => api.post('/customers', customer);
export const fetchCustomer = (id) => api.get(`/customers/${id}`);
export const updateCustomer = (id, customer) => api.put(`/customers/${id}`, customer);
export const deleteCustomer = (id) => api.delete(`/customers/${id}`);

export const createProduct = (product) => api.post('/products', product);
export const fetchProduct = (id) => api.get(`/products/${id}`);
export const updateProduct = (id, product) => api.put(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);
export const restockProduct = (id) => api.post(`/products/${id}/restock`);
export const fetchProducts = () => api.get('/products');

export const placeOrder = (order) => api.post('/orders', order);
export const fetchOrders = () => api.get('/orders');
export const fetchOrderTotal = (orderId) => api.get(`/orders/${orderId}/total`);
export const cancelOrder = (id) => api.delete(`/orders/${id}`);
