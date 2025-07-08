import React, { useEffect, useState } from "react";

const images = [
  "/assets/images/main1.png",
  "/assets/images/main2.png",
  "/assets/images/main3.png"
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main1" className="w-full min-h-screen pb-0 mb-0 relative snap-section">
      {/* 고정 텍스트 영역 */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen text-white">
        <div className="flex items-center justify-center flex-grow">
        <div class="title text-[6rem] xl:text-[8rem] leading-none fontBold pb-5"><p class="mb-4 text-[#3B79FF]">SKU</p><p class="">LIKELION 13th</p></div>
        </div>
        <div className="flex items-end justify-center pb-5">
          <img src="/assets/images/mouse.png" alt="마우스 모양" className="mr-3" />
          <p className="font-semibold text-xl text-[#666666] ml-3 flex items-center">Scroll down</p>
        </div>
      </div>

      {/* 배경 이미지 슬라이더 */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`
              absolute top-0 left-0 w-full h-full transition-opacity duration-1000
              ${index === current ? "opacity-100 z-0" : "opacity-0"}
            `}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;