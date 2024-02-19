import { useState, useEffect } from "react";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { getProducts } from "../api/product";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AddToCart from "../components/AddToCart";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
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
    const value = localStorage.getItem("cart");
    value && setCart(JSON.parse(value));
  }, []);

  const handleAddToCart = (pro) => {
    const add = {
      id: pro.id,
      name: pro.name,
      price: pro.price,
      category: pro.category,
      image: pro.image,
      description: pro.description,
    };
    const exitProduct = cart.find((item) => item.id === pro.id);
    if (exitProduct) {
      toast.warning("Bạn đã thêm sản phẩm này rồi");
      return false;
    } else {
      setCart(() => {
        const list = [...cart, add];
        localStorage.setItem("cart", JSON.stringify(list));
        return list;
      });
      toast.success("Thêm giỏ hàng thành công");
    }
  };

  return (
    <>
      <ToastContainer />
      <HeaderWebsite />
      <main className="flex flex-col min-h-screen">
        <h1 className="text-[30px] text-center font-bold">Sản phẩm</h1>
        <div className="w-[1000px] mx-auto my-5 grid grid-cols-3">
          {products.map((item) => (
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
              <AddToCart
                id={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                image={item.image}
                description={item.description}
                handleAdd={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </main>
      <FooterWebsite />
    </>
  );
}

export default ProductPage;
