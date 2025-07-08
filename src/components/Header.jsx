import React, { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";
import { useLocation } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isTop, setIsTop] = useState(true);
  const isCyberCampus = location.pathname.startsWith('/cyberCampus');
  const textColorClass = isCyberCampus ? 'text-black' : 'text-white';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTrackClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const currentPath = location.pathname;

  const getFontStyle = (path) =>
    currentPath.startsWith(path) ? "Pretendard-Bold" : "Pretendard-Light";
  return (
    <>
      {/* ✅ 모바일 햄버거 메뉴 */}
      
      <div
  className="hamburger-menu cursor-pointer fixed top-10 right-8 z-[9999] w-[42px] h-[40px] p-0 lg:hidden"
  onClick={toggleMenu}
>
  <div
    className={`ham-bar absolute ${menuOpen ? "w-[42px] h-[2px] rotate-45 top-[19px] left-[0.1px]" : "w-full h-[2px] top-0 left-0"} ${isCyberCampus ? "bg-black" : "bg-white"} rounded transition-all duration-300`}
  ></div>
  <div
    className={`ham-bar absolute ${menuOpen ? "opacity-0" : "w-full h-[2px] top-[17px] left-0"} ${isCyberCampus ? "bg-black" : "bg-white"} rounded transition-all duration-300`}
  ></div>
  <div
    className={`ham-bar absolute ${menuOpen ? "w-[42px] h-[2px] -rotate-45 top-[19px] left-0" : "w-full h-[2px] bottom-1 left-0"} ${isCyberCampus ? "bg-black" : "bg-white"} rounded transition-all duration-300`}
  ></div>
</div>


{menuOpen && (
  <div className={`off-screen-menu open slideInDown fixed top-0 left-0 w-full h-screen z-50 ${isCyberCampus ? "bg-white text-black" : "bg-black text-white"} tracking-[1px] flex justify-center`}>
    
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
            <a href="/cyberCampus">CYBERCAMPUS</a>
          </li>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-[50%]" style={{ backgroundColor: "rgb(255, 120, 22)" }}>🦁</div>
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

        <ul className={`relative flex items-center ${isCyberCampus ? 'text-black' : 'text-white'}`}>
  {/* TRACK 메뉴 */}
  <li className="group">
    <button
      id="track-button"
      aria-controls={Boolean(anchorEl) ? "track-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={Boolean(anchorEl)}
      onClick={handleTrackClick}
      className="px-4 py-2 text-base transition-all duration-200 cursor-pointer"
      style={{
        fontFamily:
          currentPath.startsWith("/frontend") ||
          currentPath.startsWith("/backend") ||
          currentPath.startsWith("/pm_design")
            ? "Pretendard-Bold"
            : "Pretendard-Light",
      }}
      onMouseEnter={(e) => (e.target.style.fontFamily = "Pretendard-Bold")}
      onMouseLeave={(e) => {
        if (
          !currentPath.startsWith("/frontend") &&
          !currentPath.startsWith("/backend") &&
          !currentPath.startsWith("/pm_design")
        ) {
          e.target.style.fontFamily = "Pretendard-Light";
        }
      }}
    >
      TRACK
    </button>

    <Menu
      id="track-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{ "aria-labelledby": "track-button" }}
      PaperProps={{
        style: {
          backgroundColor: "#fff",
          color: "#000",
          fontFamily: "Pretendard-Light",
          marginTop: "5px",
        },
      }}
    >
      <MenuItem
        onClick={handleClose}
        component="a"
        href="/frontend"
        style={{
          fontFamily: currentPath.startsWith("/frontend")
            ? "Pretendard-Bold"
            : "Pretendard-Light",
        }}
      >
        FRONT-END
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        component="a"
        href="/backend"
        style={{
          fontFamily: currentPath.startsWith("/backend")
            ? "Pretendard-Bold"
            : "Pretendard-Light",
        }}
      >
        BACK-END
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        component="a"
        href="/pm_design"
        style={{
          fontFamily: currentPath.startsWith("/pm_design")
            ? "Pretendard-Bold"
            : "Pretendard-Light",
        }}
      >
        DESIGN
      </MenuItem>
    </Menu>
  </li>

  {/* 나머지 메뉴 */}
  {[
    { label: "PROJECT", path: "/project" },
    { label: "TEAM", path: "/teamintro" },
    { label: "CONTACT", path: "/contact" },
    { label: "CYBERCAMPUS", path: "/cyberCampus" },
  ].map(({ label, path }) => (
    <li key={label}>
      <a
        href={path}
        className="px-4 py-2 text-base transition-all duration-200 cursor-pointer"
        style={{
          fontFamily: currentPath.startsWith(path)
            ? "Pretendard-Bold"
            : "Pretendard-Light",
        }}
        onMouseEnter={(e) => (e.target.style.fontFamily = "Pretendard-Bold")}
        onMouseLeave={(e) => {
          if (!currentPath.startsWith(path)) {
            e.target.style.fontFamily = "Pretendard-Light";
          }
        }}
      >
        {label}
      </a>
    </li>
  ))}
</ul>

          <div className="flex justify-end">
          <div className={`flex items-center justify-center ${textColorClass}`}>
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full" style={{ backgroundColor: "rgb(255, 120, 22)" }}>🦁</div>
            <span className="px-2 text-xs">FRONT-END</span>
            <span className="font-bold">김민규님</span>
            <div className={`px-2 ${isCyberCampus ? 'text-gray-600' : 'text-[gray]'}`}>|</div>
            <button className={`text-xs ${textColorClass}`}>LOGOUT</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
