import { constantPlaygrounds, constantSkills } from "@/constants/constants";
import { useGlobalData } from "@/context/DataContext";

import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

const playgroundItems = [
  {
    id: 1,
    title: "Plyaground title",
    skills: "HTML/CSS",
    time: "1",
    author: {
      name: "Adam",
      image: "",
    },
  },
  {
    id: 2,
    title: "Plyaground title",
    skills: "HTML/CSS",
    time: "2",
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
      {/* heading and more */}

      <div className="mt-4 w-full ">
        <div className="text-xl font-bold  flex justify-between ">
          Playgrounds
          <a className=" text-sm text-indigo-500 " href="/">
            Create new Playground
          </a>
        </div>
      </div>

      {/* playgrounds */}

      <div className=" flex flex-wrap mt-4 text-sm font-normal gap-5  w-full">
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
  return (
    <div className=" w-[calc(50%-0.7rem)]">
      <div className=" relative flex p-3 bg-gray-50 border rounded-lg ">
        <Image
          alt="html icon"
          src={constantPlaygrounds[skills]}
          width={50}
          height={50}
          className="object-contain absolute top-3 left-2 "
        />
        <div className="ml-14">
          <p className="font-bold text-lg">{title}</p>

          <p className=" flex  text-gray-400 gap-4 items-center text-sm my-2">
            <span> {skills}</span>
            <span className=" flex w-1 bg-gray-600 rounded-full h-1"></span>
            <span className=" flex text-gray-400">{time} min ago</span>
          </p>

          <div className=" text-xs text-gray-400 ">
            <p className="flex items-center gap-1">
              <RxAvatar size={35} />
              <span className="font-bold"> {author.name}</span>,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
