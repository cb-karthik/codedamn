import { constantSkills } from "@/constants/constants";
import Image from "next/image";
import { useGlobalData } from "@/context/DataContext";

const skillsItems = [
  "HTML",

  "CSS",

  "Javascript",

  "React",

  "NextJs",

  "Mongodb",

  "Node",

  "Python",

  "Java",
];
function TechSkills() {
  const { data: globalData } = useGlobalData();

  const techSkillData = globalData?.resume?.techskills || skillsItems;

  return (
    <div className="mt-8 w-full">
      <div className=" text-xl font-bold mb-2">Tech skills</div>

      <div className="flex flex-wrap gap-5 pt-2 text-black">
        {techSkillData.map((techSkillData,index) => (
          <TechSkillCard key={index} name={techSkillData} />
        ))}
      </div>
    </div>
  );
}

export default TechSkills;

// -------------------------------------------
type CardProps = {
  name: string;
};

export const TechSkillCard = ({ name }: CardProps) => {
  return (
    <div className=" flex items-center font-bold px-2 py-[6px] w-fit border rounded-md bg-gray-100 text-l gap-1 ">
      <Image
        alt="icon"
        src={constantSkills[name]}
        width={20}
        height={20}
        className="object-contain  "
      />
      {name}
    </div>
  );
};
