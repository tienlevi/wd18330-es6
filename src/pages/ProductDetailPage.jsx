import { useState, useEffect } from "react";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { getProductById } from "../api/product";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);
  return (
    <>
      <HeaderWebsite />
      <main className="flex flex-col min-h-screen">
        <div className="w-[1000px] mx-auto mt-6">
          <h1 className="text-[30px] text-center font-bold">
            Chi tiết Sản phẩm
          </h1>

          <Link
            to="/product"
            className="text-[19px] p-4 rounded w-[300px] h-[100px]"
          >
            <ArrowBackIcon />
            Quay lại trang sản phẩm
          </Link>
          <div className="flex mt-8">
            <div>
              <img src={product.image} alt="" width={300} height={300} />
            </div>
            <div className="pl-4">
              <p className="text-[23px] mb-2">Tên sản phẩm: {product.name}</p>
              <p className="text-[23px] mb-2">Giá tiền: {product.price}đ</p>
              <p className="text-[23px] mb-2">Danh mục: {product.category}</p>
              <p className="text-[23px] mb-2">Mô tả: {product.description}</p>
              <p className="text-[23px] mb-2">
                Tình trạng: <span className="text-green-500">Còn hàng</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterWebsite />
    </>
  );
}

export default ProductDetailPage;
