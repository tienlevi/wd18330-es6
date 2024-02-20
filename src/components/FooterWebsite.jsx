import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="">
      <div className="bg-black text-white py-10">
        <div className="w-[1000px] mx-auto">
          <Link href="/">
            <h1 className=" flex items-center text-2xl font-extrabold gap-2 select-none px-5">
              My Website
            </h1>
          </Link>
          <span className="block rounded my-8" />
          <div className="flex items-center justify-between flex-col md:flex-row gap-8 px-5">
            <ul className="flex items-center flex-wrap gap-x-8 gap-y-2 text-xs font-semibold lg:gap-14">
              <li className="hover:text-primary duration-150 cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-primary duration-150 cursor-pointer">
                TRUNG TÂM TRỢ GIÚP
              </li>
              <li className="hover:text-primary duration-150 cursor-pointer">
                ĐIỀU KHOẢN
              </li>
              <li className="hover:text-primary duration-150 cursor-pointer">
                CHÍNH SÁCH
              </li>
            </ul>
            <ul className="flex items-center gap-x-2.5 text-xs font-semibold">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white text-black aspect-square p-2.5 hover:text-primary duration-150"
              >
                <YouTubeIcon />
              </Link>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white text-black aspect-square p-2.5 hover:text-primary duration-150"
              >
                <FacebookIcon />
              </Link>
              <Link
                href=""
                target="  "
                rel="noopener noreferrer"
                className="rounded-full bg-white text-black aspect-square p-2.5 hover:text-primary duration-150"
              >
                <GitHubIcon />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black text-white pt-6 pb-8 px-5">
        <p className="max-w-7xl mx-auto text-center text-sm font-medium">
          Copyright © {new Date().getFullYear()}. All Rights Reserved By Nguyen
          Trach Tien
        </p>
      </div>
    </footer>
  );
}

export default Footer;
