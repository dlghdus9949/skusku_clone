// src/components/contact.jsx

import React, { useEffect, useState } from 'react';
// images.jsx 파일이 같은 src/components 폴더 안에 있으므로 상대 경로로 임포트합니다.
import images from './images.jsx';
import { useLocation } from 'react-router-dom'; // useLocation 훅 임포트

const Contact = () => {
  return (
    // 전체 컨테이너: 배경은 검은색, 중앙 정렬
    <div className="flex flex-col items-center justify-center bg-black min-h-screen"> {/* mobileContainer, lg:min-h-screen 반영 */}
      <div className="container px-5 pt-24 mx-auto xl:px-20">
        <div className="flex flex-col items-center justify-between w-full xl:flex-row">
          {/* 왼쪽 텍스트 섹션 */}
          <div className="w-full xl:ml-20 xl:pb-20 xl:leading-10 xl:w-[610px] mb-10 xl:mb-0 xl:mr-20 text-center xl:text-left">
            <span className="text-4xl leading-tight sm:leading-tight text-blue-500 xl:text-6xl fontEB sm:text-5xl md:text-6xl md:leading-tight"> {/* font-extrabold -> fontEB로 수정 */}
              반가워요!
              <br />
            </span>
            <span className="text-4xl leading-tight sm:leading-tight text-white xl:text-6xl fontEB whitespace-nowrap sm:text-5xl md:text-6xl md:leading-tight"> {/* font-extrabold -> fontEB로 수정 */}
              어떤 것을
              <br />
              도와드릴까요?
            </span>
          </div>
          {/* ContactTabs 컴포넌트 */}
          <ContactTabs />
        </div>
      </div>
    </div>
  );
};

