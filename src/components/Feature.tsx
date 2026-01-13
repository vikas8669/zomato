import React from 'react'

const Feature = () => {
    return (
        <>
            <div className='relative pt-20 mt-7 xl:mt-16 xl:pt-28 2xl:pt-36 2xl:mt-24 flex w-full flex-col items-center  overflow-y-hidden bg-[linear-gradient(0deg,#FFFFFF_0%,#FFEDEF_100%)] '>
                <div className='flex flex-col gap-6 '>
                    <div className='flex size-full flex-col items-center justify-center'>
                        <div className='text-6xl max-[450px]:text-2xl  w-7/12 text-center  font-bold  text-red-500 lg:w-9/12'>
                            What’s waiting for you on the app?
                        </div>
                        <div className=' max-[450px]:text-base mt-6 w-7/12 text-center font-light md:w-5/12'>
                            Our app is packed with features that enable you to experience food delivery like never before
                        </div>
                    </div>

                </div>
            </div>




            <div className='h-fit w-full overflow-hidden mt-4'>
                <div className='relative mx-auto  grid aspect-[3/1] w-full grid-cols-6  grid-rows-2 gap-4  md:max-w-screen-md xl:max-w-[1024px] xl:gap-6'>
                    <div className='relative col-span-2 col-start-1 row-span-2 grid  h-full grid-cols-2 grid-rows-2 gap-4 xl:gap-6 '>
                        <div className='flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-right scale-75'>
                            <div className='w-full '>
                                <img className='mx-auto h-auto w-full '
                                    src="https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png" alt="" />
                            </div>
                            <div className='px-2 text-center text-sm  xl:text-lg xl:leading-[24px] font-normal md:px-4 justify-self-end'>
                                Healthy
                            </div>
                        </div>


                        <div className='flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-left scale-75 -translate-y-6'>
                            <div className='w-full '>
                                <img className='mx-auto h-auto w-full' src="https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png" alt="" />
                            </div>
                            <div className='px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal md:px-4 justify-self-end'> Veg Mode
                            </div>
                        </div>


                        <div className='flex flex-col items-center justify-start rounded-2xl xl:rounded-3xl border  pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-right scale-75 pt-0 translate-x-6'>
                            <div className='w-full '>
                                <img className='mx-auto h-auto w-full' src="https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png" alt="" />
                            </div>
                            <div className='px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end'> pay a party
                            </div>
                        </div>


                        <div className='flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-left scale-75 -translate-y-6 translate-x-6'>
                            <div className='w-full '>
                                <img className='mx-auto h-auto w-full'
                                    src="https://b.zmtcdn.com/data/o2_assets/867f86a10503998e437963bb37c451591742455764.png" alt="" />
                            </div>
                            <div className='px-2 text-center text-sm  xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end'> Gift Cards
                            </div>
                        </div>
                    </div>


                    <div className='relative  max-[450px]:hidden max-[450px]-block col-span-2 col-start-3 row-span-2 flex h-full overflow-hidden'>
                        <div className='h-full w-full flex flex-col items-center justify-end transition-transform duration-700 ease-out translate-y-0'>
                            <div className='absolute -bottom-5 left-0 h-full w-full'>
                                <img src="https://b.zmtcdn.com/data/o2_assets/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="" />
                            </div>

                            <div className='z-50 mb-6 xl:mb-8 aspect-[8/9] w-1/2 scale-90 '>
                                <div className='flex w-full flex-col items-center justify-start rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white mx-auto aspect-[26/29] pt-4'>
                                    <div className='w-full'>
                                        <img src="https://b.zmtcdn.com/data/o2_assets/cc1caf220c91be38dd94cce12b416fcd1746550226.png" alt="" />
                                    </div>
                                    <div className='px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end'>
                                        Schedule
                                        <br />
                                        your order
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* right side */}
                    <div className='relative col-span-2 col-start-5 row-span-2  grid h-full  -translate-x-6 grid-cols-2 grid-rows-2 gap-4 xl:gap-6 '>
                        <div className='flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-right scale-75 -translate-x-6'>
                            <div className='w-full'>
                                <img className='mx-auto h-auto w-full'
                                    src="https://b.zmtcdn.com/data/o2_assets/6e27c9acde6045c272a28e6eb275727e1742455789.png" alt="" />
                            </div>
                            <div className='px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end'>
                                Gourmet
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-bottom-left scale-75 -translate-y-6 -translate-x-6'>
                            <div className='w-full'>
                                <img className='mx-auto h-auto w-full'
                                    src="https://b.zmtcdn.com/data/o2_assets/813952c961fd13588cb71867d84ea7dc1742455815.png" alt="" />

                            </div>
                            <div className='px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end'>
                                Offers
                            </div>
                        </div>



                        <div className='flex flex-col items-center justify-start rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-right scale-75 pt-0'>
                            <div className='w-full'>
                                <img className='mx-auto h-auto w-full '
                                    src="https://b.zmtcdn.com/data/o2_assets/06d090307e02772693ac06123b53459b1742455939.png" alt="" />
                            </div>
                            <div className='px-2 text-center text-sm my-auto xl:text-lg xl:leading-[24px] font-normal text-darkSlateGrey md:px-4 justify-self-end'>
                                Food on
                                <br />
                            </div>
                        </div>


                        <div className='flex flex-col items-center justify-start pt-2 rounded-2xl xl:rounded-3xl border border-lavenderMist pb-2 shadow-lg 2xl:rounded-[32px] bg-white aspect-[26/29] w-full origin-top-left scale-75 -translate-y-6'>
                            <div className='w-full'>
                                <img className='mx-auto h-auto w-full' src="https://b.zmtcdn.com/data/o2_assets/5e973dd10c387878009c66d625ae541a1746550690.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='absolute -bottom-14  left-0 h-[112px] w-full bg-[linear-gradient(0deg,_rgba(255,_255,_255,_100)_0%,_rgba(255,_255,_255,_50)_70%,_rgba(255,_255,_255,_0)_100%)]'></div>
                </div>
            </div>


            {/* curve section  */}

            {/* <div className='relative'>
                <div className='relative mb-14 flex w-screen flex-col items-center justify-center overflow-hidden bg-black px-10  py-[20vw] text-white xl:px-20 xl:py-72'>

                    <img className='absolute left-0 top-20 z-[99]  size-28 lg:size-36 xl:size-44 2xl:size-48 opacity-80 -translate-x-[100px] -translate-y-[100px] ' 
                    src="https://b.zmtcdn.com/data/o2_assets/e7a502b732de9cd0d5ceca82306137ca1743059837.png" alt="" />


                    <img className='absolute right-4 top-[2%] z-[99] size-36 lg:size-44 xl:size-56 2xl:size-64 opacity-100 translate-x-0 translate-y-0 ' 
                    src="https://b.zmtcdn.com/data/o2_assets/ef5bc22bc703882ccb11a5b75ad6704b1743059783.png" alt="" />


                    <img className='absolute  z-[99] size-24 lg:size-28 xl:size-36 2xl:size-44 will-change-transform  bottom-[5vw] right-[20vw] opacity-100 translate-x-0 translate-y-0 ' 
                    src="https://b.zmtcdn.com/data/o2_assets/3658cc04dba86e5dfa2d99f070e1fc171743059861.png" alt="" />
                </div>

                <div className='flex w-fit flex-col  items-center justify-center gap-8 2xl:gap-16'>
                    <div className='flex w-[45%] flex-col items-center justify-center gap-6'>
                        <div>
                            <img className='mx-auto h-auto w-3/5' src="https://b.zmtcdn.com/data/o2_assets/5f94743e20e3f668953fda8b0e56f2f71742996005.png" alt="" />
                        </div>

                        <div className='text-subtitle  text-center font-normal bg-gradient-to-r from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text  text-transparent'>
                            <div>India’s Top Savings</div>
                            <div>Program for Food Lovers</div>
                        </div>
                    </div>

                    <div className='inline-flex items-center justify-center gap-2 '>
                        <div className='mb-1 mr-1'>
                            <span className='z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-base leading-5'></span>
                        </div>
                        <div className=' text-subHeading tracking-[4px] text-center text-white'>
                            <span className=''>GOLD BENEFITS</span>
                        </div>
                        <div className='mb-1'>
                            <span className='z-icon bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-transparent text-base leading-5'></span>

                        </div>
                    </div>
                    <div className='flex flex-row justify-start gap-10'>
                        <div className='flex  items-center gap-6 rounded-3xl md:max-w-[384px] lg:aspect-auto xl:max-w-[557px]'>
                            <img className='aspect-square h-full max-h-[74px]' src="https://b.zmtcdn.com/data/o2_assets/bc9d2a579285cbdaa101b8fe2ba68f601741779645.png" alt="" />

                            <div className='flex w-full flex-col items-start justify-center'>
                                <div className='text-subtitle bg-gradient-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text  text-start font-medium text-transparent xl:text-2xl '>
                                    Free Delivery
                                </div>
                                <div className='mt-1 bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-start  text-sm font-normal  text-transparent lg:text-base xl:text-xl'>
                                    At all restaurants within 7 km
                                </div>
                            </div>

                            <div className='flex items-center gap-6 rounded-3xl md:max-w-[384px] lg:aspect-auto xl:max-w-[557px]'>
                                <img className='aspect-square h-full max-h-[74px]' 
                                src="https://b.zmtcdn.com/data/o2_assets/d668ed26c7d4771318d0aa03b3f905e71741779899.png" alt="" />
                            </div>
                            <div className='flex w-full flex-col items-start justify-center'>
                                <div className='text-subtitle bg-gradient-to-br from-[#FEF3E0] to-[#FFFEFC] bg-clip-text  text-start font-medium text-transparent xl:text-2xl '>
                                    Up to 30% extra off
                                </div>
                                <div className='mt-1 bg-gradient-to-br from-[#8C6115] via-[#E9C789] to-[#996F25] bg-clip-text text-start  text-sm font-normal  text-transparent lg:text-base xl:text-xl'>
                                    At 20,000+ partner restaurants
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='absolute bottom-0 left-0 w-1/2'>
                     <img className='aspect-[2466/1089] w-full' src="https://b.zmtcdn.com/data/o2_assets/f64b00427de0a6858432f039ef9e03731739364398.png" alt="" />

                    </div>

                    <div className='absolute bottom-0 left-0 w-1/2'>
                     <img className='aspect-[2466/1089] w-full' src="https://b.zmtcdn.com/data/o2_assets/e80d61bfc77eb2ac157e9807ab021e7b1739365197.png" alt="" />
                    </div>

                    <div className='absolute top-0 l-0 bg-white w-full h-[0px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle></svg>
                    </div>

                    <div className='l-0 absolute bottom-0 h-[0px] w-full rotate-180 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle cx="100" cy="-380" r="400" fill="white" stroke="white"></circle></svg>
                    </div>
                </div>

                <div className='left-0 absolute -top-1 h-2 w-full rotate-180 bg-white'></div>
                <div className='left-0 absolute -bottom-1 h-2 w-full rotate-180 bg-white'></div>
                
            </div> */}
            <section className=" flex w-screen justify-center px-4 overflow-hidden">
                <div
                    className="
          relative w-full 
          bg-black text-white
          py-20 md:py-28
          overflow-hidden
          rounded-none
          md:rounded-[60px]
        "
                >
                    {/* TOP CURVE (Desktop & Tablet only) */}
                    <div className="hidden md:block absolute top-0 left-0 w-full h-24 bg-white rounded-b-[100%]" />

                    {/* BOTTOM CURVE (Desktop & Tablet only) */}
                    <div className="hidden md:block absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[100%]" />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <p className="text-lg font-semibold text-white/90">zomato</p>

                        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-wide text-[#d4af37]">
                            GOLD
                        </h1>

                        <p className="mt-4 text-sm md:text-base text-[#d4af37]/90 max-w-md">
                            India’s Top Savings <br />
                            Program for Food Lovers
                        </p>

                        {/* BENEFITS TITLE */}
                        <div className="flex items-center gap-3 mt-10">
                            <span className="text-[#d4af37]">★</span>
                            <p className="tracking-widest font-semibold">GOLD BENEFITS</p>
                            <span className="text-[#d4af37]">★</span>
                        </div>

                        {/* BENEFITS */}
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                            {/* LEFT */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                                    🍰
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold">Free Delivery</p>
                                    <p className="text-sm text-white/70">
                                        At all restaurants within 7 km
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                                    🛵
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold">Up to 30% extra off</p>
                                    <p className="text-sm text-white/70">
                                        At 20,000+ partner restaurants
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COINS (Decorative) */}
                    <div className="hidden md:block absolute top-8 right-10 text-4xl">🪙</div>
                    <div className="hidden md:block absolute bottom-8 left-10 text-3xl">🪙</div>
                </div>
            </section>

        </>
    )
}

export default Feature
