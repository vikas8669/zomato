import React from "react";

const MainSection = () => {
  return (
    <>
      <div className="relative  sm:rounded-tr-full  md:z-40 mx-auto flex h-[28em] md:h-[45rem] w-full max-w-[1880px] items-center justify-center  bg-white md:h-[40em] overflow-visible  ">
        <div className="absolute hidden sm:block left-0  h-screen   w-[70%] translate-x-[-70%]">
          <img className="absolute lg:h-[90vh] md:h-[30rem] w-full" src="/timeline.avif" alt="" />
        </div>
        <div className="absolute hidden sm:block md:z-0 right-2 top-[-20%] lg:top-[-120] md:top-[-20%] h-auto w-[70%] translate-x-[65%]">
          <img className="h-auto w-full " src="/timeline.avif" alt="" />
        </div>
        <div className="absolute max-[450px]:top-[100]  sm:top-[142px] flex flex-col items-center gap-6 2xl:gap-8 justify-center md:top-[230px]">
          <div className=" text-red-500 max-[450px]:text-2xl md:text-4xl lg:text-5xl flex flex-col  w-5/12 text-center font-semibold md:w-5/12  lg:w-8/12">
            Better food for  <span>more people</span>
          </div>
          <div className=" max-[450px]:text-base max-[450px]:text-gray-700 text-2xl md:text-base lg:text-2xl text-subtitle w-5/12 text-center  font-light  text-comet md:w-5/12 ">
            For over a decade, we’ve enabled our customers to discover new
            tastes, delivered right to their doorstep
          </div>

          <img
            className="absolute  max-[450px]:h-30 max-[450px]:w-30  max-[450px]:top-[20] max-[450px]:left-[10] md:h-40 md:w-40 lg:h-60 lg:w-60 lg:top-[-40%] md:top-[50%] rounded-lg left-[8%] lg:left-[-60] xl:left-[-5%]"
            src="/b.avif"
            alt=""
          />
          <img
            className="absolute max-[450px]:h-30 max-[450px]:w-30  max-[450px]:top-[-100] max-[450px]:right-[10] md:h-40 md:w-45 lg:h-60 lg:w-60 lg:top-[-150] lg:right-[-20] md:top-[-81%] md:right-[80]  z-30 aspect-[420/370]  rounded-lg  xl:right-[0%] xl:top-[-210] "
            src="/m.avif"
            alt=""
          />
          <img
            className="absolute max-[450px]:h-30 max-[450px]:w-30  max-[450px]:top-[140] max-[450px]:right-[30] md:h-50 md:w-50 md:right-[90]  lg:h-60 lg:w-60 lg:right-[-10] lg:top-[70%] md:top-[150] xl:bottom-10  xl:right-[-7%] aspect-square rounded-lg  "
            src="/p.avif"
            alt=""
          />
          <img
            className=" absolute max-[450px]:h-5 max-[450px]:w-5  max-[450px]:top-[-70] max-[450px]:left-[130] lg:top-[-55%] lg:left-[20%] md:top-[-180] md:left-[230] w-8 xl:w-12 aspect-[92/67] rotate-2"
            src="/l.avif"
            alt=""
          />

          <img
            className="  absolute max-[450px]:h-5 max-[450px]:w-5 max-[450px]:top-[99] max-[450px]:right-[50] md:right-[80] md:top-[80] lg:right-[4] lg:top-[101] xl:right-[-10%]  xl:top-[-10] w-8 xl:w-12 aspect-[158/125] rotate-45"
            src="/t.avif"
            alt=""
          />

          <img
            className="absolute max-[450px]:h-5 max-[450px]:w-5 max-[450px]:bottom-[10] max-[450px]:left-[50]  md:bottom-[-130%]  md:left-[20%] lg:bottom-[-210] lg:left-[70] xl:bottom-[-40%] xl:left-[-10%] w-8 xl:w-12 aspect-[158/125] -rotate-2"
            src="/t.avif"
            alt=""
          />
        </div>
      </div>
      <div className="relative max-[450px]:grid max-[450px]:gap-15 max-[450px]:grid-col-1 mb-4  bg-white  mx-auto flex w-fit max-w-screen-lg items-center  justify-center gap-8 md:rounded-2xl  md:border-[0.64px] lg:rounded-2xl lg:boder-[0.64px] lg:md:border-[0.64px] lg:rounded-2xl lg:boder-[0.64px] px-4 py-3 md:shadow-[0px_2.777px_13.401px_0px_rgba(0,0,0,0.09)]  px-4 py-3 md:shadow-[0px_2.777px_13.401px_0px_rgba(0,0,0,0.09)] lg:rounded-4xl lg:px-7 lg:py-6 2xl:gap-12  2xl:mt-14">
        <div className="flex items-center max-[450px]:rounded-2xl max-[450px]:border-[0.64px] px-4 py-3">
          <div className="">
            <div className=" text-2xl font-bold text-comet lg:text-3xl 2xl:text-4xl">
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
       <div className="  max-[450px]:hidden max-[450px]:block md:h-9 lg:h-12 xl:h-16 w-1 border-l border-lavenderMist p-3 "></div>
        <div className=" max-[450px]:absolute max-[450px]:top-[95] max-[450px]:right-[-49] max-[450px]:bg-white  max-[450px]:z-50 max-[450px]:-translate-y-4 max-[450px]:rotate-[9deg]">
         <div className="flex items-center max-[450px]:rounded-2xl max-[450px]:border-[0.64px] px-4 py-3">
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
        </div>


        <div className="max-[450px]:hidden max-[450px]:block h-9 lg:h-12 xl:h-16 w-1 border-l max-[450px]:z-10"></div>
        <div className="flex items-center max-[450px]:rounded-2xl max-[450px]:border-[0.64px] px-4 py-3">
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
