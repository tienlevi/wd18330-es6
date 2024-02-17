import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";

function Home() {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <SideBar />
        <main className="flex-1 p-4 bg-gray-200">
          <h1 className="text-[32px] font-bold">Trang chủ Admin</h1>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
