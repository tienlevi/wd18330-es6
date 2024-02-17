import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ul className="mt-4">
          <li className="py-3">
            <Link to="/admin" className="text-blue-300 hover:text-blue-200">
              Trang Chủ
            </Link>
          </li>
          <li className="py-3">
            <Link
              to="/admin/product"
              className="text-blue-300 hover:text-blue-200"
            >
              Sản phẩm
            </Link>
          </li>
          <li className="py-3">
            <Link to="/" className="text-blue-300 hover:text-blue-200">
              Đăng xuất
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
