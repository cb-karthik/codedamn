import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { AiFillBehanceSquare } from "react-icons/ai";

import Image from "next/image";
import { useGlobalData } from "@/context/DataContext";

function ProfileSocialIcons() {
  const { data } = useGlobalData();

  if (!data || !data.socials) {
    return <div>Add Social Links to view</div>;
  }

  return (
    <div className="flex justify-between mt-5 items-center">
      <div className="text-xl w-fit rounded-md flex item-center gap-6">
        {data.socials.mail && (
          <a href={`mailto:${data.socials.mail}`} target="_blank" rel="noreferrer">
            <FcGoogle className="border border-gray-200 rounded-md" />
          </a>
        )}
        {data.socials.linkedIn && (
          <a href={data.socials.linkedIn} target="_blank" rel="noreferrer">
            <BsLinkedin className="text-blue-700 border border-gray-200 rounded-md" />
          </a>
        )}
        {data.socials.github && (
          <a href={data.socials.github} target="_blank" rel="noreferrer">
            <BsGithub className="border border-gray-200 rounded-md" />
          </a>
        )}
        {data.socials.dribble && (
          <a href={data.socials.dribble} target="_blank" rel="noreferrer">
            <PiDribbbleLogoFill className="text-pink-600 border border-gray-200 rounded-md" />
          </a>
        )}
        {data.socials.behance && (
          <a href={data.socials.behance} target="_blank" rel="noreferrer">
            <AiFillBehanceSquare className="text-blue-600 border border-gray-200 rounded-md" />
          </a>
        )}
        {data.socials.instagram && (
          <a href={data.socials.instagram} target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-600 border border-gray-200 rounded-md" />
          </a>
        )}
        {data.socials.facebook && (
          <a href={data.socials.facebook} target="_blank" rel="noreferrer">
            <BsFacebook className="text-blue-500 border border-gray-200 rounded-md" />
          </a>
        )}
        {data.socials.youtube && (
          <a href={data.socials.youtube} target="_blank" rel="noreferrer">
            <BsYoutube className="text-red-600 border border-gray-200 rounded-md" />
          </a>
        )}
      </div>
      <div className="flex gap-2">
        <Image
          alt="copy icon"
          src="/assets/copy.png"
          width={20}
          height={20}
          className="object-contain"
        />
        <button className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg text-xs">
          Contact
        </button>
      </div>
    </div>
  );
}


export default ProfileSocialIcons;
