import { useState, useEffect } from "react";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { getProducts } from "../api/product";
import { Link } from "react-router-dom";

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
  return (
    <>
      <HeaderWebsite />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 bg-gray-100 p-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy9BiFLojzOeQX_Dnsld6rs5hk9dMszUhcw&usqp=CAU"
            alt=""
            className="w-full h-[400px]"
          />
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
