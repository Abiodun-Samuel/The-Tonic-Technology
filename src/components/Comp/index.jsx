import PropTypes from "prop-types";

import { Button, Img, Line, Text } from "../../components";

const Comp = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-black-900 text-xl"
            size="txtOpenSansRegular20Black900"
          >
            We connect our customers with the best?
          </Text>
          <div>
            <Button
              className="flex h-7 items-center justify-center rounded-[50%] w-7"
              shape="circle"
              color="blue_gray_900"
              size="xs"
              variant="fill"
            >
              <Img className="h-6" src="images/img_check.svg" alt="arrowdown" />
            </Button>
          </div>
        </div>
        <Line className="bg-gray-400 h-px w-full" />
      </div>
    </>
  );
};

Comp.propTypes = {
  className: PropTypes.string,
};

export default Comp;
