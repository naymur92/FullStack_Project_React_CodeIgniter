import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
