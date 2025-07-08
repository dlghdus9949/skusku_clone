// src/components/CyberCampus.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CyberCampus = () => {
  return (
    <div className="min-h-screen App bg-white text-black">
      <div>
        <div className="container flex flex-col mx-auto text-center lg:mb-32 lg:min-h-screen">
          <div className="flex flex-col items-center justify-center pt-40 fontEB">
            <div className="text-[#3B79FF] my-2 ml-1 text-7xl">LIKELION SKU</div>
            <div className="mr-1 text-6xl">사이버캠퍼스</div>
          </div>
          <div className="my-16 text-base font-pretendard font-normal">성결대학교 아기사자들을 위한 학습 공간입니다.</div>

          <div className="flex flex-col lg:flex-row justify-center mx-auto text-[28px] fontBold flex-wrap">
            <Link to="/frontend">
              <button className="bg-gradient-to-r from-[#FFE3CF] to-[#FF8C3A] mb-24 mx-8 w-[400px] shadow-lg py-20 px-12 rounded-xl duration-500 hover:translate-y-[-5px] text-start lg:py-16 lg:px-8 lg:w-[300px]">
                <div className="mb-1 text-4xl lg:text-3xl">프론트엔드</div>
                <div className="text-xl whitespace-pre-line lg:text-sm fontRegular">FRONT-END</div>
              </button>
            </Link>

            <Link to="/backend">
              <button className="bg-gradient-to-r from-[#BDFFFF] to-[#47EAEA] mb-24 mx-8 w-[400px] shadow-lg py-20 px-12 rounded-xl duration-500 hover:translate-y-[-5px] text-start lg:py-16 lg:px-8 lg:w-[300px]">
                <div className="mb-1 text-4xl lg:text-3xl">백엔드</div>
                <div className="text-xl whitespace-pre-line lg:text-sm fontRegular">BACK-END</div>
              </button>
            </Link>

            <Link to="/pm_design">
              <button className="bg-gradient-to-r from-[#FFD1E2] to-[#FF87B1] mb-24 mx-8 w-[400px] shadow-lg py-20 px-12 rounded-xl duration-500 hover:translate-y-[-5px] text-start lg:py-16 lg:px-8 lg:w-[300px]">
                <div className="mb-1 text-4xl lg:text-3xl">디자인</div>
                <div className="text-xl whitespace-pre-line lg:text-sm fontRegular">DESIGN</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCampus;
