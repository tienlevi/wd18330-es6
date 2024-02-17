import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EditProfile from "../../components/EditProfile";
import { updateProfile } from "../../api/profile";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const handleEdit = async (product) => {
    const confirm = window.confirm("Bạn có muốn cập nhật không ?");
    if (confirm) {
      try {
        await updateProfile(product);
        const update = profile.map((item) =>
          item.id === product.id ? product : item
        );
        setProfile(update);
        navigate("/profile");
        console.log(update);
        return update;
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <Header />
      <EditProfile onEdit={handleEdit} />
      <Footer />
    </>
  );
}

export default Update;
