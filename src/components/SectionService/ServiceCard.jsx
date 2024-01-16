import { Link } from "react-router-dom";
import { Img, Line, Text } from "../../components";
import PropTypes from "prop-types";

const ServiceCard = (props) => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={props.index * 50}
        className="flex flex-col gap-6 items-start justify-start w-auto md:w-full"
      >
        <Img
          className="h-[354px] sm:h-auto object-cover rounded-bl-[24px] rounded-br-[24px] w-[300px] md:w-full"
          alt="rectangle1270"
          src={props?.img}
        />
        <div className="flex flex-col gap-7 items-start justify-start w-[300px] md:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtOpenSansRegular24"
            >
              {props?.title}
            </Text>
            <Text
              className="leading-[32.00px] max-w-[293px] md:max-w-full text-gray-600 text-xl"
              size="txtOpenSansRegular20"
            >
              {props?.desc}
            </Text>
          </div>
          <Link to={"#"}>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Text
                  className="text-blue_gray-900 text-xl w-auto"
                  size="txtOpenSansBold20Bluegray900"
                >
                  {props?.linkText}
                </Text>
                <Img
                  className="h-[26px] w-6"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <Line className="bg-blue_gray-900 h-px w-full" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  index: PropTypes.number,
  linkText: PropTypes.string,
};

export default ServiceCard;
