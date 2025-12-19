"use client";
import ReactHtmlParser from "react-html-parser";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

const Jumbotron = ({ title, thecaption, cssClass, junBtn, junBtnUrl }) => {
  const caption = {
    translateY: [0, -30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    className: "z-10 flex flex-col justify-end py-[3%]",
    children: (
      <div className="w-full sm:w-7xl md:w-7xl lg:w-7xl mx-auto flex gap-12 items-start relative z-20 px-12 sm:px-0 md:px-0 lg:px-0">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#BA9560] text-[30px] sm:text-[62px] md:text-[62px] lg:text-[62px] leading-[34px] sm:leading-[66px] md:leading-[66px] lg:leading-[66px] font-black max-w-[660px]">
            {title != "" ? ReactHtmlParser(title) : ""}
          </h2>
          <p className="text-[#444444] text-[17px] leading-8 max-w-[500px]">{ReactHtmlParser(thecaption)}</p>
          <a
            className="text-white bg-[#BA9560] hover:text-black border border-white rounded-[50px] py-2 px-10 sm:px-18 md:px-18 lg:px-18 flex items-center w-fit overflow-hidden uppercase text-[17px] tracking-[3px] relative group cursor-pointer"
            href={junBtnUrl}
          >
            <span className="absolute w-100 h-0 transition-all duration-300 origin-center rotate-0 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-white transition duration-300 group-hover:text-white ease">{junBtn}</span>
          </a> 
        </div>
      </div>
    ),
  };

  const overlay = {
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    className: "h-full z-0 bg-[url(/images/main-banner.png)] bg-no-repeat bg-cover bg-center sm:bg-top-right md:bg-top-right lg:bg-top-right",
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[caption, overlay]}
        className={`jumboton relative min-h-[120vh] sm:min-h-screen md:min-h-screen lg:min-h-screen } ${cssClass}`}
      />
    </ParallaxProvider>
  );
};
export default Jumbotron;
