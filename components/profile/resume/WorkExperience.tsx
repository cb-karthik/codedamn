/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { useGlobalData } from "@/context/DataContext";
import dayjs from "dayjs";

const workExperienceItems = [
  {
    id: 1,
    companyIcon: "/assets/Google.svg",
    designation: "Front-end developer at Google",
    workLocation: "London",
    companyName: "Google Inc.",
    workingFrom: "May 2021",
    till: "Present",
    jobDescription:
      "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress. ",
    jobResponsibilities: "Create an appealing design and turn it into a WordPress plugin",
  },
  {
    id: 2,
    companyIcon: "/assets/Facebook.svg",
    designation: "Junior Front-end  Developer at Meta",
    workLocation: "New York",
    companyName: "Meta Inc.",
    workingFrom: "July 2020",
    till: "May 2021",
    jobDescription:
      "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. ",

    jobResponsibilities:
      "Create an appealing design and turn it into a WordPress plugin. Manage all technical aspects of the CMS.Conducting website/application tests",
  },
];

function WorkExperience() {
  const { data: globalData } = useGlobalData();

  const workExperienceData =
    globalData?.resume?.experiences || workExperienceItems;

  return (
    <div className="mt-4 w-full">
      <div className=" flex justify-center text-xl font-bold ">
        Work Experience
      </div>

      {workExperienceData.map((experiences, index) => (
        <WorkExperienceCard key={index} {...experiences} />
      ))}
    </div>
  );
}

export default WorkExperience;

// ------------------------------------------------------

type CardProps = {
  companyIcon: string;
  designation: string;
  workLocation: string;
  companyName: string;
  workingFrom: string;
  till: string;
  jobDescription: string;
  jobResponsibilities: string;
};

export const WorkExperienceCard = ({
  companyIcon,
  companyName,
  designation,
  jobDescription,
  jobResponsibilities,
  till,
  workLocation,
  workingFrom,
}: CardProps) => {
  return (
    <div className=" flex relative bg-gray-50 p-4  border rounded-lg mt-4">
      <img
        alt="Company icon"
        src={companyIcon}
        width={40}
        height={40}
        className="object-contain  absolute top-2 left-2 border rounded-md"
      />
      <div className="ml-10 ">
        <h1 className=" flex font-bold text-lg -mt-2">{designation}</h1>

        <p className="text-sm text-gray-700 flex  items-center gap-2">
          <span>{workLocation}</span>
          <span className=" flex w-1 bg-gray-600 rounded-full h-1"></span>{" "}
          <span>{companyName}</span>{" "}
          <span className="font-bold absolute right-2 top-13 ">
            {dayjs(workingFrom).format("MMMM YYYY")}
            <span className="font-bold text-black "> to </span>{" "}
            {dayjs(till).format("MMMM YYYY")}
          </span>
        </p>

        <p className="mt-6 text-sm text-gray-500">{jobDescription}</p>

        <p className="font-bold mt-5 mb-2">Job Responsibilities:</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-start text-gray-500">
            <Image
              alt="Bullet icon"
              src="/assets/Frame 55.svg"
              width={15}
              height={15}
              className="object-contain "
            />
            <p className="ml-2">{jobResponsibilities}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
