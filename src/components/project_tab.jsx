import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const tabs = [
  { name: "전체", value: "all" },
  { name: "13기", value: "13" },
  { name: "12기", value: "12" },
  { name: "11기", value: "11" },
];

const Project_Tabs = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState("all");
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
    onTabClick(tabValue);
  };

  return (
    <>
      <div
        className={`mt-6 text-center md:text-start  ${
          isAdminPage ? "text-black" : "text-white"
        }`}
      >
        {tabs.map((tab) => {
          const baseStyle =
            "py-2 px-2 mr-3 text-xl border-b-[3px] transition-all duration-200 cursor-pointer";
          const activeStyle = isAdminPage
            ? "font-[700] border-b-black"
            : "font-[700] border-b-white";
          const inactiveStyle = isAdminPage
            ? "border-b-white"
            : "border-b-black";

          return (
            <button
              key={`${tab.value}th`}
              className={`${baseStyle} ${
                activeTab === tab.value ? activeStyle : inactiveStyle
              } hover:font-[700]`}
              style={{
                fontFamily:
                  activeTab === tab.value ? "Pretendard-Bold" : "Pretendard-Light",
              }}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Project_Tabs;
