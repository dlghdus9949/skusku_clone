import React from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import MainSection2 from "./components/MainSection2";
import MainSection3 from "./components/MainSection3";
import MainSection4 from "./components/MainSection4";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full relative z-0 bg-black min-h-screen">
      <Header />
      <ImageSlider />
      <MainSection2 />
      <MainSection3/>
      <MainSection4 />
      <Footer/>
    </div>
  );
}

export default App;
