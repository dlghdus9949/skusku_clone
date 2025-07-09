import React, { useEffect } from "react";

import icon1 from "/assets/images/icon1.png";
import icon2 from "/assets/images/icon2.png";
import icon3 from "/assets/images/icon3.png";
import bgImage from "/assets/images/mainP2.png";
// AOS 라이브러리
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainSection2 = () => {
    // AOS 초기화
  useEffect(() => {
    AOS.init({
      duration: 1200, // 애니메이션 시간 1.2초 (ms)
      easing: 'ease-out-cubic',
      once: false, //스크롤 시 반복 실행 (ture일땐 1번만)
    });
  }, []);

  return (
    // 배경 이미지,섹션 전체 래퍼
    <div
      id="main2"
      data-aos="fade-up"    // 아래에서 위로 올라오는 효과
      className="relative w-full min-h-screen pt-0 mt-0 bg-center bg-cover main2 snap-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        {/*내용 영ㅇ역*/}
      <div className="flex flex-col items-center w-full min-h-screen text-xl text-center justify-evenly fontThin text-white relative z-10">
        <p className="pt-5 text-[22px]">
          <span className="fontMedium">성결대학교 멋쟁이사자처럼</span>은
          <br />
          자신이 원하는 IT 서비스를 구현하고 싶은
          <br />
          성결대학교 학생들이 모인 동아리입니다.
        </p>

        <div>
          <p className="text-[22px]">
            성결대학교 멋쟁이사자처럼만의
            <br />
            <span className="fontMedium">3가지 방향성</span>
          </p>
        {/* 카드 그리드 3개*/}
          <div className="grid w-full grid-cols-1 gap-8 pt-16 xl:grid-cols-3 xl:gap-32">
            <div className="flex flex-col items-center">
              <img src={icon1} alt="자기주도성" className="mb-4" />
              <p className="mb-4 fontMedium">자기주도성</p>
              <p className="text-lg">
                나의 커리어를 직접 설계하고,
                <br />
                만들어갈 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon2} alt="협력성" className="my-2 mb-5" />
              <p className="mb-4 fontMedium">협력성</p>
              <p className="text-lg">
                동료들과 개발 고민을 공유하며,
                <br />
                함께 협력하고 성장솔루션을 찾아볼 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon3} alt="가능성" className="mb-4" />
              <p className="mb-4 fontMedium">가능성</p>
              <p className="text-lg">
                자신이 꿈꾸던 IT 서비스를 현실로
                <br />
                구현하는 기회가 제공됩니다.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[22px]">
          <span className="fontSB">"내 아이디어를 내 손으로 실현한다."</span>{" "}
          라는 모토를 가지고,
          <br />
          실제 서비스를 구현하며 개발자의 꿈을 이루는데
          <br />
          한걸음 더 다가가고자 합니다.
        </p>
      </div>
    </div>
  );
};

export default MainSection2;
