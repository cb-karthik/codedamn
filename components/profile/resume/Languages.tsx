import Image from "next/image";
import React from "react";
import { useGlobalData } from "@/context/DataContext";
const LanguagesItems = [
  {
    id: 1,
    name: "English",
    icon:"/assets/language/eng.svg",
  },
  {
      id: 2,
      name: "Mandarin",
      icon:"/assets/language/taiw.svg",
    },
    {
      id: 3,
      name: "Java script",
      icon:"/assets/language/cn.svg",
    },]
function Languages () {
  const { data: globalData } = useGlobalData();
  const languagesData = globalData?.resume?.languages || LanguagesItems;
  return (
    <div className="mt-8 w-full mb-4">
      <div className=" text-xl font-bold mb-4 ">Languages</div>


      <div className="flex flex-wrap  gap-6 pt- text-black">
      {languagesData.map(( languagesData, icon ) => (
        <div
          key={languagesData}
          className=" flex items-center font-bold px-2 py-[6px] w-fit border rounded-md bg-gray-50 text-l gap-1 "
        >
            {/* <Image
          alt=" icon"
          src={icon}
          width={20}
          height={20}
          className="object-contain  "
        /> */}
          {languagesData}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Languages