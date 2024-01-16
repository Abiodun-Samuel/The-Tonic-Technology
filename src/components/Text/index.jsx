const sizeClasses = {
  txtOpenSansRegular20Black900: "font-normal font-opensans",
  txtManropeRegular48Black900: "font-manrope font-normal",
  txtWorkSansBold3188: "font-bold font-worksans",
  txtOpenSansBold16: "font-bold font-opensans",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansBold20: "font-bold font-opensans",
  txtOpenSansRegular24: "font-normal font-opensans",
  txtOpenSansBold20Bluegray900: "font-bold font-opensans",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtOpenSansRegular20: "font-normal font-opensans",
  txtOpenSansRegular16Gray600: "font-normal font-opensans",
  txtManropeRegular14: "font-manrope font-normal",
  txtManropeRegular36: "font-manrope font-normal",
  txtManropeRegular48: "font-manrope font-normal",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeRegular28: "font-manrope font-normal",
  txtManropeBold4325: "font-bold font-manrope",
  txtOpenSansRegular16Black900: "font-normal font-opensans",
  txtOpenSansRegular1192: "font-normal font-opensans",
  txtManropeBold3627: "font-bold font-manrope",
  txtManropeBold4325WhiteA700: "font-bold font-manrope",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
