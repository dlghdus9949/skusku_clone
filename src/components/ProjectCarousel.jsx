import React from "react";
import Slider from "react-slick"; //슬리이더 컴포넌트
import "slick-carousel/slick/slick.css"; //스타일
import "slick-carousel/slick/slick-theme.css"; //테마 스타일

//  데이터 배열 (썸네일, 링크, 제목, 부제목)
const projectData = [
  {
    src: "/assets/images/Lover.png",
    link: "https://glover.sku-sku.com/",
    title: "글LOVER",
    subtitle: "2023 글천절",
  },
  {
    src: "/assets/images/grad-calculator.png",
    link: "https://gcc.sku-sku.com/",
    title: "졸업학점계산기",
    subtitle: "졸업요건 확인",
  },
  {
    src: "/assets/images/wave.png",
    link: "https://wave-renew.sku-sku.com/",
    title: "파동",
    subtitle: "2023 영암체전",
  },
  {
    src: "/assets/images/election_all.png",
    link: "https://vote2024.sku-sku.com/main-election",
    title: "2024 총선거",
    subtitle: "입후보자 확인 및 투표 독려",
  },
  {
    src: "/assets/images/election.png",
    link: "https://vote2024.sku-sku.com/by-election",
    title: "보궐선거",
    subtitle: "입후보자 확인 및 투표 독려",
  },
  {
    src: "/assets/images/hola.png",
    link: "https://welcome-hola.sku-sku.com/",
    title: "새로운 안녕 올라 HOLA!",
    subtitle: "2024 신입생 오리엔테이션",
  },
  {
    src: "/assets/images/Page.png",
    link: "https://page.sku-sku.com/",
    title: "Page",
    subtitle: "2025년 동아리 연합회 웹사이트",
  },
  {
    src: "/assets/images/PoolUs.png",
    link: "https://poolus.sku-sku.com/",
    title: "POOL:US",
    subtitle: "2023 영암축전",
  },
  {
    src: "/assets/images/Puzzle.png",
    link: "https://puzzle.sku-sku.com/",
    title: "퍼즐 물품 대여 서비스",
    subtitle: "동아리원들의 편의성 확대",
  },
  {
    src: "/assets/images/sketchVillage.png",
    link: "https://sketch39.sku-sku.com/",
    title: "SKETCH VILLAGE",
    subtitle: "2023 동아리 페스티벌",
  },
];

const ProjectCarousel = () => {
    //슬라이더 설정 (자동이랑 반응형)
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3, //Pc에서는 3개보이게
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, //2초 간격으로 자동 슬ㄹ라이드
    arrows: false, //화살표 버튼 제거
    responsive: [ //모바일 반응형
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, //여기서 태플릿이하는 1개
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,//모바일 1개
        },
      },
    ],
  };

  return (
    <div className="py-8 mb-52">
      <div className="flex justify-center items-center">
        <div className="w-[85%] mx-auto">
            {/* react-slick 슬라이더 적용 */}
          <Slider {...settings}>
            {projectData.map((project, index) => (
              <div key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-full"
                >
                  <div className="
                    relative h-[14rem] max-w-[500px] mx-auto rounded-[15px] overflow-hidden
                    w-[85%] sm:w-[75%] md:w-[70%] lg:w-[80%] xl:w-[85%]
                  ">
                    {/* 배경 이미지 + 어둡게 필터 */}
                    <div
                      className="absolute inset-0 bg-center bg-cover rounded-[15px]"
                      style={{
                        backgroundImage: `url(${project.src})`,
                        filter: "brightness(50%)",
                      }}
                    />
                      {/* 프로젝트 텍스트 정보 (타이틀/서브타이틀) */}
                    <div className="relative z-10 flex flex-col justify-end h-full pb-6 pl-6 text-start">
                      <div className="text-3xl fontEB text-white">{project.title}</div>
                      <p className="pt-2 text-xl text-white fontRegular">{project.subtitle}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
