import Header from "../Header";
import { Button, Img, Text } from "..";
import HeroSvgOne from "../SVG/HeroSvgOne";
import Partners from "../Partners";

const SectionHero = () => {
  return (
    <>
      <div className="font-manrope md:h-[1156px] h-[798px] md:px-5 relative w-full">
        <div  className="md:h-[1156px] h-[798px] m-auto w-full">
          <div className="bg-blue_gray-900 flex flex-col h-full items-center justify-end m-auto p-16 md:px-10 sm:px-5 w-full">
           <Partners/>
          </div>
          <Img
            className="absolute h-[504px] object-cover right-[0] top-[0] w-[45%]"
            src="images/img_ellipse9.png"
            alt="ellipseNine"
          />
        </div>
        <div className="absolute flex flex-col gap-[53px] inset-x-[0] items-center justify-start mx-auto top-[6%] max-w-[1200px]">
          <Header />

          <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between max-w-[1200px] w-full">
            <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[72.00px] max-w-[567px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtManropeRegular48"
                >
                  Save time by building fast with Boldo Template
                </Text>
                <Text
                  className="leading-[28.00px] max-w-[567px] md:max-w-full text-base text-blue_gray-50"
                  size="txtOpenSansRegular16"
                >
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 h-[60px] md:h-auto items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[247px] outline outline-[2px] outline-green-A200_01 text-center text-xl"
                  shape="round"
                  color="green_A200"
                  size="lg"
                  variant="fill"
                >
                  Buy template
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[187px] text-center text-xl"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="outline"
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[42%] md:w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <HeroSvgOne />
                </div>
                <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-between w-full">
                  <div className="bg-white-A700_2d flex flex-col gap-4 justify-start p-[13px] rounded-[15px]">
                    <Img
                      className="h-[9px] ml-0.5 md:ml-[0]"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                    <Img
                      className="h-[106px] mb-[7px] md:ml-[0] ml-[11px] mr-3.5"
                      src="images/img_group208.svg"
                      alt="group208"
                    />
                  </div>
                  <Img
                    className="h-[165px]"
                    src="images/img_group264.svg"
                    alt="group264"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHero;
