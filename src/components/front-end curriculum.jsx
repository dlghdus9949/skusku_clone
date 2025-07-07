// src/components/front-end curriculum.jsx

import React from 'react';
// images.jsx 파일이 같은 src/components 폴더 안에 있으므로 상대 경로로 임포트합니다.
import images from './images.jsx';

const FrontEndCurriculum = () => {
  return (
    <>
      {/* 원본 코드의 'container' div에 해당하는 부분 */}
      {/* w-10/12, pt-20, mx-auto, lg:mb-36, lg:min-h-screen 반영 */}
      {/* 배경을 검은색으로 변경하기 위해 bg-black 클래스 추가 */}
      <div className="flex justify-center w-10/12 pt-20 mx-auto lg:mb-36 lg:min-h-screen bg-black">
        {/* 원본 코드의 'partContent' div에 해당하는 부분 (왼쪽 섹션) */}
        <div className="flex flex-col items-start"> {/* Tailwind를 사용하여 flex-col로 변경 */}
          {/* 제목: "FRONT-END CURRICULUM" */}
          <div className="pt-10">
            {/* 원본 코드의 폰트 색상과 크기, 굵기 반영 */}
            <span className="text-[#FF7816] font-extrabold text-6xl">FRONT-END</span>
            <br />
            <span className="text-[#FFD7BA] font-semibold text-6xl">CURRICULUM</span>
          </div>

        <div className="py-24">
            <ul className="flex justify-between w-[426px] mb-2 curriUl">
              <li className="w-[95.6px] text-center font-thin text-xl whitespace-nowrap">
                JavaScript
              </li>
              <li className="w-[95.6px] text-center font-thin text-xl whitespace-nowrap">
                React
              </li>
              <li className="w-[95.6px] text-center font-thin text-xl whitespace-nowrap">
                TypeScript
              </li>
            </ul>
            <img
              src={images.track.frontLine}
              alt="front_curriculum"
              className="w-[426px] curriImg"
            />
        </div>

          {/* 설명 텍스트 */}
          <div className="text-lg leading-8 font-light whitespace-nowrap"> {/* fontEL 반영 (Extra Light) */}
            <span className="text-2xl font-bold">프론트엔드</span>는<br /> {/* fontBold 반영 */}
            웹 애플리케이션 또는 모바일 앱의 사용자 인터페이스를 담당하는
            부분입니다.
            <br />
            사용자가 상호작용하는 화면을 구성하고 사용자 경험을 개선합니다.
            <br />
            HTML, CSS, JavaScript를 사용하여 웹 페이지를 디자인하고 개발하며,
            <br />
            사용자의 요청과 상호작용을 처리하고 화면에 표시합니다.
            <br />
            <br />
            프론트엔드는 주로 웹 브라우저에서 실행되며,
            <br />
            사용자가 직접 보는 부분으로, 시각적인 디자인과 사용자 경험에 중점을
            둡니다.
            <br />
          </div>
        </div>

        {/* 오른쪽 섹션: 세로로 회전된 "FRONT END" 이미지 */}
        {/* 원본 코드의 'rightBox' div에 해당하는 부분 */}
        <div className="flex justify-center w-1/2"> {/* rightBox 반영 */}
          {/* 여기서는 images.track.frontend_background를 사용하여 세로 "FRONT END" 텍스트 이미지를 표시합니다. */}
          {/* 이미지에 따라 적절한 크기 및 회전 조정이 필요할 수 있습니다. */}
          <img
            src={images.track.frontend_background} // images.jsx에서 가져온 frontend_background.png 사용 (세로 텍스트 이미지로 가정)
            alt="Front End Vertical Text"
            className="h-full object-contain" // 이미지에 맞춰 회전
          />
        </div>
      </div>
    </>
  );
};

export default FrontEndCurriculum;
