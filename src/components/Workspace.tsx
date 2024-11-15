import { Workspace as WorkspaceType } from "../types";
import DirectionSVG from "../assets/direction.svg?react";
import DayPass from "./DayPass";
import BulkPass from "./BulkPass";

interface Workspace {
  workspace: WorkspaceType;
}

const Workspace: React.FC<Workspace> = ({ workspace }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <h1 className="font-bold text-[#263238] max-w-[50%]">
          {workspace.name}
        </h1>
        <a
          href={"#"}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-md bg-[#F9F9F9] h-[80px] flex flex-col justify-between items-center border-[0.5px] border-solid border-[#EEE7E7]"
        >
          <DirectionSVG />
          <div className="flex items-center text-center text-sm text-[#65624C] pt-2">
            <span>{"6 km"}</span>
          </div>
        </a>
      </div>
      <div className="mx-4 relative">
        <img
          src={workspace.images[0]}
          alt={workspace.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="absolute items-center text-[#FFBB00] rounded p-1 left-2 top-2 flex bg-gradient-to-r from-[#263238] via-[#2a414d] to-[#2f4b59]">
          <img src={workspace.icon} alt={workspace.name} className="mr-1" />
          <span>{workspace.type}</span>
        </div>
      </div>

      <div className="flex md:gap-4 sm:gap-2 gap-1 lg:p-4  sm:p-2 py-[8px] xs:p-1 justify-center items-center ">
        <DayPass price={workspace.day_pass_price} />
        <BulkPass
          passType="Bulk Pass"
          discountedPrice={2040}
          days={10}
          discountPercentage={20}
        />
      </div>
    </div>
  );
};

export default Workspace;
