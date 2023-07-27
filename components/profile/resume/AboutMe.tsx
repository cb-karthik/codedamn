import { useGlobalData } from "@/context/DataContext";
import React from "react";

const staticValue = `A self-driven, versatile, reliable, diligent individual who is calm
and cheerful with a team-minded approach to work and getting things
done.`;

function AboutMe() {
  const { data: globalData } = useGlobalData();

  const about = globalData?.resume?.about || staticValue;

  return (
    <div className="mt-4 w-full">
      <div className=" flex justify-center text-xl font-bold">About Me</div>
      <div className="bg-gray-50 p-4  border rounded-lg mt-4 text-black">
        <p className="mb-5">{about}</p>
      </div>
    </div>
  );
}

export default AboutMe;
