import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FrontTemplate from './FrontTemplate';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontTemplate />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
