import { getProducts } from "../api/product";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";

function SearchPage() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const search = param.get("name");
  const filter = useRef(false);

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

  filter.current = products.filter((item) =>
    item.name.toLowerCase().includes(search?.toLowerCase())
  );
  return (
    <>
      {" "}
      <HeaderWebsite />
      <main className="flex flex-col min-h-screen">
        <h1 className="text-[30px] text-center font-bold">Kết quả: {search}</h1>
        <div className="w-[1000px] mx-auto my-5 grid grid-cols-3">
          {filter &&
            filter.current.map((item) => (
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
      <FooterWebsite />
    </>
  );
}

export default SearchPage;
