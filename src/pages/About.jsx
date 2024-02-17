import HeaderWebsite from "../components/HeaderWebsite";
import FooterWebsite from "../components/FooterWebsite";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <HeaderWebsite />
      <div className="flex flex-col min-h-screen">
        <Outlet />
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">About Page</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor dapibus velit, quis lacinia tortor fringilla id. Curabitur
              sit amet justo ut tellus efficitur rutrum. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer vulputate ante vitae sem luctus, id lobortis metus
              condimentum. Donec ac ex vestibulum, consectetur neque a, eleifend
              mi. Curabitur nec malesuada mi. Maecenas auctor urna ut lobortis
              dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; In hac habitasse platea dictumst.
              Fusce dapibus, diam eget facilisis lobortis, orci tellus ultricies
              nisl, sed vulputate orci libero in felis. Quisque sed vestibulum
              magna. Quisque aliquet auctor velit, id imperdiet sem lacinia eu.
              Curabitur euismod posuere condimentum.
            </p>
          </div>
        </main>
      </div>
      <FooterWebsite />
    </>
  );
}

export default About;
