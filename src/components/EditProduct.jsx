/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import { getProducts } from "../api/product";
import { getProductById } from "../api/product";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditProduct({ onEdit }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProductById(id);
        reset(response);
        setProduct(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id, reset]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProducts();
        reset(response);
        setProducts(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
    console.log(products);
  }, []);
  const onSubmit = (data) => {
    onEdit(data);
    console.log(data);
    toast.success("Sửa thành công");
    navigate("/admin/product");
  };
  return (
    <div className="flex h-screen">
      <ToastContainer />
      <SideBar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 p-4 bg-gray-200"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="name"
            value={product.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Giá
          </label>
          <input
            type="number"
            id="price"
            value={product.price}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Danh mục
          </label>
          <select name="" id="category">
            {products.map((item) => (
              <option
                value={product.id === item.id ? product.id : item.id}
                key={item.id}
              >
                {product.category === item.category
                  ? product.category
                  : item.category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Ảnh
          </label>
          <input
            type="text"
            id="image"
            {...register("image")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Mô tả
          </label>
          <textarea
            id="description"
            name="description"
            {...register("description")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Sửa
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
