// src/components/back-end curriculum.jsx

import React from 'react';
// images.jsx 파일이 같은 src/components 폴더 안에 있으므로 상대 경로로 임포트합니다.
import images from './images.jsx';

const BackEndCurriculum = () => {
  return (
    <>
      {/* 원본 코드의 'container' div에 해당하는 부분 */}
      {/* Tailwind CSS 클래스를 사용하여 레이아웃과 스타일을 적용합니다. */}
      {/* 배경은 App.jsx에서 bg-black으로 설정되어 있으므로 여기서는 별도 배경색을 지정하지 않습니다. */}
      <div className="flex justify-center w-10/12 pt-20 mx-auto lg:mb-36 lg:min-h-screen text-white">
        {/* 원본 코드의 'partContent' div에 해당하는 부분 (왼쪽 섹션) */}
        <div className="flex flex-col items-start flex-shrink-0"> {/* flex-shrink-0 추가하여 고정 너비 유지 */}
          {/* 제목: "BACK-END CURRICULUM" */}
          <div className="pt-10">
            {/* 원본 코드의 폰트 색상과 크기, 굵기 반영 */}
            <span className="text-[#47EAEA] font-bold text-6xl">BACK-END</span> {/* fontEB -> font-extrabold */}
            <br />
            <span className="text-[#BDFFFF] font-bold text-6xl">CURRICULUM</span> {/* fontSB -> font-semibold */}
          </div>

          {/* 기술 스택 슬라이더 섹션 */}
          <div className="flex flex-col py-24">
            {/* 첫 번째 슬라이더 라인 (Java, Spring Boot) */}
            <div className="mb-10">
              <ul className="flex justify-between w-[320px] mb-2"> {/* curriUl 반영 */}
                <li className="flex w-[120px] items-center justify-center text-center font-thin text-xl whitespace-nowrap"> {/* fontThin 반영 */}
                  Java를 활용한
                  <br />
                  객체지향 개념
                </li>
                <li className="flex w-[120px] items-center justify-center text-center font-thin text-xl whitespace-nowrap"> {/* fontThin 반영 */}
                  Spring Boot
                </li>
              </ul>
              <img
                src={images.track.backLine}
                alt="track_backend_curri"
                className="w-[320px]" // curriImg 반영
              />
            </div>

            {/* 두 번째 슬라이더 라인 (JPA, Spring Security) */}
            <div className="ml-36"> {/* bottomcurri의 ml-36 반영 */}
              <ul className="flex justify-between w-[320px] mb-4"> {/* curriUl, BECurr 반영 */}
                <li className="flex w-[120px] items-center justify-center text-center font-thin text-xl whitespace-nowrap"> {/* fontThin 반영 */}
                  JPA
                </li>
                <li className="flex w-[120px] items-center justify-center text-center font-thin text-xl whitespace-nowrap"> {/* fontThin 반영 */}
                  Spring Security
                </li>
              </ul>
              <img
                src={images.track.backLine}
                alt="track_backend_curri"
                className="w-[320px]" // curriImg 반영
              />
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className="text-lg leading-8 font-light whitespace-nowrap"> {/* fontEL -> font-light */}
            <span className="text-2xl font-bold">백엔드</span>는<br /> {/* fontBold -> font-bold */}
            백엔드(Backend)는 웹 또는 모바일 애플리케이션의 서버 측 부분으로,
            <br />
            사용자 요청을 처리하고 데이터를 관리하는 역할을 합니다.
            <br />
            주요 구성 요소로는 서버, 웹 프레임워크/런타임, 데이터베이스,
            <br />
            API, 보안, 스케일링 및 성능 최적화, 로그 및 모니터링이 있습니다.
            <br />
          </div>
        </div>

        {/* 오른쪽 섹션: 세로로 회전된 "BACK END" 이미지 */}
        {/* 원본 코드의 'rightBox' div에 해당하는 부분 */}
        <div className="w-1/2"> {/* rightBox 반영 */}
          {/* image_31c4c6.png를 보면 오른쪽에 "BACK END" 텍스트 이미지가 있습니다. */}
          {/* images.track.backend_background를 사용하여 이 텍스트 이미지를 표시합니다. */}
          <img
            src={images.track.backend_background} // images.jsx에서 가져온 backend_background.png 사용 (세로 텍스트 이미지로 가정)
            alt="Back End Vertical Text"
            className="h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default BackEndCurriculum;
