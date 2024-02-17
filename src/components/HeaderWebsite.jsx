import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

function HeaderWebsite() {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    window.location.href = `/search?name=${search}`;
  };
  return (
    <header className="flex items-center justify-around bg-gray-800 text-white py-4 px-6">
      <div>
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>
      <ul className="flex justify-center">
        <Link to="/" className="px-2">
          Trang chủ
        </Link>
        <Link to="/product" className="px-2">
          Sản phẩm
        </Link>
        <Link to="/category" className="px-2">
          Danh mục
        </Link>
        <Link to="/about" className="px-2">
          About
        </Link>
      </ul>
      <div
        className="flex items-center"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black focus:outline-none w-[150px] h-[30px] pl-2"
          placeholder="Tìm kiếm sản phẩm"
        />
        <div onClick={handleSearch}>
          <SearchIcon
            className="bg-white text-black cursor-pointer"
            style={{ height: 30 }}
          />
        </div>
        <Link to="/profile">
          {" "}
          <PersonIcon
            className="ml-3 text-white cursor-pointer"
            style={{ height: 30, fontSize: 30 }}
          />
        </Link>
      </div>
    </header>
  );
}

export default HeaderWebsite;
