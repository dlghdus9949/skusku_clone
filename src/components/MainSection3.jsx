import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <div
      className="relative w-full main3 snap-section"
      data-aos="fade-up"
    >
      <div className="absolute flex items-start justify-center w-full">
        <img
          src="assets/images/likelion.png"
          alt="likelion"
          className="w-1/4 py-24 z-0 xl:w-1/6"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full py-20 text-[22px] text-center fontRegular">
        <div className="flex flex-col justify-around mb-32 h-1/5">
          <div className="pb-28">
            <p className="text-[#3B79FF] fontSB pb-2">Q.</p>
            <p className="text-white">
              성결대 멋쟁이사자처럼은 주로{" "}
              <span className="text-[#3B79FF] fontMedium">어떤 활동</span>을
              하나요?
            </p>
          </div>
          <div>
            <p className="text-[#3B79FF] fontSB pb-2">A.</p>
            <p className="text-white">
              성결대 멋쟁이사자처럼에서는{" "}
              <span className="text-[#3B79FF] fontMedium">정기세션</span>과{" "}
              <span className="text-[#3B79FF] fontMedium">스터디, 아이디어톤</span>
              <br />
              마지막으로 <span className="text-[#3B79FF] fontMedium">해커톤</span>을
              주로 진행합니다.
            </p>
          </div>
        </div>
  
        <img
  src="assets/images/schedule.png"
  alt="멋사 스케줄"
  className="w-4/5 xl:w-3/5 z-[2]"
  data-aos="fade"         // 👈 서서히 등장
  data-aos-delay="1000"   // 👈 1초 후 시작
  data-aos-duration="1200" // 👈 1.2초간 서서히 등장
/>


      </div>
    </div>
  );
};

export default MainSection3;
