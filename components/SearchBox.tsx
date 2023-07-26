/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useGlobalData } from "@/context/DataContext";
import ProfileDropDown from "./ProfileDropDown";

type profile = {
  imgSrc?: string;
};

type UserData = {
  profile?: {
    imgSrc?: string;
  };
};

type globalData = {
  data: UserData;
  handleChange: (value: UserData) => void;
};

function SearchBox() {
  const { data, status } = useSession({ required: false });
  const imageSrc = data?.user?.image ?? "";
  const { data: globalData } = useGlobalData();
  const globalUserImage = globalData.profile?.imgSrc;

  return (
    <div className="pl-5 pt-5 relative flex items-center gap-20">
      <div className="flex items-center">
        <div className="relative flex items-center">
          <input
            type="text"
            className="pl-10 pr-3 py-2 caret-black text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Image
              alt="search icon"
              src="/assets/searchIcon.png"
              width={20}
              height={20}
            />
          </div>
          <div className="absolute w-[30%] h-8 overflow-hidden right-1 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg flex justify-center items-center ">
            <select
              className="py-2 pl-2 pr-1 text-gray-400 border-none rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-100 text-xs"
              name="courses"
            >
              <option value="text">Courses</option>
              <option value="text">React</option>
              <option value="text">React</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 object-contain ">
        <div className="flex items-center  ">
          {/* lightning */}
          <Image
            alt="search icon"
            src="/assets/LightningFrame.svg"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* //Bell icon */}
        <Image
          alt="search icon"
          src="/assets/bell.svg"
          width={30}
          height={30}
          className="object-contain"
        />

        <div className="relative">
          <ProfileDropDown
            imgSrc={globalUserImage || imageSrc || "https://shorturl.at/swEGK"}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
