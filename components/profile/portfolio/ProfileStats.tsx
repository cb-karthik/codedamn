import Image from "next/image";

function ProfileStats() {
  const statIcons = [
    {
      id: 1,
      icon: "/assets/Lightning.svg",
      title: "2",
      description: "Longest streak",
    },
    {
      id: 2,
      icon: "/assets/StarFour.svg",
      title: "1200",
      description: "Experience points",
    },
    {
      id: 3,
      icon: "/assets/cup.svg",
      title: "Novice",
      description: "Current league",
    },
    {
      id: 4,
      icon: "/assets/Heartbeat.svg",
      title: "120",
      description: "Karma points",
    },
  ];

  return (
    <div className="mt-4 text-xl font-bold ">
      Stats
      <div className=" flex flex-wrap text-sm font-normal gap-5">
        {statIcons.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className=" flex p-3 bg-gray-50 border rounded-lg  w-[calc(50%-0.7rem)]"
          >
            <Image
              alt="search icon"
              src={icon}
              width={50}
              height={50}
              className="object-contain  "
            />
            <div className=" ">
              <p className="font-bold">{title}</p>
              <p className=" text-gray-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileStats;
