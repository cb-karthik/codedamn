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
    image: "/assets/profileproject.png",
    name: "Personal Portfolio website",
    skill1: "HTML/CSS",
    skill2: "React",
  },
  {
    id: 2,
    image: "/assets/profileproject.png",
    name: "Personal Portfolio website",
    skill1: "HTML/CSS",
    skill2: "React",
  },
  {
    id: 3,
    image: "/assets/profileproject.png",
    name: "Personal Portfolio website",
    skill1: "HTML/CSS",
    skill2: "React",
  },
  {
    id: 4,
    image: "/assets/profileproject.png",
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
    <div className="mt-4 w-full ">
      <div className="text-xl font-bold  flex justify-between ">
        Projects
        <Link className=" text-sm text-indigo-500 " href="/edit?tab=portfolio">
          Create new project
        </Link>
      </div>

      <div className="flex flex-wrap w-full  gap-5  ">
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
    <div className="p-3 bg-gray-50 border rounded-lg w-[calc(50%-0.7rem)]">
      <img
        alt="project image"
        src={image}
        width={80}
        height={80}
        className="object-contain w-full"
      />

      {/* Project details */}
      <p className="text-black text-lg mt-2 font-bold">{name}</p>

      <div className="flex  gap-2  items-center mt-2">
        <Image
          alt="search icon"
          src="/assets/html.png"
          width={20}
          height={20}
          className="object-contain bg-black"
        />
        <p className="text-gray-400 text-sm  font-bold">{skill1}</p>

        <p className="w-1 bg-gray-600 rounded-full h-1"></p>
        <Image
          alt="search icon"
          src="/assets/react.png"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-gray-400 text-sm  font-bold">{skill2}</p>
      </div>
      {/* <span className=" flex text-gray-400">
              {dayjs(time).fromNow()}
            </span> */}
    </div>
  );
};
