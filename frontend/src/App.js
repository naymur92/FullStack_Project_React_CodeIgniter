import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FrontTemplate from './FrontTemplate';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import Farm from './pages/Farm';
import Home from './pages/Home';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Register from './pages/Register';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontTemplate />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/farm" element={<Farm />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
