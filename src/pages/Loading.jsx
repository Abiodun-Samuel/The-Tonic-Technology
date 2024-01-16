import { Img } from "../components";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <Img
        src="images/logo/logo.svg"
        alt="logo"
      />
    </div>
  );
};

export default Loading;
