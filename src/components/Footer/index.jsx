import { Button, Img, Input, Text } from "..";

const Footer = () => {
  return (
    <footer className="flex font-manrope items-center justify-center mt-[124px] md:px-5 w-full">
      <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-center w-full">
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[12px] w-[87%] md:w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[391px] items-center justify-start p-[72px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group3.svg')" }}
          >
            <div className="flex flex-col items-center justify-start w-[68%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                  <Text
                    className="leading-[72.00px] text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
                    size="txtManropeRegular48"
                  >
                    An enterprise template to ramp up your company website
                  </Text>
                  <div className="flex md:flex-col flex-row font-opensans gap-6 items-center justify-start w-[85%] md:w-full">
                    <Input
                      name="group275"
                      placeholder="Your email address"
                      className="p-0 placeholder:text-black-900 text-center text-xl w-full"
                      wrapClassName="md:mt-0 my-0.5 outline outline-[2px] outline-white-A700 rounded-[28px] w-[62%] md:w-full"
                      type="email"
                      size="xs"
                    ></Input>
                    <Button
                      className="cursor-pointer font-bold min-w-[210px] outline outline-[2px] outline-green-A200 text-center text-xl"
                      shape="round"
                      color="green_A200"
                      size="lg"
                      variant="fill"
                    >
                      Start now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col font-opensans items-start justify-start p-[91px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[26px] w-[93%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[27%] md:w-full">
              <div className="flex flex-row font-manrope gap-[11px] items-center justify-start w-[52%] md:w-full">
                <Img
                  className="h-8"
                  src="images/img_user_blue_gray_900.svg"
                  alt="user_Three"
                />
                <Text
                  className="sm:text-[33.25px] md:text-[39.25px] text-[43.25px] text-blue_gray-900"
                  size="txtManropeBold4325"
                >
                  Boldo
                </Text>
              </div>
              <Text
                className="leading-[28.00px] mt-[29px] text-base text-gray-600 w-full"
                size="txtOpenSansRegular16Gray600"
              >
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </Text>
              <Text
                className="mt-[68px] text-base text-gray-600"
                size="txtOpenSansRegular16Gray600"
              >
                All rights reserved.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[58%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[93%] md:w-full">
                    <Text
                      className="text-black-900 text-xl"
                      size="txtOpenSansBold20"
                    >
                      Landings
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[155px] sm:mt-0 mt-0.5 text-black-900 text-xl"
                      size="txtOpenSansBold20"
                    >
                      Company
                    </Text>
                    <Text
                      className="mb-0.5 sm:ml-[0] ml-[150px] text-black-900 text-xl"
                      size="txtOpenSansBold20"
                    >
                      Resources
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="leading-[32.00px] text-gray-600 text-xl"
                      size="txtOpenSansRegular20"
                    >
                      <>
                        Home
                        <br />
                        <br />
                        Products
                        <br />
                        <br />
                        Services
                      </>
                    </Text>
                    <div className="h-[172px] relative w-1/4 sm:w-full">
                      <Text
                        className="absolute h-full inset-y-[0] leading-[32.00px] left-[0] my-auto text-gray-600 text-xl"
                        size="txtOpenSansRegular20"
                      >
                        <>
                          Home
                          <br />
                          <br />
                          Careers
                          <br />
                          <br />
                          Services
                        </>
                      </Text>
                      <Button
                        className="absolute cursor-pointer font-bold h-max inset-y-[0] min-w-[72px] my-auto right-[0] rounded-[15px] text-[13px] text-center"
                        color="green_A200"
                        size="sm"
                        variant="fill"
                      >
                        Hiring!
                      </Button>
                    </div>
                    <Text
                      className="leading-[32.00px] text-gray-600 text-xl"
                      size="txtOpenSansRegular20"
                    >
                      <>
                        Blog
                        <br />
                        <br />
                        Products
                        <br />
                        <br />
                        Services
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
