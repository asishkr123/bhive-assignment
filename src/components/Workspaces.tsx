import React from "react";
import { Workspace as WorkspaceType } from "../types";
import Workspace from "./Workspace";
import { useMobileView } from "../hooks/useMobileView";

interface WorkspacesProps {
  workspaces: WorkspaceType[];
}

const Workspaces: React.FC<WorkspacesProps> = ({ workspaces }) => {
  const isMobile = useMobileView();
  return (
    <section className="md:px-12 xl:mx-20 px-8 xl:p-0 ">
      <h2 className="md:text-[36px] text-2xl font-bold text-[#263238] mb-4">
        {isMobile ? "Our Spaces" : "Our Space Overview"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {workspaces.map((workspace: WorkspaceType) => (
          <Workspace key={workspace.id} workspace={workspace} />
        ))}
      </div>
    </section>
  );
};

export default Workspaces;
