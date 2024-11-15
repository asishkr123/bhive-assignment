import React from "react";

export const Banner: React.FC = (): JSX.Element => {
  return (
    <div className="relative flex items-center h-96 bg-gray-100">
      <img
        src="/images/landing.png"
        alt="Host meeting illustration"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 leading-[3rem] md:leading-[3rem] lg:leading-[4rem] flex items-center w-full xl:p-0 px-12 xl:mx-20 text-left">
        <div className="max-w-lg lg:max-w-2xl xl:max-w-3xl flex-1 xl:mr-8">
          <h2 className="text-h2 xl:text-h1 text-primaryText font-bold mb-4">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-yellow-500">₹199/-!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
