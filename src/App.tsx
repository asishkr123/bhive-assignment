// src/App.tsx

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { useMobileView } from "./hooks/useMobileView";
import BannerMobile from "./components/BannerMobile";
import { Footer as FooterMobile } from "./components/FooterMobile";
import FeaturesSection from "./components/Features";
import Workspaces from "./components/Workspaces";
import { useEffect } from "react";
import { isLoadingAtom, workspaceAtom } from "./atoms";
import { useAtom } from "jotai";
import WorkspaceData from "./data";
import WorkspaceSkeleton from "./components/WorkspaceSkeleton";

const App = () => {
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [workspaces, setWorkspaces] = useAtom(workspaceAtom);
  useEffect(() => {
    setIsLoading(true);
    // Simulate api call delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setWorkspaces(WorkspaceData);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const isMobile = useMobileView();
  return (
    <div className="bg-gray-50 flex justify-center">
      <div className="max-w-[1440px]">
        <Header />
        {isMobile ? <BannerMobile /> : <Banner />}
        <FeaturesSection />
        {isLoading ? (
          <WorkspaceSkeleton />
        ) : (
          <Workspaces workspaces={workspaces} />
        )}
        {isMobile ? <FooterMobile /> : <Footer />}
      </div>
    </div>
  );
};

export default App;
