import { useState, useEffect } from "react";
import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { Link } from "react-router-dom";
import { getProfile } from "../api/profile";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProfile();
        setUsers(response);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const checkLogin = users.find(
      (user) => user.username === username && user.password === password
    );
    if (checkLogin) {
      console.log("Dang nhap thanh cong");
    } else {
      console.log("Dang nhap that bai");
    }
  };

  return (
    <>
      <HeaderWebsite />
      <h2 className="text-center font-bold text-[32px]">Đăng nhập</h2>
      <form onSubmit={handleLogin} className="w-[280px] mx-auto">
        <input
          className="w-[280px] h-[35px] text-[18px] border-[1px] border-black mt-4 pl-3 rounded-[20px] focus:outline-none"
          type="text"
          placeholder="user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-[280px] h-[35px] text-[18px] border-[1px] border-black mt-4 pl-3 rounded-[20px] focus:outline-none"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-[280px] h-[40px] text-[20px] mt-4 text-blue border-blue-400 border-[1px] duration-300 rounded-[20px] uppercase hover:bg-blue-500 hover:text-white">
          Login
        </button>
        <div className="mt-2">
          <p className="text-[17px] text-center mt-2">
            Bạn chưa có tài khoản ?
            <Link className="text-lightBlue ml-1 decoration-auto" to="/SignUp">
              Đăng ký
            </Link>
          </p>
        </div>
      </form>
      <FooterWebsite />
    </>
  );
}

export default Login;
