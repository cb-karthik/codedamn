import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { AiFillBehanceSquare } from "react-icons/ai";

import Image from "next/image";

function ProfileSocialIcons() {
  return (
    <div className="flex justify-between mt-5 items-center">
      <div className="text-xl  w-fit  rounded-md flex item-center gap-6">
        <FcGoogle className="border border-gray-200  rounded-md" />
        <BsLinkedin className="text-blue-700 border border-gray-200 rounded-md" />
        <BsGithub className="border border-gray-200  rounded-md" />
        <PiDribbbleLogoFill className="text-pink-600 border border-gray-200 rounded-md" />
        <AiFillBehanceSquare className="text-blue-600 border border-gray-200 rounded-md" />
        <FaInstagram className="text-pink-600 border border-gray-200 rounded-md" />
        <BsFacebook className="text-blue-500 border border-gray-200 rounded-md" />            
        <BsYoutube className="text-red-600 border border-gray-200 rounded-md" />
      </div>
      <div className=" flex gap-2 ">
        <Image
          alt="search icon"
          src="/assets/copy.png"
          width={20}
          height={20}
          className="object-contain  "
        />
        <button className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg text-xs">
          Contact
        </button>
      </div>
    </div>
  );
}

export default ProfileSocialIcons;
