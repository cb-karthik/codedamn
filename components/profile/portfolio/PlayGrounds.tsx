/* eslint-disable @next/next/no-img-element */
import { constantPlaygrounds, constantSkills } from "@/constants/constants";
import { useGlobalData } from "@/context/DataContext";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSession } from "next-auth/react";
import Link from "next/link";

dayjs.extend(relativeTime);

const playgroundItems = [
  {
    id: 1,
    title: " HTML Plyaground ",
    skills: "HTML/CSS",
    time: "",
    author: {
      name: "Adam",
      image: "",
    },
  },
  {
    id: 2,
    title: "  React Plyaground ",
    skills: "ReactJs/Tailwind",
    time: "",
    author: {
      name: "Adam",
      image: "",
    },
  },
  {
    id: 3,
    title: " NodJs Plyaground ",
    skills: "NodeJs/Mongodb",
    time: "",
    author: {
      name: "Adam",
      image: "",
    },
  },
  {
    id: 4,
    title: " HTML Plyaground ",
    skills: "HTML/CSS",
    time: "",
    author: {
      name: "Adam",
      image: "",
    },
  },
];

function PlayGrounds() {
  const { data: globalData } = useGlobalData();

  const playgroundData =
    globalData?.portfolio?.playgrounds.length > 0
      ? globalData?.portfolio?.playgrounds
      : playgroundItems;

  return (
    <div className="mt-4 w-full">
      <div className="text-xl font-bold flex justify-between">
        Playgrounds
        <Link href="/edit?tab=portfolio"
         className="text-sm text-indigo-500">
            Create new Playground
         
        </Link>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-5 mt-4 text-sm font-normal">
        {playgroundData.map((play, index) => (
          <PlayGroundCard key={index} {...play} />
        ))}
      </div>
    </div>
  );
}

export default PlayGrounds;

// -------------------------------------------------------------------

export type CardProps = {
  title: string;
  skills: string;
  time: string;
  author: {
    name: string;
    image: string;
  };
};

export const PlayGroundCard = ({ title, skills, time, author }: CardProps) => {
  const { data: globalData } = useGlobalData();
  const globalUserImage = globalData?.profile?.imgSrc;
  const { data, status } = useSession({ required: false });
  const imageSrc = data?.user?.image ?? "";
  return (
    <div className="w-full sm:w-[calc(50%-0.7rem)]">
      <div className="relative flex p-3 bg-gray-50 border rounded-lg">
        <Image
          alt="html icon"
          src={constantPlaygrounds[skills]}
          width={50}
          height={50}
          className="object-contain absolute top-3 left-2"
        />
        <div className="ml-14">
          <p className="font-bold text-lg">{title}</p>
          <p className="flex text-gray-400 gap-4 items-center text-sm my-2">
            <span>{skills}</span>
            <span className="flex w-1 bg-gray-600 rounded-full h-1"></span>
            <span className="flex text-gray-400">{dayjs(time).fromNow()}</span>
          </p>
          <div className="text-xs text-gray-400">
            <p className="flex items-center gap-1">
              <img
                alt="search icon"
                src={
                  globalUserImage ||
                  imageSrc ||
                  "https://shorturl.at/swEGK"
                }
                width={30}
                height={30}
                className="object-contain mt-1 rounded-full"
              />
              <span className="font-bold">
                {globalData?.profile?.name || data?.user?.name || "John Doe"}
              </span>
              <span>and 2 others</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
