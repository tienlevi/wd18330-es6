import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../api/product";
import Title from "../components/Title";
import HeaderWebsite from "../components/HeaderWebsite";
import Filter from "../components/Filter";
import FooterWebsite from "../components/FooterWebsite";

function Category() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const selectCategory = new URLSearchParams(location.search).get("cate");
  const handleSelectCategory = (category) => {
    const searchParams = new URLSearchParams();
    searchParams.set("cate", category);
    const newURL = `${location.pathname}?${searchParams.toString()}`;
    window.history.pushState(null, "", newURL);
    window.location.reload();
  };

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
      <Filter
        items={products}
        selectCategory={selectCategory}
        onSelectCategory={handleSelectCategory}
      />
      <FooterWebsite />
    </>
  );
}

export default Category;
