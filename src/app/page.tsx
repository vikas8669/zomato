import Feature from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";


export default function Home() {
  return (
    <>
    <div className=" w-full overflow-x-hidden ">
      <HeroSection />
    <MainSection />
    <Feature />
    </div>
    
    </>
    
  );
}
