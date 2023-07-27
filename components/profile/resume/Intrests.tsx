import { useGlobalData } from "@/context/DataContext";


const intrestItems = [
  {
    id: 1,
    name: "Semantic",
  },
  {
    id: 2,
    name: "Ted Talks",
  },
  {
    id: 3,
    name: "Udemy",
  },
  {
    id: 4,
    name: "Behavioral",
  },
  {
    id: 5,
    name: "Economics",
  },
  {
      id: 6,
      name: "Hinking",
    },
 
];
function Intrests (){
  const { data: globalData } = useGlobalData();
  const intrestsData = globalData?.resume?.interest || intrestItems;
  return (

    <div className="mt-8 w-full">
      <div className=" text-xl font-bold mb-2">Intrests</div>
    <div className="flex flex-wrap  gap-6 pt-2 text-black mb-2 ">
      
      {intrestsData.map(( intrestsData ) => (
        <div
          key={intrestsData}
          className=" px-2 py-[2px] w-fit border rounded-md bg-gray-100 text-l font-bold "
        >
          {intrestsData}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Intrests