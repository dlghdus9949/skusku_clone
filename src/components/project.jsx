// src/components/project.jsx
import React, { useEffect, useState } from 'react';
import Project_Tabs from './project_tab'; // Note the change to project_tab
import images from './images'; // Import your images file

const Project = () => {
  // Define your project data directly here using the imported images
  const allProjects = [
    {
      title: "Page",
      subTitle: "2025년 동아리 연합회 웹사이트",
      image: images.project.Page,
      url: "https://page.sku-sku.com/",
      classTh: "13"
    },
    {
      title: "퍼즐 물품 대여 서비스",
      subTitle: "동아리원들의 편의성 확대",
      image: images.project.Puzzle,
      url: "https://www.example.com/puzzle",
      classTh: "12"
    },
    {
      title: "보궐선거",
      subTitle: "입후보자 확인 및 투표 독려",
      image: images.project.election, // Assuming this is for 보궐선거
      url: "https://www.example.com/election",
      classTh: "12"
    },
    {
      title: "새로운 안녕 올라 HOLA!",
      subTitle: "2024 신입생 오리엔테이션",
      image: images.project.hola,
      url: "https://www.example.com/hola",
      classTh: "12"
    },
    {
      title: "2024 총선거",
      subTitle: "입후보자 확인 및 투표 독려",
      image: images.project.election_all, // Assuming this is for 총선거
      url: "https://www.example.com/election-all",
      classTh: "11"
    },
    {
      title: "글LOVER",
      subTitle: "2023 글lover",
      image: images.project.글Lover,
      url: "https://www.example.com/gullover",
      classTh: "11"
    },
    {
      title: "파동",
      subTitle: "2023 영암체전",
      image: images.project.파동,
      url: "https://www.example.com/padong",
      classTh: "11"
    },
    {
      title: "SKETCH VILLAGE",
      subTitle: "2023 동아리 페스티벌",
      image: images.project.sketchVillage,
      url: "https://www.example.com/sketchvillage",
      classTh: "11"
    },
    {
      title: "졸업학점계산기",
      subTitle: "졸업요건 확인",
      image: images.project.졸업학점계산기,
      url: "https://www.example.com/calculator",
      classTh: "11"
    },
    {
      title: "POOL:US",
      subTitle: "2023 영암축전",
      image: images.project.PoolUs,
      url: "https://www.example.com/poolus",
      classTh: "11"
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Initially set all projects
    setFilteredProjects(allProjects);
  }, []);

  const handleTabClick = tabValue => {
    if (tabValue === 'all') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.classTh === tabValue));
    }
  };

  const openProject = url => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen mx-auto lg:container lg:px-5 lg:mb-24">
      <div className="w-10/12 mx-auto pt-28">
        <div className="pb-4 mx-auto text-6xl text-center fontEB md:w-fit md:pb-12 md:pr-20 md:border-b-2 md:text-start md:mx-0">
          <div className="text-[#3B79FF] font-bold">SKU LIKELION</div>
          <div className="text-white font-bold ">PROJECT</div>
        </div>
        <div className="hidden md:block border-b-[2px] border-white mb-4 w-[476px]"></div>
        <Project_Tabs onTabClick={handleTabClick} />
        <div className="grid w-10/12 grid-cols-1 gap-8 mx-auto mt-8 text-white md:gap-16 sm:grid-cols-2 sm:w-full lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="w-10/12 mx-auto cursor-pointer md:w-full hover:textShadow duration-500 hover:translate-y-[-5px] group"
              onClick={() => openProject(project.url)}>
              <div className="relative">
                <img
                  src={project.image} // Use the image path from the project object
                  alt={project.title}
                  className="w-full rounded-[20px] shadow-lg group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                  <span className="px-4 py-2 text-lg text-white bg-blue-500 rounded-lg font-bold">사이트 보러가기</span>
                </div>
              </div>
              <div className="p-2">
                <div className="my-1 text-sm xl:my-2 fontBold min-[500px]:text-lg lg:text-xl xl:text-2xl">
                  {project.title}
                </div>
                <div className="text-xs sm:text-sm xl:text-lg">{project.subTitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;