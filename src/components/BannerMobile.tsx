import React from "react";
const BannerMobile: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center text-center bg-white px-4 py-8">
      <img
        src="images/mobilelanding.png"
        alt="Host meeting illustration"
        className="w-3/4 h-auto mb-4"
      />
      <h1 className="text-h4 text-primaryText font-bold mb-4">
        Host your meeting with world-class amenities. Starting at{" "}
        <span className="text-yellow-500">₹199/-!</span>
      </h1>
    </div>
  );
};

export default BannerMobile;
