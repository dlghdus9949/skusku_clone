import React from "react";
import logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <>
      {/* ✅ 모바일 네비 */}
      <div className="top-0 mobileNavbar fontEB fixed z-10 w-full mx-auto text-white transition-all duration-300 lg:hidden">
        <div className="Navbar flex justify-between p-5">
          <a href="/">
            <div className="flex items-center">
              <img className="w-20 opacity-100" src={logo} alt="likelion_logo" />
            </div>
          </a>
          <div className="off-screen-menu hidden bg-black text-white flex justify-center tracking-[1px]"></div>
          <div className="flex items-center space-x-2">
            <div className="mr-1 hamburger-menu cursor-pointer z-20">
              <div className="ham-bar bar-top bg-white"></div>
              <div className="ham-bar bar-mid bg-white"></div>
              <div className="ham-bar bar-bottom bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ PC 네비 */}
      <div className="pcNav fixed z-50 top-0 w-full mx-auto transition-all duration-300 hidden lg:flex backdrop-blur-md">
        <div className="container flex items-center justify-between px-5 py-3 mx-auto">
          <a href="/">
            <div className="flex items-center">
              <img className="w-9" src={logo} alt="likelion_logo" />
              <span className="text-[#3B79FF] fontBlack text-2xl ml-2">LIKELION SKU</span>
            </div>
          </a>

          <ul className="relative flex items-center text-white">
            <button
              aria-haspopup="menu"
              aria-expanded="false"
              aria-controls=":r0:"
              tabIndex="0"
              type="button"
              className="MuiMenuButton-root MuiMenuButton-variantNautral MuiMenuButton-colorNeutral MuiMenuButton-sizeMd ignoreBtn css-1q9ydw1"
            >
              <a href="/">
                <li
                  className="menuStyle"
                  style={{
                    position: "relative",
                    padding: "0.2rem 1rem",
                    textAlign: "center",
                    transition: "0.3s",
                  }}
                   onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
                >
                  TRACK
                </li>
              </a>
            </button>
            <a href="/project">
              <li
                className="menuStyle"
                style={{
                  position: "relative",
                  padding: "0.2rem 1rem",
                  textAlign: "center",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
              >
                PROJECT
              </li>
            </a>
            <a href="/teamIntro">
              <li
                className="menuStyle"
                style={{
                  position: "relative",
                  padding: "0.2rem 1rem",
                  textAlign: "center",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
              >
                TEAM
              </li>
            </a>
            <a href="/contact">
              <li
                className="menuStyle"
                style={{
                  position: "relative",
                  padding: "0.2rem 1rem",
                  textAlign: "center",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
              >
                CONTACT
              </li>
            </a>
            <a href="/cyberCampus/Intro">
              <li
                className="menuStyle"
                style={{
                  position: "relative",
                  padding: "0.2rem 1rem",
                  textAlign: "center",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
                onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
              >
                CYBERCAMPUS
              </li>
            </a>
          </ul>

          <div className="flex justify-end">
            <div className="flex items-center justify-center">
              <div className="flex items-center text-white">
                <div
                  className="flex items-center justify-center w-[30px] h-[30px] rounded-full"
                  style={{ backgroundColor: "rgb(255, 120, 22)" }}
                >
                  🦁
                </div>
                <span className="px-2 text-xs">FRONT-END</span>
                <span className="font-bold">김민규님</span>
              </div>
              <div className="px-2 text-[gray]">|</div>
              <button className="text-xs text-white">LOGOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
