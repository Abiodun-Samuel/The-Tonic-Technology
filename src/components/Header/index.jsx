import { Button, Img, Text } from "..";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row md:gap-10 items-center justify-between pr-2 w-full">
        <div className="flex flex-row gap-3 items-center justify-start pr-1 w-[14%] sm:w-full">
          <Img
            className="h-[33px]"
            src="images/logo/logo2.svg"
            alt="logo"
          />
        </div>
        <ul className="flex sm:flex-col flex-row gap-10 items-center justify-center w-auto sm:w-full">
          <li>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansSemiBold16"
            >
              Product
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansSemiBold16"
            >
              Services
            </Text>
          </li>
          <li>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansSemiBold16"
            >
              About
            </Text>
          </li>
          <li>
            <Button
              className="!text-blue_gray-900 cursor-pointer font-bold font-opensans outline outline-[2px] outline-white-A700 rounded-[20px] text-base text-center"
              color="white_A700"
              size="md"
              variant="fill"
            >
              Log In
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
