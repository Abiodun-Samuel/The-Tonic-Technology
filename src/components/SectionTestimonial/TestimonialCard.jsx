import PropTypes from "prop-types";
import { Img, Text } from "../../components";

const TestimonialCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="leading-[36.00px] max-w-[270px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtOpenSansRegular24"
        >
          {props?.testimonial}
        </Text>
        <div className="flex flex-col items-center justify-start">
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <Img
              className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
              src={props.profileImg}
              alt="ellipseFour"
            />
            <div className="flex flex-col gap-[9px] items-start justify-start">
              <Text
                className="text-base text-blue_gray-900"
                size="txtOpenSansBold16"
              >
                {props?.username}
              </Text>
              <Text
                className="text-blue_gray-900 text-sm"
                size="txtOpenSansRegular14"
              >
                {props?.profile}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TestimonialCard.propTypes = {
  username: PropTypes.string,
  testimonial: PropTypes.string,
  profile: PropTypes.string,
  className: PropTypes.string,
  profileImg: PropTypes.string,
};

export default TestimonialCard;
