/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import ProfileSkills from "./profilecard/ProfileSkills";
import ProfileSocialIcons from "./profilecard/ProfileSocialIcons";
import { useGlobalData } from "@/context/DataContext";
import ProfileOptions from "./ProfileOptions";
import { useSession } from "next-auth/react";
import WelcomeModal from "../WelcomeModel";

function Profile() {
  const [isVisible, setIsVisible] = useState(() => {
    const isCancelled = localStorage.getItem("isWelcomeCancelled");
    if (isCancelled) return false;
    return true;
  });

  const { data, status } = useSession({ required: false });
  const imageSrc = data?.user?.image ?? "";
  const { data: globalData } = useGlobalData();
  const globalUserImage = globalData?.profile?.imgSrc;
  const name = globalData?.profile?.name || data?.user?.name || "John Doe";
  const profession = globalData?.profile?.profession || "Frontend Developer";
  const location = globalData?.profile?.location || "Bengaluru, India";

  return (
    <div className="overflow-hidden h-fit w-full max-w-[55rem] relative p-5 ">
      <div className="relative border-spacing-16 rounded-2xl ">
        <div className="w-full z-[-1] h-32 bg-gradient-to-r from-cyan-500  via-indigo-500 to-indigo-600 border rounded-t-lg sticky">
          <div className="absolute top-5 right-3 flex gap-1 ">
            {/* <div className=" flex text-white text-2xl items-center border bg-gray-200 bg-opacity-40 rounded-md p-1">
              <BiEdit />
             <button className="text-xs text-white">Edit cover</button>
           
            </div> */}
          </div>
        </div>

        <div className="h-fit border-x-[1px] rounded-b-lg border-b-[1px] border-gray-200 flex  ">
          <div className="text-green-800 -mt-16 z-0 pl-2  ">
            <img
              alt="search icon"
              src={globalUserImage || imageSrc || "https://shorturl.at/swEGK"}
              width={300}
              height={100}
              className="object-contain -mt-3 rounded-full"
            />
          </div>

          <div className=" w-full h-full flex flex-col  text-black p-5 ">
            <div>
              <p className="flex items-center font-bold text-2xl mb-4 ">
                {name}
                <span className="text-sm  bg-lime-400 border rounded-md ml-5 px-2">
                  Pro
                </span>
                <span className="text-sm  bg-slate-200 border rounded-md text-slate-800 ml-5 px-2">
                  Looking for job
                </span>
              </p>
              <p className="text-gray-500 text-sm mb-1">{profession}</p>
              <p className="flex  items-center text-gray-400 text-sm mb-1 ">
                <CiLocationOn /> {location}
              </p>
              <ProfileSkills />
              <div className="mt-5 h-px bg-gray-300"></div>
              <ProfileSocialIcons />
            </div>
          </div>
        </div>
      </div>
      <ProfileOptions />
      <WelcomeModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}

export default Profile;
