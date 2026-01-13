const HeroSection = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/newVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="absolute  inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0)_0%,#1C1C1C_100%)]"></div>
            <div className="relative  bottom-6 sm:buttom-auto  sm:top-1/2  lg:top-50  z-10 flex h-full items-center justify-center text-center px-4">
                <div className=" max-w-[90%] absolute max-[450px]:absolute max-[450px]:top-[390] lg:top-[40] md:top-[298] sm:max-w-[70%] md:max-w-[70%] lg:max-w-[60%]">
                    <h1 className="text-white font-extrabold text-[32px] sm:text-[42px] md:text-[56px] lg:text-[74px]">Zomato</h1>
                    <span className="block text-white font-bold text-[20px] sm:text-[26px] md:text-[34px] lg:text-[50px]">India’s #1</span>
                    <span className="block text-white font-bold text-[20px] sm:text-[26px] md:text-[34px] lg:text-[50px]">food delivery app</span>
                    <p className="mt-3 text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mx-auto">Experience fast & easy online ordering on the Zomato app

                    </p>

                    <div className="flex justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
                        <img
                            className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain"
                            src="/playstore.avif"
                            alt="Play Store"
                        />
                        <img
                            className="h-8 sm:h-10 md:h-12 lg:h-14 object-contain"
                            src="/app.avif"
                            alt="App Store"
                        />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HeroSection;
