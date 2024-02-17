import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Products from "../../components/Products";
import { getProducts } from "../../api/product";
import { removeProduct } from "../../api/product";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleRemove = async (id) => {
    const confirm = window.confirm("Bạn có muốn xóa không ?");
    if (confirm) {
      try {
        await removeProduct(id);
        const remove = products.filter((item) => item.id !== id);
        setProducts(remove);
      } catch (err) {
        console.log(err);
      }
      toast.error("Xóa thành công");
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="flex h-[100%]">
        <SideBar />
        <main className="flex-1 p-4 bg-gray-200">
          <h1 className="text-[32px] font-bold">Quản lý sản phẩm</h1>
          <div className="grid grid-cols-1 gap-4 mt-3">
            <Products products={products} handleRemove={handleRemove} />
          </div>
          <div className="mt-8">
            <Link
              to="/admin/add-product"
              className="p-5 rounded-full bg-blue-500 text-white"
            >
              Thêm sản phẩm
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
