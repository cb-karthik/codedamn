"use client";

import React, { ChangeEvent, useState, FC  } from "react";

type Props = {
  about: string;
  setAbout: (val: string) => void;
  setIsDirty: (val: boolean) => void;
};
const FromResumeAbout: FC<Props> = ({ about, setAbout, setIsDirty }) => { 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAbout(e.target.value);
    setIsDirty(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl mb-4">About</div>
      </div>

      <div className="mb-5 ">
        <input
          type="text"
          name="aboutMe"
          value={about}
          onChange={handleChange}
          placeholder="Write About You"
          className="border  w-full rounded-lg p-2 bg-white-50"
        />
      </div>
    </div>
  );
}

export default FromResumeAbout;
