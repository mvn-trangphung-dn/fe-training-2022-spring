import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from './feature/layouts';
import PrivateRoute from "./core/guards/PrivateRoute/index.jsx";
import { Home, AboutUs } from "./feature/pages";
import Register from "./feature/auth/Register";
import Login from "./feature/auth/Login";
import ProductInfo from "./feature/pages/ProductInfo";

// const Auth = React.lazy(() => import('./feature/auth/Auth/index.jsx'));
const Account = React.lazy(() => import('./feature/account/Account/index.jsx'));
const ProductList = React.lazy(() => import('./feature/pages/ProductList/index.jsx'));

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-main">
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductInfo />} />
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
