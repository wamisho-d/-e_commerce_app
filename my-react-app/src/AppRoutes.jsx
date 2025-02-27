import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateCustomerForm from './components/Customer/CreateCustomerForm';
import CustomerDetails from './components/Customer/CustomerDetails';
import UpdateCustomerForm from './components/Customer/UpdateCustomerForm';
import DeleteCustomer from './components/Customer/DeleteCustomer';
import CreateProductForm from './components/Product/CreateProductForm';
import ProductDetails from './components/Product/ProductDetails';
import UpdateProductForm from './components/Product/UpdateProductForm';
import DeleteProduct from './components/Product/DeleteProduct';
import ProductConfirmationModal from './components/Product/ProductConfirmationModal';
import ProductList from './components/Product/ProductList';
import ProductStock from './components/Product/ProductStock';
import PlaceOrderForm from './components/Order/PlaceOrderForm';
import OrderHistory from './components/Order/OrderHistory';
import CancelOrder from './components/Order/CancelOrder';
import OrderTotal from './components/Order/OrderTotal';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/customers/create" component={CreateCustomerForm} />
        <Route path="/customers/:id" component={CustomerDetails} />
        <Route path="/customers/update/:id" component={UpdateCustomerForm} />
        <Route path="/customers/delete/:id" component={DeleteCustomer} />
        <Route path="/products/create" component={CreateProductForm} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products/update/:id" component={UpdateProductForm} />
        <Route path="/products/delete/:id" component={DeleteProduct} />
        <Route path="/products/confirmation" component={ProductConfirmationModal} />
        <Route path="/products" component={ProductList} />
        <Route path="/products/stock" component={ProductStock} />
        <Route path="/orders/create" component={PlaceOrderForm} />
        <Route path="/orders/history" component={OrderHistory} />
        <Route path="/orders/cancel/:id" component={CancelOrder} />
        <Route path="/orders/total/:orderId" component={OrderTotal} />
     
      </Routes>
    </Router>
  );
};

export default AppRoutes;
