/* eslint-disable @next/next/no-img-element */
import { useGlobalData } from "@/context/DataContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const projectItems = [
  {
    id: 1,
    image: "/assets/profileproject.svg",
    name: "Personal Portfolio website",
    skill1: "HTML/CSS",
    skill2: "React",
  },
  {
    id: 2,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
    name: "Personal Portfolio website",
    skill1: "HTML/CSS",
    skill2: "React",
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/510855044/vector/thin-line-design-concept-for-project-website-banner.jpg?s=612x612&w=0&k=20&c=1XRLKpHtC62FePYb9wUmcZ1BOWxFTl7eGmmmXeUrRtI=",
    name: "Personal Portfolio website",
    skill1: "HTML/CSS",
    skill2: "React",
  },
  {
    id: 4,
    image: "https://www.projectmanager.com/wp-content/uploads/2022/09/Project-Portfolio-Management.png",
    name: "Personal Portfolio website",
    skill1: "HTML/CSS",
    skill2: "React",
  },
];

function ProfileProjects() {
  const { data: globalData } = useGlobalData();

  const projectData =
    globalData?.portfolio?.projects.length > 0
      ? globalData?.portfolio?.projects
      : projectItems;

  return (
    <div className="mt-4 w-full">
      <div className="text-xl font-bold  flex justify-between">
        Projects
        <Link href="/edit?tab=portfolio"
          className="text-sm text-indigo-500">
            Create new project 
         
        </Link>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-5">
        {projectData.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProfileProjects;

// --------------------------------------------------------------------------------

type CardProps = {
  image: string;
  name: string;
  skill1: string;
  skill2: string;
};

export const ProjectsCard = ({ image, name, skill1, skill2 }: CardProps) => {
  return (
    <div className="p-3 bg-gray-50 border rounded-lg w-full sm:w-[calc(50%-0.7rem)]">
      <img
        alt="project image"
        src={image}
        className="object-contain w-full"
      />

      {/* Project details */}
      <p className="text-black text-lg mt-2 font-bold">{name}</p>

      <div className="flex gap-2 items-center mt-2">
        <Image
          alt="html-5 icon"
          src="/assets/html-5.svg"
          width={20}
          height={20}
        />
        <p className="text-gray-400 text-sm font-bold">{skill1}</p>

        <p className="w-1 bg-gray-600 rounded-full h-1"></p>
        <Image
          alt="react icon"
          src="/assets/react.svg"
          width={20}
          height={20}
        />
        <p className="text-gray-400 text-sm font-bold">{skill2}</p>
      </div>
      {/* <span className=" flex text-gray-400">
              {dayjs(time).fromNow()}
            </span> */}
    </div>
  );
};
