/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddProduct from "../../components/AddProduct";
import { addProduct, getProducts } from "../../api/product";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Add() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const handleAdd = async (product) => {
    const confirm = window.confirm("Bạn có muốn them không ?");
    if (confirm) {
      try {
        const data = await addProduct(product);

        setProducts(() => {
          const list = [...products, data];
          return list;
        });
        toast.success("Them thanh cong");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Header />
      <AddProduct onAdd={handleAdd} />
      <Footer />
    </>
  );
}

export default Add;
