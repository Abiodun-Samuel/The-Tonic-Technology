import PropTypes from "prop-types";

const variants = {
  fill: {
    blue_gray_900: "bg-blue_gray-900 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 shadow-bs text-black-900",
  },
};
const shapes = { round: "rounded" };
const sizes = { xs: "pb-[13px] pt-3.5 px-[13px]", sm: "p-5" };

const Tab = (props) => {
  const {
    text,
    className,
    wrapClassName,
    prefix,
    shape,
    size = "sm",
    variant = "fill",
    color = "white_A700",
  } = props;
  return (
    <>
      <div
        className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
      >
        {!!prefix && prefix}
        <span className={`${className} bg-transparent border-0`}>{text}</span>
      </div>
    </>
  );
};

Tab.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  prefix: PropTypes.any,
  color: PropTypes.oneOf(["blue_gray_900", "white_A700"]),
};

export { Tab };
