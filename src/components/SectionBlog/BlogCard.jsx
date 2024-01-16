import { Img, Text } from "..";
import PropTypes from "prop-types";

const BlogCard = (props) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={props.index * 50}
      className={props.className}
    >
      <Img
        className="h-[209px] sm:h-auto object-cover rounded-[12px] w-full"
        alt="rectangle1270"
        src={props?.image}
      />
      <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
        <div className="flex flex-col gap-3 items-start justify-start w-auto">
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Text
              className="text-base text-blue_gray-900 w-auto"
              size="txtOpenSansBold16"
            >
              {props?.category}
            </Text>
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtOpenSansRegular16Gray600"
            >
              {props?.publishedAt}
            </Text>
          </div>
          <Text
            className="leading-[32.00px] max-w-[300px] md:max-w-full text-black-900 text-xl"
            size="txtOpenSansRegular20Black900"
          >
            {props?.desc}
          </Text>
        </div>
        <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
          <Img
            className="h-8 md:h-auto rounded-[50%] w-8"
            src={props.authorImage}
            alt="ellipseTen"
          />
          <Text
            className="text-base text-black-900 w-[105px]"
            size="txtOpenSansRegular16Black900"
          >
            {props?.author}
          </Text>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  category: PropTypes.string,
  desc: PropTypes.string,
  author: PropTypes.string,
  authorImage: PropTypes.string,
  publishedAt: PropTypes.string,
  index: PropTypes.number,
};

export default BlogCard;
