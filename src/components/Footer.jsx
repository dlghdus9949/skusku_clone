import React from "react";

// props로 isCyberCampus 여부를 받아와 색상 테마를 다르게 설정
const Footer = ({ isCyberCampus }) => {
  return (
    // 전체 Footer wrapper
    <div className={`leading-7 container w-11/12 mx-auto border-t-[1px] py-12 px-12 ${isCyberCampus ? 'bg-white border-[#C9C9C9]' : 'bg-black border-[#626262]'}`}>
        {/* LIKELION 정보 및 주소 */}
      <div className="flex flex-col mb-10">
        <span className="text-2xl fontBlack text-[#3B79FF]">LIKELION SKU</span>
        {/* 주소 텍스트 색상도 테마에 따라 다르게 */}

        <span className={`fontLight ${isCyberCampus ? 'text-black' : 'text-white'}`}>주소 : 경기도 안양시 만안구 성결대학로 53</span>
        {/* 이메일 + SVG 아이콘 */}
        <span className={`flex items-center fontLight ${isCyberCampus ? 'text-black' : 'text-white'}`}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="mr-1"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 메일 아이콘 path */}
            <path d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
            <path d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
          </svg>
          문의처 sungkyul.univ@likelion.org
        </span>
      </div>
     {/* SNS 링크 + 푸터 텍스트 */}
      <div className="flex justify-between">
        <div className="flex items-center">
          <a
            href="https://www.instagram.com/likelion_sku/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/insta.png" alt="insta" className="mx-1" />
          </a>
          <a
            href="http://pf.kakao.com/_vxixlaxj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/kakao.png" alt="kakao" className="mx-1" />
          </a>
        </div>
         <div className={`fontSB ${isCyberCampus ? 'text-black' : 'text-white'}`}>
          @2025_LIKEL<a className="cursor-auto" href="/admin/main">IONSKU 13th</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
