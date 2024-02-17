import { useState, useEffect } from "react";
import HeaderWebsite from "../../components/HeaderWebsite";
import Footer from "../../components/Footer";
import { getProfile } from "../../api/profile";
import { Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProfile();
        setProfile(response);
        console.log(profile);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <>
      <HeaderWebsite />
      <div className="flex h-screen">
        <main className="flex-1 p-4">
          <h1 className="text-[32px] font-bold">Hồ sơ</h1>
          {profile.map((item) => (
            <div key={item.id}>
              <h1 className="text-[28px] my-3">Tên: {item.name}</h1>
              <h1 className="text-[28px] my-3">Tuổi: {item.age}</h1>
              <h1 className="text-[28px] my-3">Địa chỉ: {item.address}</h1>
              <h1 className="text-[28px] mt-3 mb-10">
                Số điện thoại: {item.phone}
              </h1>
            </div>
          ))}
          <Link
            to="/profile/update/1"
            className="p-5 mt-4 rounded-full bg-blue-500 text-white"
          >
            Cập nhật hồ sơ
          </Link>
          <Link
            to="/"
            className="p-5 mt-4 ml-5 rounded-full bg-black text-white"
          >
            Đăng xuất
          </Link>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
