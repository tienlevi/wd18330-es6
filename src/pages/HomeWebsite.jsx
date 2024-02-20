import { useState, useEffect } from "react";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { getProducts } from "../api/product";
import { Link } from "react-router-dom";
import AddToCart from "../components/AddToCart";
import { ToastContainer, toast } from "react-toastify";

function Home() {
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
      <HeaderWebsite />
      <ToastContainer />
      <div className="flex flex-col min-h-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy9BiFLojzOeQX_Dnsld6rs5hk9dMszUhcw&usqp=CAU"
          alt=""
          className="w-full h-[400px] object-cover"
        />
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-[1000px] mx-auto">
            <h1 className="text-[32px] font-bold mt-2 mb-4 text-center">
              Sản phẩm
            </h1>
            <div className="my-5 grid grid-cols-3">
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
          </div>
        </main>
      </div>
      <FooterWebsite />
    </>
  );
}

export default Home;
