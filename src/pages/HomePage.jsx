import BestSeller from "@/components/BestSeller";
import Hero from "@/components/Hero";
import LatestCollection from "@/context/LatestCollection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default HomePage;
