import HomeWebsite from "./pages/HomeWebsite";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import HomeAdmin from "./pages/admin/Home";
import AddPage from "./pages/admin/AddPage";
import EditPage from "./pages/admin/EditPage";
import ProductPage from "./pages/admin/ProductPage";
import Profile from "./pages/user/Profile";
import Update from "./pages/user/Update";
import SearchPage from "./pages/SearchPage";
import Category from "./pages/Category";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeWebsite />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product-detail/:id" element={<ProductDetailPage />} />
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/admin/product" element={<ProductPage />} />
      <Route path="/admin/add-product" element={<AddPage />} />
      <Route path="/admin/edit-product/:id" element={<EditPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/update/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
