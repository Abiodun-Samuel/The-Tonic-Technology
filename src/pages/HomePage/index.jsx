import { Button, Img, Text } from "../../components";
import HomepageLogo from "../../components/HomepageLogo";
import HomepageRowtelevision from "../../components/HomepageRowtelevision";
import HeroSvgOne from "../../components/SVG/HeroSvgOne";
import ServiceSection from "../../components/SectionService";
import Footer from "../../components/Footer";
import SectionBlog from "../../components/SectionBlog";
import SectionInfo from "../../components/SectionInfo";
import SectionTestimonial from "../../components/SectionTestimonial";

const Homepage = () => {

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-manrope md:h-[1156px] h-[798px] md:px-5 relative w-full">
            <div className="md:h-[1156px] h-[798px] m-auto w-full">
              <div className="bg-blue_gray-900 flex flex-col h-full items-center justify-end m-auto p-16 md:px-10 sm:px-5 w-full">
                <div className="flex md:h-[1028px] sm:h-[670px] h-[93px] justify-end mt-[577px] relative w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between mb-3 mt-auto mx-auto pb-[5px] w-[96%]">
                    <div className="flex flex-row gap-2.5 items-start justify-start pr-2.5 w-[13%] md:w-full">
                      <Img
                        className="h-[33px]"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="sm:text-[32.27px] md:text-[34.27px] text-[36.27px] text-white-A700"
                        size="txtManropeBold3627"
                      >
                        Boldo
                      </Text>
                    </div>
                    <HomepageLogo className="flex flex-col font-worksans items-center justify-start w-[14%] md:w-full" />
                    <div className="flex flex-row font-manrope gap-2.5 items-start justify-center pr-2.5 w-[13%] md:w-full">
                      <Img
                        className="h-[33px]"
                        src="images/img_user.svg"
                        alt="user_One"
                      />
                      <Text
                        className="sm:text-[32.27px] md:text-[34.27px] text-[36.27px] text-white-A700"
                        size="txtManropeBold3627"
                      >
                        Boldo
                      </Text>
                    </div>
                    <HomepageLogo className="flex flex-col font-worksans items-center justify-start w-[14%] md:w-full" />
                    <div className="flex flex-row font-manrope gap-2.5 items-start justify-center pr-2.5 w-[13%] md:w-full">
                      <Img
                        className="h-[33px]"
                        src="images/img_user.svg"
                        alt="user_Two"
                      />
                      <Text
                        className="sm:text-[32.27px] md:text-[34.27px] text-[36.27px] text-white-A700"
                        size="txtManropeBold3627"
                      >
                        Boldo
                      </Text>
                    </div>
                    <HomepageLogo className="flex flex-col font-worksans items-center justify-start w-[10%] md:w-full" />
                  </div>
                  <div className="absolute bg-gradient  h-[93px] inset-[0] justify-center m-auto w-full"></div>
                </div>
              </div>
              <Img
                className="absolute h-[504px] object-cover right-[0] top-[0] w-[45%]"
                src="images/img_ellipse9.png"
                alt="ellipseNine"
              />
            </div>
            <div className="absolute flex flex-col gap-[53px] inset-x-[0] items-center justify-start mx-auto top-[6%] w-[86%]">
              <header className="flex flex-col items-center justify-center w-full">
                <HomepageRowtelevision className="flex flex-row md:gap-10 items-center justify-between pr-2 w-full" />
              </header>
              <div className="flex md:flex-col flex-row font-opensans md:gap-10 items-center justify-between max-w-[1200px] w-full">
                <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[72.00px] max-w-[567px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtManropeRegular48"
                    >
                      Save time by building fast with Boldo Template{" "}
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
          <ServiceSection />

        <SectionTestimonial/>
          <SectionInfo/>
          <SectionBlog />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
