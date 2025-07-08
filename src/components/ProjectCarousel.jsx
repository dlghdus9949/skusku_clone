import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectData = [
  {
    src: "/assets/images/Lover.png",
    link: "https://lover.sku-sku.com/",
    title: "글LOVER",
    subtitle: "2023 글천절",
  },
  {
    src: "/assets/images/grad-calculator.png",
    link: "https://grad.sku-sku.com/",
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
    link: "https://election-all.sku-sku.com/",
    title: "2024 총선거",
    subtitle: "입후보자 확인 및 투표 독려",
  },
  {
    src: "/assets/images/election.png",
    link: "https://election.sku-sku.com/",
    title: "보궐선거",
    subtitle: "입후보자 확인 및 투표 독려",
  },
  {
    src: "/assets/images/hola.png",
    link: "https://hola.sku-sku.com/",
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 mb-52">
      <div className="flex justify-center items-center">
        <div className="w-[85%] mx-auto">
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
                    <div
                      className="absolute inset-0 bg-center bg-cover rounded-[15px]"
                      style={{
                        backgroundImage: `url(${project.src})`,
                        filter: "brightness(50%)",
                      }}
                    />
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
