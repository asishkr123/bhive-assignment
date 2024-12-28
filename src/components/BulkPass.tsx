import ArrowSVG from "../assets/arrow.svg?react";

interface BulkPassProps {
  passType: string;
  discountedPrice?: number;
  days?: number;
  discountPercentage?: number;
}

const BulkPassCard: React.FC<BulkPassProps> = ({
  passType,
  discountedPrice,
  days,
  discountPercentage,
}): JSX.Element => {
  return (
    <div className="md:w-[50%] w-[45%] lg:p-[12px] p-[6px] sm:p-[6px] md:p-2 border border-[#FFC422] rounded-lg flex items-center justify-between relative bg-[#FFCF4B]">
      {discountPercentage && (
        <div className="absolute -top-[8px] md:left-[25%] left-[25%] text-[8px] md:text-xs bg-[#263238] text-white p-[2.5px] rounded">
          {discountPercentage}% Discount
        </div>
      )}
      <div>
        <p className="text-sm  text-gray-700 font-medium	color-[#514D2D]">
          {passType}
        </p>
        <div className="text-[#263238]">
          <span className="text-md font-bold "> ₹{discountedPrice}</span>
          {days && <span className="text-xs font-normal">/{days} Days</span>}
        </div>
      </div>
      <div>
        <span className="flex">
          <ArrowSVG className="opacity-40" />{" "}
          <ArrowSVG className="opacity-60" /> <ArrowSVG />{" "}
        </span>
      </div>
    </div>
  );
};

export default BulkPassCard;