const ContactTabs = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState('etc');

  useEffect(() => {
    // URL 쿼리 파라미터에서 탭 값을 가져와 설정
    const tab = location.search.replace('?', '');
    if (tab) {
      setSelectedTab(tab);
    } else {
      setSelectedTab('etc'); // 기본 탭을 'etc'로 설정
    }
  }, [location]); // location 객체가 변경될 때마다 실행

  return (
    // 탭 및 내용 컨테이너
    <div className="relative flex flex-col items-center justify-center w-full h-auto mb-20 ml-0 xl:flex-row xl:h-64 xl:ml-32">
      {/* 왼쪽 탭 버튼 섹션 */}
      <div className="flex flex-col w-full space-y-4 text-center xl:space-y-28 xl:w-1/5 xl:text-left">
        {/* 기타 의뢰 탭 */}
        <div className="relative">
          <button
            className={`text-xl xl:text-3xl fontMedium sm:text-2xl md:text-3xl whitespace-nowrap ${ /* font-medium -> fontMedium으로 수정 */
              selectedTab === 'etc' ? 'text-white' : 'text-gray-500'
            } md:mb-4 lg:mb-0`}
            onClick={() => setSelectedTab('etc')}>
            [기타 의뢰]
          </button>
          <span
            className="absolute bottom-0 left-0 flex items-center hidden h-1 mt-2 cursor-pointer w-36 xl:block"
            onClick={() => setSelectedTab('etc')}>
            <img src={images.arrow} alt="arrow" className="w-full mt-4" />
          </span>
          {/* 모바일/태블릿에서만 보이는 내용 */}
          {selectedTab === 'etc' && (
            <div className="block xl:hidden bg-[#1C58DA] text-white p-4 rounded-lg w-10/12 max-w-md mx-auto mt-4 flex fontLight text-base sm:text-lg md:text-2xl justify-center h-auto"> {/* font-light -> fontLight로 수정 */}
              <div className="p-4">
                <span className="text-lg fontSB sm:text-xl md:text-2xl">기타 의뢰</span>는 카카오톡 채널 <br /> {/* font-semibold -> fontSB로 수정 */}
                "멋쟁이사자처럼 at 성결대"
                <br />로 문의 바랍니다.
                <br />
                <br />
                감사합니다!
              </div>
            </div>
          )}
        </div>

        {/* 협업 문의 탭 */}
        <div className="relative">
          <button
            className={`text-xl xl:text-3xl fontMedium sm:text-2xl md:text-3xl whitespace-nowrap ${ /* font-medium -> fontMedium으로 수정 */
              selectedTab === 'Collaboration' ? 'text-white' : 'text-gray-500'
            } md:mb-6 md:mt-4 lg:mb-0 lg:mt-0`}
            onClick={() => setSelectedTab('Collaboration')}>
            [협업 문의]
          </button>
          <span
            className="absolute bottom-0 left-0 flex items-center hidden h-1 mt-2 cursor-pointer w-36 xl:block"
            onClick={() => setSelectedTab('Collaboration')}>
            <img src={images.arrow} alt="arrow" className="w-full mt-4" />
          </span>
          {/* 모바일/태블릿에서만 보이는 내용 */}
          {selectedTab === 'Collaboration' && (
            <div className="block xl:hidden bg-[#34C242] text-white p-4 rounded-lg w-10/12 max-w-md mx-auto mt-4 flex fontLight text-base sm:text-lg md:text-2xl justify-center h-auto"> {/* font-light -> fontLight로 수정 */}
              <div className="p-4">
                <span className="text-lg fontSB sm:text-xl md:text-2xl">협업 문의</span>는 "sungkyul.univ@likelion.org"
                위 메일 주소로 문의 바랍니다.
                <br />
                <br />
                감사합니다!
              </div>
            </div>      
          )}
        </div>

        {/* 문의 사항 탭 */}
        <div className="relative">
          <button
            className={`text-xl xl:text-3xl fontMedium sm:text-2xl md:text-3xl whitespace-nowrap ${ /* font-medium -> fontMedium으로 수정 */
              selectedTab === 'inquiry' ? 'text-white' : 'text-gray-500'
            } md:mb-6 md:mt-4 lg:mb-0 lg:mt-0`}
            onClick={() => setSelectedTab('inquiry')}>
            [문의 사항]
          </button>
          <span
            className="absolute bottom-0 left-0 flex items-center hidden h-1 mt-2 cursor-pointer w-36 xl:block"
            onClick={() => setSelectedTab('inquiry')}>
            <img src={images.arrow} alt="arrow" className="w-full mt-4" />
          </span>
          {/* 모바일/태블릿에서만 보이는 내용 */}
          {selectedTab === 'inquiry' && (
            <div className="block xl:hidden bg-[#747474] text-white p-4 rounded-lg w-10/12 max-w-md mx-auto mt-4 flex fontLight text-base sm:text-lg md:text-2xl justify-center h-auto"> {/* font-light -> fontLight로 수정 */}
              <div className="p-4">
                <span className="text-lg fontSB sm:text-xl md:text-2xl">문의 사항</span>은 인스타그램 @likelion_sku
                DM으로 문의 바랍니다.
                <br />
                <br />
                감사합니다!
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 오른쪽 내용 박스 섹션 (데스크톱에서만 보임) */}
      <div className="relative flex items-center justify-center flex-grow h-full ml-24 xl:h-auto">
        {selectedTab === 'etc' && (
          <div className="hidden xl:block absolute top-0 transform -translate-y-40 bg-[#1C58DA] text-white p-4 rounded-lg w-60 xl:w-72 h-36 xl:h-44 flex fontLight text-base xl:text-xl "> {/* font-light -> fontLight로 수정 */}
            <div>
              <span className="text-lg fontSB xl:text-xl">기타 의뢰</span>는 카카오톡 채널 <br /> {/* font-semibold -> fontSB로 수정 */}
              "멋쟁이사자처럼 at 성결대"
              <br />로 문의 바랍니다.
              <br />
              <br />
              감사합니다!
            </div>
          </div>
        )}
        {selectedTab === 'Collaboration' && (
          <div className="hidden xl:block absolute top-0 transform -translate-y-3 bg-[#34C242] text-white p-4 rounded-lg w-60 xl:w-72 h-36 xl:h-44 flex items-center justify-center fontLight text-base xl:text-xl"> {/* font-light -> fontLight로 수정 */}
            <div>
              <span className="text-lg fontSB xl:text-xl">협업 문의</span>는 "sungkyul.univ@likelion.org" <br />위 메일주소로
              문의 바랍니다.
              <br />
              <br />
              감사합니다!
            </div>
          </div>
        )}
        {selectedTab === 'inquiry' && (
          <div className="hidden xl:block absolute top-0 xl:top-36 bg-[#747474] text-white p-4 rounded-lg w-60 xl:w-72 h-36 xl:h-44 flex items-center justify-center text-base xl:text-xl fontLight"> {/* font-light -> fontLight로 수정 */}
            <div>
              <span className="text-lg fontSB xl:text-xl">문의 사항</span>은 인스타그램 @likelion_sku DM으로 문의 바랍니다.
              <br />
              <br />
              감사합니다!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;