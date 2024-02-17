/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
//Restore modern
import { useState, useEffect } from "react";

import SideBar from "../components/SideBar";
import { getProfileId } from "../api/profile";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditProfile({ onEdit }) {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProfileId(id);
        reset(response);
        setProfile(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const onSubmit = (data) => {
    onEdit(data);
    console.log(data);
    toast.success("Sửa thành công");
    // navigate("/admin");
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
            Tên
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Tuổi
          </label>
          <input
            type="number"
            id="age"
            {...register("age")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Địa chỉ
          </label>
          <input
            type="text"
            id="address"
            {...register("address")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product price"
            required
          />
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

export default EditProfile;
