import { useGlobalData } from "@/context/DataContext";
const skills = ["HTML", "CSS", "Javascript", "React js"];

function ProfileSkills() {
  const { data: globalData } = useGlobalData();

  const profileSkills = globalData?.resume?.techskills || skills;

  return (
    <div className="flex flex-wrap  gap-4 pt-2 text-black ">
      {profileSkills.map((name) => (
        <div
          key={name}
          className=" px-2 py-[2px] w-fit border rounded-md bg-gray-300 text-xs "
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default ProfileSkills;
