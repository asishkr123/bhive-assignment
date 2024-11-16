import { useMobileView } from "../hooks/useMobileView";

const WorkspaceSkeleton = () => {
  const isMobile = useMobileView();
  return (
    <section className="md:px-12 xl:mx-20 px-8 xl:p-0 ">
      <h2 className="text-[36px] font-bold text-gray-800 mb-4">
        {isMobile ? "Our Spaces" : "Our Space Overview"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 5 }).map(() => (
          <div
            key={Math.random()}
            className="bg-gray-200 h-[300px] animate-pulse rounded-lg"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default WorkspaceSkeleton;
