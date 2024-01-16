import { Img, List, Text } from "..";
import Comp from "../../components/Comp";

const SectionInfo = () => {
  return (
    <>
      <Img
        data-aos="fade-up"
        className="h-[403px] sm:h-auto max-w-[1100px] mt-[124px] mx-auto object-cover rounded-[24px] w-full"
        src="images/img_image.png"
        alt="image_Nine"
      />
      <div
        data-aos="fade-up"
        data-aos-delay={50}
        className="flex md:flex-col flex-row font-manrope md:gap-10 gap-[100px] items-start justify-start max-w-[1100px] mt-14 mx-auto md:px-5 w-full"
      >
        <Text
          className="sm:flex-1 leading-[56.00px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-[46%] md:w-[100%]"
          size="txtManropeRegular36"
        >
          We connect our customers with the best, and help them keep up-and stay
          open.
        </Text>
        <List
          className="flex flex-col font-opensans gap-8 w-[46%] md:w-[100%]"
          orientation="vertical"
        >
          <Comp className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full" />
          <Comp className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full" />
        </List>
      </div>
    </>
  );
};

export default SectionInfo;
