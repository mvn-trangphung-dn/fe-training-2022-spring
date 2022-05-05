import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from './features/layouts';
import PrivateRoute from "./core/guards/PrivateRoute/index.jsx";
import { Home, AboutUs } from "./features/pages";
import Register from "./features/auth/Register";
import Login from "./features/auth/Login";
import ProductInfo from "./features/pages/ProductInfo";

// const Auth = React.lazy(() => import('./features/auth/Auth/index.jsx'));
const Account = React.lazy(() => import('./features/account/Account/index.jsx'));
const ProductList = React.lazy(() => import('./features/pages/ProductList/index.jsx'));

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
