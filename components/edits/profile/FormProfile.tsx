/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import FormSectionVisibility from "./FormSectionVisibility";
import { Profile, Visibility, useGlobalData } from "@/context/DataContext";
import CustomModal from "../CustomModal";
import { useSession } from "next-auth/react";

function FormProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const { data: globalData, handleChange: handleGlobalChange } =
    useGlobalData();

  const { data: session } = useSession();

  const [inputs, setInputs] = useState<Profile>(() => {
    return globalData?.profile || {};
  });

  const [visibility, setVisibility] = useState<Visibility>(() => {
    return globalData?.profile?.visibility || {};
  });

  const [isDirty, setIsDirty] = useState(false);

  const handleSubmit = () => {
    if (!isDirty) return;

    const newData = {
      ...globalData,
      profile: {
        ...inputs,
        visibility,
      },
    };

    handleGlobalChange(newData);
    setIsDirty(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIsDirty(true);

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleVisibilityChange = (val: Visibility) => {
    setIsDirty(true);
    setVisibility(val);
  };

  const handleUrlSubmit = () => {
    if (tempImgSrc) {
      setInputs((prevInputs: Profile) => ({
        ...prevInputs,
        imgSrc: tempImgSrc,
      }));
      setIsDirty(true);
    }
    setIsModalOpen(false);
    setTempImgSrc("");
  };

  return (
    <div className="mt-10  w-full ">
      <div className="flex gap-5 items-center">
        {/* model for input url */}
        <CustomModal
          isOpen={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          handleSubmit={handleUrlSubmit}
        >
          <input
            type="url"
            placeholder="Enter image URL"
            value={tempImgSrc}
            onChange={(e) => setTempImgSrc(e.target.value)}
            className="border  w-full rounded-lg p-2 bg-white-50"
          />
        </CustomModal>

        <img
          alt="img"
          src={
            inputs.imgSrc || session?.user?.image || "https://shorturl.at/swEGK"
          }
          width={50}
          height={50}
          className="object-contain -mt-3 rounded-3xl"
        />

        <button
          className="bg-indigo-600 h-10 px-2 py[-2] border rounded-lg text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Upload new photo
        </button>

        <button
          onClick={() => {
            setInputs((prevInputs: Profile) => ({
              ...prevInputs,
              imgSrc: "",
            }));
            setIsDirty(true);
          }}
        >
          Delete
        </button>
      </div>

      <div className="mb-5 ">
        <label className="font-bold text-sm ">Display Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          className="border  w-full rounded-lg p-2 bg-white-50"
        />
        <label className="text-xs text-gray-800 ">
          Name entered above will be used for all issued certificates
        </label>
      </div>

      <div className="mb-5 ">
        <label className="font-bold text-sm ">Profession</label>
        <input
          type="text"
          name="profession"
          placeholder="ex:Frontend Developer"
          value={inputs.profession}
          onChange={handleChange}
          className="border  w-full rounded-lg p-2 bg-white-50"
        />
      </div>
      <div className="mb-5 ">
        <label className="font-bold text-sm ">Location</label>
        <input
          type="text"
          name="location"
          placeholder="ex. Delhi, India"
          value={inputs.location}
          onChange={handleChange}
          className="border  w-full rounded-lg p-2 bg-white-50"
        />
      </div>

      <div className="mb-5 ">
        <label className="font-bold text-sm ">Date of birth</label>
        <input
          type="date"
          name="dob"
          value={inputs.dob}
          onChange={handleChange}
          placeholder="dd"
          className="border  w-full rounded-lg p-2 bg-white-50"
        />
      </div>

      <div className="mb-5">
        <label className="font-bold text-sm">Gender</label>
        <select
          name="gender"
          value={inputs.gender}
          onChange={handleChange}
          className="border w-full rounded-lg p-2 bg-white-50"
          defaultValue="" // Set the default value to an empty string so no option is pre-selected
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <FormSectionVisibility
        visibility={visibility}
        setVisibility={handleVisibilityChange}
      />
      <div className="mt-6 flex justify-end ">
        <div className="flex gap-2">
          <button className="bg-gray-100 px-2 py-1 border rounded-lg text-black">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isDirty}
            className={` px-2 py-1  border rounded-lg text-white ${
              isDirty
                ? "bg-indigo-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormProfile;
