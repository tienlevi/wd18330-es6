/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProductPage({ products, handleRemove }) {
  return (
    <table>
      <tbody>
        <tr className="text-left">
          <th className="w-[50px] p-2">Id</th>
          <th className="w-[200px] p-2">Ảnh</th>
          <th className="w-[200px] p-2">Tên sản phẩm</th>
          <th className="w-[200px] p-2">Giá</th>
          <th className="w-[200px] p-2">Danh mục</th>
          <th className="w-[200px] p-2">Mô tả</th>
          <th className="w-[200px] p-2">Chức năng</th>
        </tr>
        {products.map((item, index) => (
          <tr className="text-left" key={index}>
            <td className="p-2">{index + 1}</td>
            <td className="p-2">
              <img
                src={item.image}
                alt=""
                width={150}
                className="object-cover"
              />
            </td>
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.price}</td>
            <td className="p-2">{item.category}</td>
            <td className="p-2">{item.description}</td>
            <td className="p-2">
              <button
                onClick={() => handleRemove(item.id)}
                className="w-[75px] h-[50px] mx-1 rounded-full bg-red-600 text-white"
              >
                Xóa
              </button>
              <button className="w-[75px] h-[50px] mx-1 rounded-full bg-blue-600 text-white">
                <Link to={`/admin/edit-product/${item.id}`}>Sửa</Link>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductPage;
