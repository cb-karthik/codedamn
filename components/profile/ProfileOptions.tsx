import { useState } from "react";
import ProfileStats from "./portfolio/ProfileStats";
import ProfileProjects from "./portfolio/ProfileProjects";
import PlayGrounds from "./portfolio/PlayGrounds";
import Certificates from "./portfolio/Certificates";
import Resume from "./resume/Resume";

function ProfileOptions() {
  const [activeTab, setActiveTab] = useState("portfolio");
  const TabContent = () => {
    switch (activeTab) {
      case "portfolio":
        return (
          <>
            <ProfileStats />
            <ProfileProjects />
            <PlayGrounds />
            <Certificates />
          </>
        );
      case "resume":
        return (
          <>
            <ProfileStats />
            <Resume />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <div className="mt-4">
        <div className="flex py-2 px-6 items-stretch gap-6 rounded-lg border border-zink-200 text-sm ">
          <button 
            onClick={() => setActiveTab("portfolio")}
            className={`flex flex-initial border rounded-md px-2 py-1 ${activeTab === "portfolio" ? "text-violet-600 bg-violet-50" : "text-black bg-gray-200"}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => setActiveTab("resume")}
            className={`flex flex-initial border rounded-md px-2 py-1 ${activeTab === "resume" ? "text-violet-600 bg-violet-50" : "text-black bg-gray-200"}`}
          >
            Resume
          </button>
        </div>
      </div>
      <TabContent />
      </>

  );
}

export default ProfileOptions;
