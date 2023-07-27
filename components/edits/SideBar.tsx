"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const sideBarItems = [
  {
    id: 1,
    name: "Profile",
    url: "profile",
  },
  {
    id: 2,
    name: "Socials",
    url: "socials",
  },
  {
    id: 3,
    name: "Portfolio",
    url: "portfolio",
  },
  {
    id: 4,
    name: "Resume",
    url: "resume",
  },
];

type Props = {
  activeTab: number;
  setActiveTab: (val: number) => void;
};

function SideBar({ activeTab, setActiveTab }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const tab = params.get("tab");

  useEffect(() => {
    if (!tab) return
    const tabId = sideBarItems.find((item) => item.url === tab)?.id as number;
    setActiveTab(tabId);
  }, [tab]);

  const handleClick = (id: number, url: string) => {
    setActiveTab(id);
    router.push(`/edit?tab=${url}`);
  };

  return (
    <div className="bg-gray-50 w-full h-fit py-5 border rounded-2xl sticky top-5">
      <div className="w-full flex  flex-wrap gap-5 ">
        {sideBarItems.map(({ id, name, url }) => (
          <div
            onClick={() => handleClick(id, url)}
            key={id}
            className={`items-center flex gap-1 w-full cursor-pointer rounded-md ${
              activeTab === id && "border-l-4 border-black"
            }`}
          >
            <Image
              alt="search icon"
              src="/assets/sidebar/icon.svg"
              width={25}
              height={25}
              className="object-contain ml-2 "
            />

            <div
              className={`ml-2 px-3 flex text-xl  ${
                activeTab === id ? "font-bold text-black" : "text-gray-500"
              } hover:text-black`}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
