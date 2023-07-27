/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { type } from "os";
import React from "react";
import { useGlobalData } from "@/context/DataContext";

const educationItems = [
  {
    id: 1,
    institutionIcon: "/assets/harvard.png",
    institutionName: "Harvard University",
    location: "Cambridge, GA",
    courseName: "Computer Science (BSc)",
    degreeName: "Bachelor degree",
    details: "bvfbffsdgv",
    studiedFrom: "May 2021",
    till: "Present",
  },
  {
    id: 2,
    institutionIcon: "/assets/harvard2.png",
    location: "Atlanta, GA",
    institutionName: "Mister BIM High School.",
    studiedFrom: "July 2020",
    till: "May 2021",
    courseName: "",
    degreeName: "",
    details: "",
  },
];


function Education() {
  const { data: globalData } = useGlobalData();
  const educationData =
    globalData?.resume?.educations.length > 0
      ? globalData?.resume?.educations
      : educationItems;
  return (
    <div className="mt-4 w-full">
      <div className=" text-xl font-bold ">Education</div>

      {educationData.map((educations,index) => (
        <EducationCard key={index} {...educations} />
      ))}
    </div>
  );
}

export default Education;

// ----------------------------------------------------------------------
type CardProps = {
  institutionIcon: string;
  institutionName: string;
  location: string;
  courseName: string;
  degreeName: string;
  details: string;
  studiedFrom: string;
  till: string;
};
export const EducationCard = ({
  institutionIcon,
  location,
  institutionName,
  studiedFrom,
  till,
  courseName,
  details,
  degreeName,
}: CardProps) => {
  return (
    <div className=" flex relative bg-gray-50 px-8 py-5  border rounded-lg mt-4 ">
      <img
        alt="Insitution icon"
        src={institutionIcon}
        width={40}
        height={40}
        className="object-contain  absolute top-3 left-3"
      />
      <div className="ml-10 ">
        <h1 className=" flex font-bold text-lg -mt-2"> {institutionName}</h1>

        <span className=" absolute right-2 top-13 ">
          {studiedFrom} to {till}
        </span>

        <div className="text-l text-black flex  items-center gap-2 mt-2">
          <span>{location}</span>

          <div className="flex items-center">
            <span className=" flex w-1 bg-gray-600 rounded-full h-1 mr-2"></span>{" "}
            <span>{degreeName}</span> <span>, {courseName}</span>
          </div>
        </div>

        <p className=" flex-none mt-6 text-sm text-gray-500">{details}</p>
      </div>
    </div>
  );
};
