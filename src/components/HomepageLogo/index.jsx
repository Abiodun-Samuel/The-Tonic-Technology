import React from "react";

import { Img, Text } from "../../components";

const HomepageLogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-start justify-start w-full">
          <Img
            className="h-[34px]"
            src="images/img_group2.svg"
            alt="groupTwo"
          />
          <Text
            className="sm:text-[27.88px] md:text-[29.88px] text-[31.88px] text-white-A700"
            size="txtWorkSansBold3188"
          >
            {props?.prestotext}
          </Text>
        </div>
      </div>
    </>
  );
};

HomepageLogo.defaultProps = { prestotext: "Presto" };

export default HomepageLogo;
