import React from "react";
import { Button, Img, List, Text } from "../../components";
import ServiceCard from "./ServiceCard";
import { serviceProps } from "../../utils/data";
import { Tab } from "../../components/Tab";

const ServiceSection = () => {
  return (
    <>
      <div className="flex flex-col gap-3 h-[185px] md:h-auto items-center justify-center max-w-[842px] mt-[84px] mx-auto md:px-5 w-full">
        <Text
          className="text-gray-600 text-xl w-auto"
          size="txtOpenSansRegular20"
        >
          Our Services
        </Text>
        <Text
          className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
          size="txtManropeRegular48Black900"
        >
          Handshake infographic mass market crowdfunding iteration.
        </Text>
      </div>
      <List
        className="sm:flex-col flex-row font-opensans md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1100px] mt-[78px] mx-auto md:px-5 w-full"
        orientation="horizontal"
      >
        {serviceProps.map((props, index) => (
          <React.Fragment key={`ServiceSection${index}`}>
            <ServiceCard
              className="flex flex-1 flex-col items-center justify-start pb-3 w-full"
              {...props}
            />
          </React.Fragment>
        ))}
      </List>

      <div className="flex md:flex-col flex-row font-manrope md:gap-10 items-center justify-between max-w-[1100px] mt-[185px] mx-auto md:px-5 w-full">
        <div className="md:h-[506px] h-[610px] relative w-[44%] md:w-full">
          <Img
            className="absolute h-full inset-x-[0] mx-auto object-cover rounded-[24px] top-[0] w-full"
            src="images/service/service2.png"
            alt="service"
          />
          
        </div>
        <div className="flex sm:flex-1 flex-col gap-14 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col font-manrope items-center justify-start w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <Text
                className="leading-[56.00px] max-w-[493px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtManropeRegular36"
              >
                We connect our customers with the best, and help them keep
                up-and stay open.
              </Text>
              <div className="flex flex-col font-opensans gap-6 items-start justify-start w-[493px] sm:w-full">
                <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-start w-[91%] md:w-full">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    color="blue_gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_check.svg"
                      alt="check"
                    />
                  </Button>
                  <Text
                    className="text-black-900 text-xl"
                    size="txtOpenSansRegular20Black900"
                  >
                    We connect our customers with the best.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[27px] items-end justify-start w-[88%] md:w-full">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    color="blue_gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_check.svg"
                      alt="check_One"
                    />
                  </Button>
                  <Text
                    className="mb-0.5 sm:mt-0 mt-[5px] text-black-900 text-xl"
                    size="txtOpenSansRegular20Black900"
                  >
                    Advisor success customer launch party.
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-end justify-start w-[73%] md:w-full">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    color="blue_gray_900"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_check.svg"
                      alt="check_Two"
                    />
                  </Button>
                  <Text
                    className="mb-0.5 mt-[5px] text-black-900 text-xl"
                    size="txtOpenSansRegular20Black900"
                  >
                    Business-to-consumer long tail.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="!text-white-A700 cursor-pointer font-bold font-opensans min-w-[210px] outline outline-[2px] outline-blue_gray-900 text-center text-xl"
            shape="round"
            color="blue_gray_900"
            size="lg"
            variant="fill"
          >
            Start now
          </Button>
        </div>
      </div>
      <div className="flex md:flex-col flex-row font-manrope md:gap-10 items-center justify-between max-w-[1100px] mt-[120px] mx-auto md:px-5 w-full">
        <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start w-[46%] md:w-full">
          <Text
            className="leading-[56.00px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-[99%] sm:w-full"
            size="txtManropeRegular36"
          >
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Text>
          <div className="flex flex-col font-opensans gap-6 items-center justify-start w-full">
            <Tab
              text="We connect our customers with the best."
              className="font-semibold p-0 text-white-A700 text-base text-left w-full"
              wrapClassName="flex w-full"
              prefix={
                <Img
                  className="h-7 mr-3 my-auto"
                  src="images/img_music.svg"
                  alt="music"
                />
              }
              shape="round"
              color="blue_gray_900"
            ></Tab>
            <Tab
              text="Advisor success customer launch party."
              className="font-semibold p-0 placeholder:text-black-900 text-base text-left w-full"
              wrapClassName="flex w-full"
              prefix={
                <Img
                  className="h-7 mr-3 my-auto"
                  src="images/img_star.svg"
                  alt="star"
                />
              }
              shape="round"
            ></Tab>
            <Tab
              text="Business-to-consumer long tail."
              className="font-semibold p-0 placeholder:text-black-900 text-base text-left w-full"
              wrapClassName="flex w-full"
              prefix={
                <Img
                  className="mt-auto mb-px h-6 mr-3"
                  src="images/img_sun.svg"
                  alt="sun"
                />
              }
              shape="round"
            ></Tab>
          </div>
        </div>
        <div className="md:h-[523px] h-[692px] relative w-[41%] md:w-full">
          <Img
            className="absolute h-full inset-x-[0] mx-auto object-cover rounded-[24px] top-[0] w-full"
            src="images/service/service3.png"
            alt="rectangle1270_One"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
