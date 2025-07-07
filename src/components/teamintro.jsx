// src/components/teamintro.jsx

import React, { useState } from 'react';
import Person from './person.jsx'; // person.jsx 파일 임포트
import { useLocation } from 'react-router-dom'; // useLocation 훅 임포트

const TeamIntro = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('tab13'); // 초기 활성 탭은 13기

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // 각 기수별 ID 목록 (원본 코드와 동일)
  const id13gi = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28]; // 13기
  const id12gi = [2, 6, 4, 5, 11, 7, 3, 8, 1, 9, 10]; // 12기
  const id11gi = [12, 13, 14, 16, 17, 15, 18]; // 11기

  // 탭 클래스를 동적으로 생성하는 함수
  const tabClass = (tab) =>
    `cursor-pointer text-xl font-bold relative ${ // fontBold -> font-bold
      activeTab === tab
        ? 'text-white after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-white'
        : 'text-gray-500'
    }`;

  return (
    <>
      <div className="mb-12 lg:min-h-screen lg:mb-24 bg-black text-white"> {/* 배경색과 텍스트색 추가 */}
        {/* 제목 섹션 */}
        <div className="text-center pt-28">
          <div className="text-[#3A78FF] text-6xl font-extrabold"> {/* fontEB -> font-extrabold */}
            LIKELION SKU
            <br />
          </div>
          <div className="text-[#FFFFFF] text-6xl font-extrabold mt-4">운영진</div> {/* fontEB -> font-extrabold */}
        </div>

        {/* 탭 메뉴 */}
        <div className="flex justify-center p-10 mt-10 space-x-20">
          <div
            className={tabClass('tab13')}
            onClick={() => handleTabClick('tab13')}
          >
            13기
          </div>
          <div
            className={tabClass('tab12')}
            onClick={() => handleTabClick('tab12')}
          >
            12기
          </div>
          <div
            className={tabClass('tab11')}
            onClick={() => handleTabClick('tab11')}
          >
            11기
          </div>
        </div>

        {/* 선택된 탭에 따라 Person 컴포넌트 렌더링 */}
        {activeTab === 'tab13' && (
          <Person idList={id13gi} gapX="gap-x-8 sm:gap-x-12" />
        )}
        {activeTab === 'tab12' && (
          <Person idList={id12gi} gapX="gap-x-8 sm:gap-x-12" />
        )}
        {activeTab === 'tab11' && (
          <Person idList={id11gi} gapX="gap-x-8 sm:gap-x-12" />
        )}
      </div>
    </>
  );
};

export default TeamIntro;
