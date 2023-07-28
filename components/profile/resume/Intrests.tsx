import { useGlobalData } from "@/context/DataContext";

const intrestItems = [
  "Semantic",
  "Ted Talks",
  "Udemy",
  "Behavioral",
  "Economics",
  "Hinking",
];
function Intrests() {
  const { data: globalData } = useGlobalData();
  const intrestsData = globalData?.resume?.interest || intrestItems;
  return (
    <div className="mt-8 w-full">
      <div className=" text-xl font-bold mb-2">Intrests</div>
      <div className="flex flex-wrap  gap-6 pt-2 text-black mb-2 ">
        {intrestsData.map((interest) => (
          <div
            key={interest}
            className=" px-2 py-[2px] w-fit border rounded-md bg-gray-100 text-l font-bold "
          >
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intrests;
