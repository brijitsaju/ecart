
import { Navbar } from 'react-bootstrap';
import './App.css';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wishlist from './pages/WishList';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;