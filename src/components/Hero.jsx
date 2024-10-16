import { assets } from "@/assets/assets";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-xl border-gray-400 shadows">
      {/* hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <Button
              variant="secondary"
              className="font-medium text-sm md:text-base rounded-xl"
            >
              OUR BESTSELLERS
            </Button>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <Button className="font-semibold text-sm md:text-base rounded-xl">
              SHOP NOW
            </Button>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* hero right side */}
      <img
        src={assets.hero_img}
        alt="hero image"
        className="w-full sm:w-1/2 rounded-xl shadow-xl"
      />
    </div>
  );
};

export default Hero;
Hero;
