import './App.css';
import './assets/styling/styles.scss';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Header, Footer } from './feature/layouts';
import { Home, AboutUs, ProductList } from './feature/pages'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
