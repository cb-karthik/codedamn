import Image from "next/image";
import Link from "next/link";

function Certificates() {
  const certificateItems = [
    {
      id: 1,
      image: "/assets/javascript.svg",
      title: "Frontend master",
      date: "16th June 2021",
      link: "1",
    },
    {
      id: 2,
      image: "/assets/html-5.svg",
      title: "Advance theoretical java script",
      date: "13th July 2023",
      link: "1",
    },
    {
      id: 3,
      image: "/assets/achievments 1.svg",
      title: "Build Decentralized to-do app",
      date: "27th Jan 2023",
      link: "1",
    },
    {
      id: 4,
      image: "/assets/react.svg",
      title: "React JS",
      date: "03 Sep 2022 ",
      link: "1",
    },
  ];

  return (
    <div className="mt-4 w-full">
      <div className="text-xl font-bold flex justify-between">
        Certificates
        <Link href="/edit?tab=portfolio"
         className="text-sm text-indigo-500">
            Create new project
         
        </Link>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-5 mt-4 text-sm font-normal">
        {certificateItems.map(
          ({ id, title, image, date, link }) => (
            <div key={id} className="w-full sm:w-[calc(50%-0.7rem)]">
              <div className="p-3 bg-gray-50 border rounded-lg">
                <Image
                  alt="html icon"
                  src={image}
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="ml-2 mt-3 mb-2">
                  <p className="font-bold text-lg">{title}</p>

                  <p className="text-gray-400 items-center text-xs mb-3">
                    Issued on {date}
                  </p>
                  <a className="text-gray-400 font-bold text-sm" href="/">
                    See credentials
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Certificates;
