import { Img } from "..";
import { partners } from "../../utils/data";

const Partners = () => {
  return (
    <div className="flex justify-between md:h-[1028px] sm:h-[670px] h-[93px] mt-[577px] relative w-[93%] max-w-[1200px]">
      {partners.map((img, indx) => (
        <Img key={indx} className="h-[33px]" src={img} alt="partner's logo" />
      ))}
      <div className="absolute bg-gradient  h-[93px] inset-[0] justify-center m-auto w-full"></div>
    </div>
  );
};

export default Partners;
