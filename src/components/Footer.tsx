import React from "react";
import GooglePlaySVG from "../assets/googleplay.svg?react";
import AppleStoreSVG from "../assets/applestore.svg?react";

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="bg-secondaryGrey h-[30rem] mt-8">
      <div className="w-full md:px-12 xl:px-20 h-full relative">
        <h2 className="text-[36px] font-bold text-[#605F5F]">
          Download our app now
        </h2>
        <div className="bg-white rounded-[18px] h-60 absolute w-[calc(100%_-_8rem)] lg:w-[calc(100%_-_8rem)] md:w-[calc(100%_-_3rem)] bottom-4"></div>
        <div className="flex justify-center mb-8 md:mb-0 absolute  bottom-4">
          <img
            src="images/Icons/appstore.svg"
            alt="BHIVE Workspace app screen 1"
            className="w-1/2 md:w-auto"
          />
        </div>
        <div className="flex flex-col items-center text-center md:text-left md:items-start absolute right-20 bottom-12 lg:right-20 lg:bottom-12 md:right-4 md:bottom-[20%]">
          <p className="text-[#605F5F] text-lg mb-4 md:hidden lg:block block">
            Boost your productivity with the BHIVE Workspace app.
            <br />
            Elevate your workspace, collaborate efficiently,
            <br />
            and unlock exclusive perks.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="inline-block store-icon">
              <GooglePlaySVG />
            </a>
            <a href="#" className="inline-block">
              <AppleStoreSVG />
            </a>
          </div>
        </div>
      </div>
      <p className="text-secondaryText text-center text-body text-[#DDDDDD] bg-[#222E34]">
        {" "}
        &copy; Copyright 2024. Bhive Private Limited
      </p>
    </footer>
  );
};

export default Footer;
