import ServiceSection from "../../components/SectionService";
import Footer from "../../components/Footer";
import SectionBlog from "../../components/SectionBlog";
import SectionInfo from "../../components/SectionInfo";
import SectionTestimonial from "../../components/SectionTestimonial";
import SectionHero from "../../components/SectionHero";

const Homepage = () => {
  
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <SectionHero />
          <ServiceSection />
          <SectionTestimonial />
          <SectionInfo />
          <SectionBlog />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
