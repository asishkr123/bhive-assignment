import React from "react";
import ArrowSVG from "../assets/arrow.svg?react";

interface DayPassProps {
  price?: number;
}

const DayPass: React.FC<DayPassProps> = ({ price }) => {
  return (
    <div className="md:w-[50%] w-[45%] p-[6px] sm:p-[6px] md:p-2 lg:p-4 bg-[#F9F9F9] border border-[#EEE7E7] rounded-lg flex items-center justify-between">
      <div>
        <p className="text-xs text-[#65624C]">{"Day Pass"}</p>
        <p className="text-lg font-bold text-[#263238]">
          ₹{`${price}`}
          {price && <span className="text-sm font-normal">/ Day</span>}
        </p>
      </div>
      <div>
        <span className="text-xl text-gray-700 flex">
          <ArrowSVG className="opacity-40" />{" "}
          <ArrowSVG className="opacity-60" /> <ArrowSVG />{" "}
        </span>
      </div>
    </div>
  );
};

export default DayPass;
