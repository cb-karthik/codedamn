function ProfileSkills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Javascript",
    },
    {
      id: 4,
      name: "React js",
    },
    {
      id: 5,
      name: "Next js",
    },
    {
      id: 6,
      name: "Tailwind",
    },
    {
      id: 7,
      name: "MongoDB",
    },
    {
      id: 8,
      name: "Node",
    },
  ];

  return (
    <div className="flex flex-wrap  gap-4 pt-2 text-black ">
      {skills.map(({ id, name }) => (
        <div
          key={id}
          className=" px-2 py-[2px] w-fit border rounded-md bg-gray-300 text-xs "
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default ProfileSkills;
