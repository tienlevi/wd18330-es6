/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SideBar from "./SideBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddProduct({ onAdd }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    onAdd(data);
    toast.success("Them thanh cong");
    navigate("/admin/product");
  };

  return (
    <>
      {" "}
      <ToastContainer />
      <div className="flex h-screen">
        <SideBar />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 p-4 bg-gray-200"
        >
          <h1 className="text-2xl font-bold mb-4">Add Product</h1>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Tên sản phẩm
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Giá tiền
            </label>
            <input
              type="number"
              id="price"
              {...register("price")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Danh mục
            </label>
            <input
              type="number"
              id="category"
              {...register("category")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Ảnh
            </label>
            <input
              type="text"
              id="image"
              {...register("image")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              {...register("description")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Thêm
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
