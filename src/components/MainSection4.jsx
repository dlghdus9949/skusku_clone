import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCarousel from "./ProjectCarousel";

const MainSection4 = () => {
    //역시 같은 aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    //전체 영역 TRACKS + PROJECTS 포함
    <div className="container w-11/12 mx-auto px-12 py-12 leading-7" data-aos="fade-up">
      <div className="flex flex-col justify-center items-center">
        {/* TRACKS  */}
        <p className="text-7xl fontBold text-[#3B79FF]">TRACKS</p>
        <p className="max-[766px]:text-lg text-xl text-white fontLight my-12 text-center">
          멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.
        </p>

        {/* 프,백,디 그리드 */}
        <div className="grid w-[90%] max-[1535px]:w-full grid-cols-1 gap-8 xl:grid-cols-3 mt-7 mx-auto ">

          {/* 프론트엔드 */}
          <div className="p-4">
            <button className="relative group flex flex-col justify-between mx-auto w-[85%] min-[1021px]:w-1/2 xl:w-full h-[14rem] text-white rounded-md bg-[#666666] transition-colors duration-300 cursor-pointer">
              <div className="flex justify-between w-full h-full">
                <div className="pb-5 pl-8 text-start mr-5">
                    {/* 기본상태 */}
                  <div className="group-hover:hidden">
                    <p className="pt-16 text-4xl fontBold">프론트엔드</p>
                    <p className="text-4xl fontBold">FRONT-END</p>
                  </div>
                    {/* 호버 시 설명 나타남 */}
                  <div className="hidden group-hover:block absolute inset-0 p-8 rounded-md bg-[#EE7117]">
                    <div className="text-[#232323]">
                      <div className="pb-3">
                        <p className="text-3xl fontBold">프론트엔드</p>
                        <p className="text-3xl fontBold">FRONT-END</p>
                      </div>
                      <div>
                        <p className="text-[16px] fontRegular">웹사이트의 얼굴</p>
                        <p className="text-[16px] fontRegular">사용자가 시각적으로<br />볼 수 있는 영역을 담당합니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end h-full ml-5">
                  <img src="/assets/images/arrowM.png" alt="화살표" className="h-[14%] mb-6 mr-5 z-[1] group-hover:hidden" />
                  <img src="/assets/images/arrowB.png" alt="화살표" className="h-[14%] mb-6 mr-5 z-[1] hidden group-hover:block" />
                </div>
              </div>
            </button>
          </div>

          {/* 백엔드 */}
          <div className="p-4">
            <button className="relative group flex flex-col justify-between mx-auto w-[85%] min-[1021px]:w-1/2 xl:w-full h-[14rem] text-white rounded-md bg-[#666666] transition-colors duration-300 cursor-pointer">
              <div className="flex justify-between w-full h-full">
                <div className="pb-5 pl-8 text-start mr-5">
                    {/* 기본상태 */}
                  <div className="group-hover:hidden">
                    <p className="pt-16 text-4xl fontBold">백엔드</p>
                    <p className="text-4xl fontBold">BACK-END</p>
                  </div>
                  {/* 호버 시 설명 나타남 */}
                  <div className="hidden group-hover:block absolute inset-0 p-8 rounded-md bg-[#40ACBB]">
                    <div className="text-[#232323]">
                      <div className="pb-5">
                        <p className="text-3xl fontBold">백엔드</p>
                        <p className="text-3xl fontBold">BACK-END</p>
                      </div>
                      <div>
                        <p className="text-[16px] fontRegular">웹사이트의 두뇌</p>
                        <p className="text-[16px] fontRegular">서버 및 데이터 처리 영역을 담당합니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* 화살표 아이콘 (호버 시 이미지 변경) */}
                <div className="flex items-end justify-end h-full ml-5">
                  <img src="/assets/images/arrowM.png" alt="화살표" className="h-[14%] mb-6 mr-5 z-[1] group-hover:hidden" />
                  <img src="/assets/images/arrowB.png" alt="화살표" className="h-[14%] mb-6 mr-5 z-[1] hidden group-hover:block" />
                </div>
              </div>
            </button>
          </div>

          {/* 디자인,기본상태 등 나머지 위와 동일 */}
          <div className="p-4">
            <button className="relative group flex flex-col justify-between mx-auto w-[85%] min-[1021px]:w-1/2 xl:w-full h-[14rem] text-white rounded-md bg-[#666666] transition-colors duration-300 cursor-pointer">
              <div className="flex justify-between w-full h-full">
                <div className="pb-5 pl-8 text-start mr-5">
                  <div className="group-hover:hidden">
                    <p className="pt-16 text-4xl fontBold">디자인</p>
                    <p className="text-4xl fontBold">DESIGN</p>
                  </div>
                  <div className="hidden group-hover:block absolute inset-0 p-8 rounded-md bg-[#FF6F91]">
                    <div className="text-[#232323]">
                      <div className="pb-3">
                        <p className="text-3xl fontBold">디자인</p>
                        <p className="text-3xl fontBold">DESIGN</p>
                      </div>
                      <div>
                        <p className="text-[16px] fontRegular">웹사이트의 첫 걸음, 프로젝트 총괄</p>
                        <p className="text-[16px] fontRegular">및 웹/앱 서비스 화면 디자인 영역을<br />담당합니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-end h-full ml-5">
                  <img src="/assets/images/arrowM.png" alt="화살표" className="h-[14%] mb-6 mr-5 z-[1] group-hover:hidden" />
                  <img src="/assets/images/arrowB.png" alt="화살표" className="h-[14%] mb-6 mr-5 z-[1] hidden group-hover:block" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        {/* PROJECTS */}
        <div className="main5 relative w-full mt-28">
          <div className="flex flex-col justify-center items-center">
            <p className="text-7xl fontBold text-[#3B79FF]">PROJECTS</p>
            <p className="max-[766px]:text-lg text-white text-xl fontLight my-12 text-center">
              성결대학교 멋쟁이사자처럼과 함께한 프로젝트들을 소개합니다.
            </p>
          </div>
           {/* 프로젝트 이미지 자동 슬라이드 */}
          <ProjectCarousel />
        </div>
      
      </div>
    </div>
  );
};

export default MainSection4;
