import React from "react";
import { articleProps } from "../../utils/data";
import { Button, List, Text } from "..";
import BlogCard from "./BlogCard";

const SectionBlog = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-3 h-[184px] md:h-auto items-center justify-center max-w-[842px] mt-[154px] mx-auto md:px-5 w-full"
      >
        <Text
          className="text-gray-600 text-xl w-auto"
          size="txtOpenSansRegular20"
        >
          Our Blog
        </Text>
        <Text
          className="leading-[72.00px] max-w-[842px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
          size="txtManropeRegular48Black900"
        >
          Value proposition accelerator product management venture
        </Text>
      </div>
      <List
        className="sm:flex-col flex-row font-opensans gap-1.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1100px] mt-[79px] mx-auto md:px-5 w-full"
        orientation="horizontal"
      >
        {articleProps.map((props, index) => (
          <React.Fragment key={`blog${index}`}>
            <BlogCard
              index={index}
              className="flex flex-col gap-6 items-start justify-start w-[344px]"
              {...props}
            />
          </React.Fragment>
        ))}
      </List>
      <Button
        className="cursor-pointer font-bold font-opensans min-w-[219px] mt-[84px] text-center text-xl"
        shape="round"
        color="blue_gray_900"
        size="lg"
        variant="outline"
      >
        Load more
      </Button>
    </>
  );
};

export default SectionBlog;
