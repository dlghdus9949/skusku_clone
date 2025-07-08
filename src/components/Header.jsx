import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ 햄버거 메뉴 (모바일 전용) */}
      <div
        className="hamburger-menu cursor-pointer fixed top-10 right-8 z-[9999] w-[42px] h-[40px] p-0 lg:hidden"
        onClick={toggleMenu}
      >
        <div
          className={`ham-bar absolute ${
            menuOpen
              ? "w-[42px] h-[2px] rotate-45 top-[19px] left-[0.1px]"
              : "w-full h-[2px] top-0 left-0"
          } bg-white rounded transition-all duration-300`}
        ></div>
        <div
          className={`ham-bar absolute ${
            menuOpen ? "opacity-0" : "w-full h-[2px] top-[17px] left-0"
          } bg-white rounded transition-all duration-300`}
        ></div>
        <div
          className={`ham-bar absolute ${
            menuOpen
              ? "w-[42px] h-[2px] -rotate-45 top-[19px] left-0"
              : "w-full h-[2px] bottom-1 left-0"
          } bg-white rounded transition-all duration-300`}
        ></div>
      </div>

      {/* ✅ 모바일 네비게이션 */}
      <div
        className={`top-0 mobileNavbar fontEB fixed z-10 w-full mx-auto text-white transition-all duration-300 backdrop-brightness-75 ${
          isTop ? "backdrop-brightness-100" : ""
        } lg:hidden`}
      >
        <div className="Navbar flex justify-between p-5 backdrop-blur-md">
          {/* 모바일 로고 */}
          <a href="/">
            <div className="flex items-center">
              <img className="w-20 opacity-100" src={logo} alt="likelion_logo" />
            </div>
          </a>
        </div>
      </div>

      {/* ✅ 모바일 메뉴 오픈 시 */}
      {menuOpen && (
        <div className="off-screen-menu open slideInDown fixed top-0 left-0 w-full h-screen z-50 bg-black text-white tracking-[1px] flex justify-center">
          <div className="flex min-h-screen overflow-y-auto Navbar">
            <div className="flex flex-col items-center justify-center">
              <ul className="flex flex-col items-center justify-center text-2xl NanumSquareEB gap-y-6">
                <li className="w-full text-4xl px-7 text-start font-extrabold">
                  <a href="/frontend">TRACK</a>
                </li>
                <ul className="flex items-center">
                  <li className="w-full fontThin px-7 text-start text-md">
                    <a href="/frontend">FRONTEND</a>
                  </li>
                  <li className="w-full fontThin px-7 text-start text-md">
                    <a href="/backend">BACKEND</a>
                  </li>
                  <li className="w-full fontThin px-7 text-start text-md whitespace-nowrap">
                    <a href="/pm_design">DESIGN</a>
                  </li>
                </ul>
                <li className="w-full py-3 text-4xl px-7 text-start font-extrabold">
                  <a href="/project">PROJECT</a>
                </li>
                <li className="w-full py-3 text-4xl px-7 text-start font-extrabold">
                  <a href="/teamIntro?tab12">TEAM</a>
                </li>
                <li className="w-full py-3 text-4xl px-7 text-start font-extrabold">
                  <a href="/contact">CONTACT</a>
                </li>
                <li className="w-full py-3 text-4xl px-7 text-start font-extrabold">
                  <a href="/cyberCampus/intro">CYBERCAMPUS</a>
                </li>
                <div className="mt-10">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center">
                      <div
                        className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%]"
                        style={{ backgroundColor: "rgb(255, 120, 22)" }}
                      >
                        🦁
                      </div>
                      <span className="px-2 text-xs font-extrabold">FRONT-END</span>
                      <span className="font-extrabold">김민규님</span>
                    </div>
                    <div className="px-2 text-[gray]">|</div>
                    <button className="text-xs font-extrabold">LOGOUT</button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ✅ PC 네비게이션 */}
      <div className="pcNav fixed z-50 top-0 w-full mx-auto transition-all duration-300 hidden lg:flex backdrop-blur-md">
        <div className="container flex items-center justify-between px-5 py-3 mx-auto">
          <a href="/">
            <div className="flex items-center">
              <img className="w-9" src={logo} alt="likelion_logo" />
              <span className="text-[#3B79FF] fontBlack text-2xl ml-2">LIKELION SKU</span>
            </div>
          </a>

          <ul className="relative flex items-center text-white">
  {["TRACK", "PROJECT", "TEAM", "CONTACT", "CYBERCAMPUS"].map((item, idx) => (
    <li key={idx}>
      <a
        href={`/${item.toLowerCase()}`}
        className="px-4 py-2 text-base font-[400] transition-all duration-200"
        style={{ fontFamily: "Pretendard-Light" }}
        onMouseEnter={(e) => {
          e.target.style.fontFamily = "Pretendard-Bold";
        }}
        onMouseLeave={(e) => {
          e.target.style.fontFamily = "Pretendard-Light";
        }}
      >
        {item}
      </a>
    </li>
  ))}
</ul>


          <div className="flex justify-end">
            <div className="flex items-center justify-center text-white">
              <div
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full"
                style={{ backgroundColor: "rgb(255, 120, 22)" }}
              >
                🦁
              </div>
              <span className="px-2 text-xs">FRONT-END</span>
              <span className="font-bold">김민규님</span>
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
