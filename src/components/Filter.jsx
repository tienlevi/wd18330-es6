/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/product";
import { getCategories } from "../api/category";

// eslint-disable-next-line react/prop-types
function Filter({ items, selectCategory, onSelectCategory }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const filteredItems = selectCategory
    ? // eslint-disable-next-line react/prop-types
      items.filter((item) => item.category === selectCategory)
    : items;
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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <h1 className="text-[30px] text-center font-bold">Danh mục</h1>
        <div className="w-[1000px] mx-auto mt-4 grid grid-cols-3">
          {categories.map((item) => (
            <p
              key={item.id}
              onClick={() => onSelectCategory(item.name)}
              className={`${
                selectCategory === item.name
                  ? "bg-blue-400 text-white"
                  : "text-blue-400"
              } border-[1px] border-blue-400 mx-[10px] p-2 rounded-[5px] hover:bg-blue-400 hover:text-white duration-100 cursor-pointer`}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="w-[1000px] mx-auto my-5 grid grid-cols-3">
          {filteredItems &&
            filteredItems.map((item) => (
              <div key={item.id} className="w-[300px] my-2">
                <img
                  src={item.image}
                  alt=""
                  width={300}
                  height={300}
                  className="object-cover w-[300px] h-[300px]"
                />

                <h1 className="text-[24px] font-bold my-3"> {item.name}</h1>
                <p className="my-3">{item.price}đ</p>
                <Link
                  className="p-4 flex justify-center bg-black text-white rounded text-center"
                  to={`/product-detail/${item.id}`}
                >
                  Chi tiết sản phẩm
                </Link>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}

export default Filter;
