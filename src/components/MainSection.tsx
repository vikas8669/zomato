import React from "react";

const MainSection = () => {
  return (
    <>
      <div className="relative mx-auto flex h-[28em] w-full max-w-[1880px] items-center justify-center rounded-t-3xl bg-white md:h-[40em] overflow-visible  ">
        <div className="absolute left-0 top-[32px] h-screen w-[70%] translate-x-[-70%]">
          <img className="h-auto w-full" src="/timeline.avif" alt="" />
        </div>
        <div className="absolute right-0 top-[-20%] h-auto w-[70%] translate-x-[65%]">
          <img className="h-auto w-full" src="/timeline.avif" alt="" />
        </div>
        <div className="absolute top-[142px] flex flex-col items-center gap-6 2xl:gap-8 justify-center md:top-[240px]">
          <div className=" text-red-500 text-6xl flex flex-col text-heading w-5/12 whitespace-pre-line text-center font-semibold text-zRed500 md:w-5/12  lg:w-8/12">
            Better food for <span>more people</span>
          </div>
          <div className="text-2xl  text-subtitle w-5/12 text-center  font-light  text-comet md:w-5/12 ">
            For over a decade, we’ve enabled our customers to discover new
            tastes, delivered right to their doorstep
          </div>

          <img
            className="absolute h-70 w-70 top-[-20%] rounded-lg left-[8%] xl:left-[-5%]"
            src="/b.avif"
            alt=""
          />
          <img
            className="absolute h-60 w-60 top-[5%] z-30 aspect-[420/370]  rounded-lg  xl:right-[0%] xl:top-[-210] "
            src="/m.avif"
            alt=""
          />
          <img
            className="absolute h-60 w-60 right-[12%] top-[50%] xl:bottom-10  xl:right-[-7%] aspect-square rounded-lg  "
            src="/p.avif"
            alt=""
          />
          <img
            className=" absolute top-[-60%] left-[23%] w-8 xl:w-12 aspect-[92/67] rotate-2"
            src="/l.avif"
            alt=""
          />

          <img
            className="  absolute xl:right-[-10%]  xl:top-[-10] w-8 xl:w-12 aspect-[158/125] rotate-45"
            src="/t.avif"
            alt=""
          />

          <img
            className="absolute xl:bottom-[-40%] xl:left-[-10%] w-8 xl:w-12 aspect-[158/125] -rotate-2"
            src="/t.avif"
            alt=""
          />
        </div>
      </div>
      <div className=" mb-4 z-50 bg-white mx-auto flex w-fit max-w-screen-lg items-center justify-center gap-8 rounded-2xl border-[0.64px] border-zRed100 px-4 py-3 shadow-[0px_2.777px_13.401px_0px_rgba(0,0,0,0.09)] lg:rounded-4xl lg:px-7 lg:py-6 2xl:gap-12  2xl:mt-14">
        <div className="flex items-center">
          <div>
            <div className="text-2xl font-bold text-comet lg:text-3xl 2xl:text-4xl">
              <span className="text-gray-600">3,00,000+</span>
            </div>
            <div className="text-slateGrey md:text-base lg:text-lg">
              <span className="text-gray-500">restaurants</span>
            </div>
          </div>
          <img
            className="ml-4 max-h-10 lg:max-h-14 2xl:ml-8"
            src="/mm.webp"
            alt=""
          />
        </div>

      <div className="h-9 lg:h-12 xl:h-16 w-1 border-l border-lavenderMist"></div>
        <div className="flex items-center">
          <div>
            <div className="text-2xl font-bold text-comet lg:text-3xl 2xl:text-4xl">
              <span className="text-gray-600">800+</span>
            </div>
            <div className="text-slateGrey md:text-base lg:text-lg">
              <span className="text-gray-500">cities</span>
            </div>
          </div>
          <img className="ml-4 max-h-10 lg:max-h-14 2xl:ml-8" src="/loc.avif" alt="" />
        </div>


        <div className="h-9 lg:h-12 xl:h-16 w-1 border-l border-lavenderMist"></div>
        <div className="flex items-center">
          <div className="">
            <div className="text-2xl font-bold text-comet lg:text-3xl 2xl:text-4xl">
              <span className="text-gray-600">3 billion+</span>
            </div>
            <div className="text-slateGrey md:text-base lg:text-lg">
              <span className="text-gray-500">cities</span>
            </div>
          </div>
          <img className="ml-4 max-h-10 lg:max-h-14 2xl:ml-8" src="/scrape.avif" alt="" />
        </div>
      </div>
      
    </>
  );
};

export default MainSection;
