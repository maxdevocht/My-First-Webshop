import BestSeller from "@/components/BestSeller";
import Hero from "@/components/Hero";
import NewsletterBox from "@/components/NewsletterBox";
import OurPolicy from "@/components/OurPolicy";
import LatestCollection from "@/context/LatestCollection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default HomePage;
