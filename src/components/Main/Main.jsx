import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from '../../pages/Profile/Profile';
import OrderList from '../../pages/Profile/Orders/OrderList/OrderList';
import OrderDetail from '../../pages/Profile/Orders/OrderDetail/OrderDetail';
import UserInfo from '../../pages/Profile/UserInfo/UserInfo';

// Connections
import {
  Home,
  ProductsPage,
  ProductContent,
  AsketQuestions,
  Basket,
  Login,
} from "../../pages";

import Register from "../Register/Register";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import ResetPassword from '../ResetPassword/ResetPassword';


const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="" element={<Home />} exact></Route>
        <Route path="/profile" element={<Profile />} >
          <Route path="order-detail" element={<OrderDetail />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="user-info" element={<UserInfo />} />
        </Route>
        <Route path="/products/:categoryName/:page" element={<ProductsPage />} />
        <Route path="productContent/:id" element={<ProductContent />}></Route>
        <Route path="asketQuestions" element={<AsketQuestions />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="basket" element={<Basket />}></Route>
        <Route path="forgetPassword" element={<ForgetPassword />}></Route>
        <Route path="resetPassword/:passwordToken" element={<ResetPassword />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
