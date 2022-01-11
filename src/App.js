import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Detail from "./components/Detail";
// Routes
import { Route, Routes } from "react-router-dom";
// NavBar
import NavBar from "./components/NavBar";

// let cookiesDetails = products.map((element) => <ProductList cookie={cookie})

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-list/detail/:cookieId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
