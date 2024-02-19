import { useState, useEffect, useMemo } from "react";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const value = localStorage.getItem("cart");
    value && setCart(JSON.parse(value));
  }, []);

  const total = useMemo(() => {
    return cart.reduce((cash, item) => cash + item.price, 0);
  }, [cart]);

  const removeCart = (id) => {
    setCart((items) => {
      const remove = items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(remove));
      return remove;
    });
  };

  return (
    <>
      <HeaderWebsite />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        theme="colored"
        pauseOnHover={false}
        style={{ width: "300px", height: "50px" }}
      />
      <div className="max-w-[1200px] mt-[30px] mx-auto xl:w-[1000px] lg:w-[720px] md:w-[500px] sm:w-[350px] xs:w-[200px]">
        <h1 className="text-[29px] font-bold text-center">Giỏ hàng</h1>
        <div className="flex my-[20px] lg:flex lg:flex-col">
          <div className="w-[70%] lg:w-[100%] sm:px-1">
            {cart &&
              cart.map((item, index) => (
                <div
                  className="flex justify-between mb-4 md:flex-col"
                  key={index}
                >
                  <div className="flex xs:flex-col xs:w-[200px]">
                    <div className="block">
                      <img
                        className="w-[250px] h-[350px] object-cover md:w-[200px] md:h-[250px]"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-4 w-[400px] break-words lg:flex-col sm:w-[300px] xs:ml-0 xs:w-[200px]">
                      <div className="">
                        <h2 className="text-[27px] font-bold md:text-[20px]">
                          {item.name}
                        </h2>
                        <p className="mt-3 text-[18px]">{item.origin}</p>
                        <b className="mt-3 text-[21px] text-red font-bold text-right">
                          {item.price}$
                        </b>
                      </div>
                      {/* <div className="flex my-3">
                        <p
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex items-center justify-center w-[30px] h-[30px] text-[20px] border-black border-[1px] cursor-pointer"
                        >
                          -
                        </p>
                        <p className="text-center w-[30px] border-black border-[1px]">
                          {item.quantity}
                        </p>
                        <p
                          onClick={() => increaseQuantity(item.id)}
                          className="flex items-center justify-center w-[30px] h-[30px] text-[20px] border-black border-[1px] cursor-pointer"
                        >
                          +
                        </p>
                      </div> */}
                      <div onClick={removeCart(item.id)} className="mt-3">
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {cart.length <= 0 && (
              <h1 className="text-[29px] font-bold">No Product here</h1>
            )}
          </div>
          <div className="w-[30%] pl-4 lg:w-[100%] lg:pl-0">
            <div className="flex justify-between">
              <div>
                <h2 className="text-[23px] font-bold mb-2 md:text-[20px]">
                  All Products:
                </h2>
                <h2 className="text-[23px] font-bold mb-2 md:text-[20px]">
                  Sale:
                </h2>
                <h2 className="text-[23px] font-bold mb-2 md:text-[20px]">
                  Total:
                </h2>
              </div>
              <div className="text-right">
                <h2 className="text-[23px] font-bold mb-2 md:text-[20px]">
                  {total}$
                </h2>
                <h2 className="text-[23px] font-bold mb-2 md:text-[20px]">
                  0$
                </h2>
                <h2 className="text-[23px] font-bold mb-2 md:text-[20px]">
                  {total}$
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterWebsite />
    </>
  );
}

export default Cart;
