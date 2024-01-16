import React from "react";

import { Button, Img, Text } from "../../components";

const HomepageRowtelevision = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-start pr-1 w-[14%] sm:w-full">
          <Img
            className="h-[33px]"
            src="images/img_television.svg"
            alt="television"
          />
          <Text
            className="sm:text-[33.25px] md:text-[39.25px] text-[43.25px] text-white-A700"
            size="txtManropeBold4325WhiteA700"
          >
            {props?.boldoThree}
          </Text>
        </div>
        <ul className="flex sm:flex-col flex-row gap-10 items-center justify-center w-auto sm:w-full">
          <li>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansSemiBold16"
            >
              {props?.producttext}
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansSemiBold16"
            >
              {props?.servicestext}
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansSemiBold16"
            >
              {props?.abouttext}
            </Text>
          </li>
          <li>
            <Button
              className="!text-blue_gray-900 cursor-pointer font-bold font-opensans outline outline-[2px] outline-white-A700 rounded-[20px] text-base text-center"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.loginbutton}
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

HomepageRowtelevision.defaultProps = {
  boldoThree: "Boldo",
  producttext: "Product",
  servicestext: "Services",
  abouttext: "About",
  loginbutton: "Log In",
};

export default HomepageRowtelevision;
