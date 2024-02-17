import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditProduct from "../../components/EditProduct";
import { editProduct } from "../../api/product";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Edit() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  console.log(products);
  const handleEdit = async (product) => {
    const confirm = window.confirm("Bạn có muốn sua không ?");
    if (confirm) {
      try {
        await editProduct(product);
        const update = products.map((item) =>
          item.id === product.id ? product : item
        );
        setProducts(update);
        navigate("/admin/product");
        toast.success("Sửa thành công");
        return update;
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <ToastContainer />

      <Header />
      <EditProduct onEdit={handleEdit} />
      <Footer />
    </>
  );
}

export default Edit;
