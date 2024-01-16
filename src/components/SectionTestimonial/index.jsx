import { Button, Img, List, Text } from "..";
import TestimonialCard from "./TestimonialCard";
import { testimonialProps } from "../../utils/data";
import Slider from "react-slick";
import { settings } from "../../utils/settings";

const SectionTestimonial = () => {
  const nextSlide = () => {
    console.log("first");
  };
  const previousSlide = () => {
    console.log("first");
  };
  return (
    <div className="bg-blue_gray-900 flex flex-col font-manrope items-center justify-start mt-[120px] p-24 md:px-10 sm:px-5 w-full">
      <div className="flex flex-col gap-14 items-start justify-start max-w-[1150px] mx-auto w-full">
        <div
          data-aos="fade-up"
          className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full"
        >
          <Text
            className="leading-[72.00px] mb-[11px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
            size="txtManropeRegular48"
          >
            An enterprise template to ramp up your company website
          </Text>
          <div className="flex sm:mt-0 mt-[82px]">
            <Button
              onClick={previousSlide}
              className="cursor-pointer h-[72px] w-[72px] flex items-center justify-center"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img src="images/icons/arrow-left.png" alt="arrows" />
            </Button>
            <Button
              onClick={nextSlide}
              className="cursor-pointer h-[72px] w-[72px] flex items-center justify-center ms-5"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img src="images/icons/arrow-right.png" alt="arrows" />
            </Button>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row font-opensans gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[96%]"
          orientation="horizontal"
        >
          {testimonialProps.map((props, index) => (
            <Slider {...settings} key={`TestimonialCard${index}`}>
              <TestimonialCard
                index={index}
                className="bg-white-A700 flex flex-col gap-10 items-start justify-start p-10 sm:px-5 rounded-[12px] shadow-bs1 w-auto"
                {...props}
              />
            </Slider>
          ))}
        </List>
      </div>
    </div>
  );
};

export default SectionTestimonial;
