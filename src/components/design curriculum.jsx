// src/components/design curriculum.jsx

import React from 'react';
// images.jsx 파일이 같은 src/components 폴더 안에 있으므로 상대 경로로 임포트합니다.
import images from './images.jsx';

const DesignCurriculum = () => {
  return (
    <>
      {/* 원본 코드의 'container' div에 해당하는 부분 */}
      {/* Tailwind CSS 클래스를 사용하여 레이아웃과 스타일을 적용합니다. */}
      {/* 배경은 App.jsx에서 bg-black으로 설정되어 있으므로 여기서는 별도 배경색을 지정하지 않습니다. */}
      <div className="flex justify-center w-10/12 pt-20 mx-auto lg:mb-[15rem] lg:min-h-screen text-white">
        {/* 원본 코드의 'partContent' div에 해당하는 부분 (왼쪽 섹션) */}
        <div className="flex flex-col items-start flex-shrink-0"> {/* flex-shrink-0 추가하여 고정 너비 유지 */}
          {/* 제목: "DESIGN CURRICULUM" */}
          <div className="pt-10">
            {/* 원본 코드의 폰트 색상과 크기, 굵기 반영 */}
            <span className="text-[#FF669D] font-extrabold text-6xl">DESIGN</span> {/* fontEB -> font-extrabold */}
            <br />
            <span className="text-[#FFBFD6] font-semibold text-6xl">CURRICULUM</span> {/* fontSB -> font-semibold */}
          </div>

          {/* 기술 스택 슬라이더 섹션 */}
          <div className="py-24 lg:py-32"> {/* @lg:py-32 반영 */}
            <ul className="flex justify-between w-[426px] lg:w-[512px] mb-2"> {/* @lg:w-[512px] 반영 */}
              <li className="w-[90px] text-center font-thin text-base lg:text-lg whitespace-nowrap"> {/* @lg:text-lg 반영 */}
                UX/UI 교육
              </li>
              <li className="w-[90px] text-center font-thin text-base lg:text-lg whitespace-nowrap"> {/* @lg:text-lg 반영 */}
                Figma 교육
              </li>
              <li className="w-[90px] text-center font-thin text-base lg:text-lg whitespace-nowrap"> {/* @lg:text-lg 반영 */}
                웹/앱 디자인
              </li>
              <li className="w-[90px] text-center font-thin text-base lg:text-lg whitespace-nowrap"> {/* @lg:text-lg 반영 */}
                포트폴리오 제작
              </li>
            </ul>
            <img
              src={images.track.pmLine} // images.jsx에서 가져온 pm_curri.png 사용
              alt="track_pm_curri"
              className="w-[426px] lg:w-[512px]" // @lg:w-[512px] 반영
            />
          </div>

          {/* 설명 텍스트 */}
          <div className="text-lg leading-8 font-light whitespace-nowrap"> {/* fontEL -> font-light */}
            <span className="text-2xl font-bold">UX/UI 디자이너</span>는<br /> {/* fontBold -> font-bold */}
            제품 또는 서비스의 사용자 경험을 개선하기 위해
            <br />
            사용자 연구, 프로토타입 제작, 디자인 시스템 구축 등을 수행하며,
            <br />
            직관적이고 효과적인 사용자 인터페이스(UI)를 설계하고 구현합니다.
            <br />
          </div>
        </div>

        {/* 오른쪽 섹션: 세로로 회전된 "DESIGN PM" 이미지 */}
        {/* 원본 코드의 'rightBox' div에 해당하는 부분 */}
        <div className="flex justify-center w-1/2"> {/* rightBox 반영 */}
          {/* image_31b5c7.png를 보면 오른쪽에 "DESIGN PM" 텍스트 이미지가 있습니다. */}
          {/* images.track.pmLine 또는 images.track.pm_background를 사용하여 이 텍스트 이미지를 표시합니다. */}
          {/* images.jsx에 pmLine이 있으므로 pmLine을 사용합니다. */}
          <img
            src={images.track.pm_background} // images.jsx에서 가져온 pmLine.png 사용 (세로 텍스트 이미지로 가정)
            alt="Design PM Vertical Text"
            className="h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default DesignCurriculum;
