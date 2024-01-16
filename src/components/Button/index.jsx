import PropTypes from "prop-types";

const shapes = { round: "rounded-[30px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    green_A200: "bg-green-A200 text-blue_gray-900",
    blue_gray_900: "bg-blue_gray-900",
    white_A700: "bg-white-A700",
  },
  outline: {
    white_A700: "outline outline-[2px] outline-white-A700 text-white-A700",
    blue_gray_900:
      "outline outline-[2px] outline-blue_gray-900 text-blue_gray-900",
  },
};
const sizes = { xs: "p-px", sm: "p-1.5", md: "p-[9px]", lg: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["green_A200", "blue_gray_900", "white_A700"]),
};

export { Button };
