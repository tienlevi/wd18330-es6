import { useState, useEffect } from "react";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { getProducts } from "../api/product";
import { Link } from "react-router-dom";

function ProductPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProducts();
        console.log(response);
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
              <Link to={`/product-detail/${item.id}`}>Chi tiết sản phẩm</Link>
            </div>
          ))}
        </div>
      </main>
      <FooterWebsite />
    </>
  );
}

export default ProductPage;
