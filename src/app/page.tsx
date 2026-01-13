import ExternalSection from "@/components/ExtenalSection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";


export default function Home() {
  return (
    <>
    <div className=" w-full overflow-x-hidden ">
      <HeroSection />
    <MainSection />
    <Feature />
    <ExternalSection />
    <Footer />
    </div>
    
    </>
    
  );
}
