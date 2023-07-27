"use client";

import React, { useState } from "react";
import CustomModal from "../CustomModal";
import { TechSkillCard } from "@/components/profile/resume/TechSkills";
import EmptySection from "@/components/EmptySection";

type Props = {
  techskills: string[];
  setTechSkills: (val: string[]) => void;
  setIsDirty: (val: boolean) => void;
};

function FormResumeTechSkills({
  techskills,
  setTechSkills,
  setIsDirty,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedSkill, setselectedSkill] = useState<string[]>([]);

  const handleSubmit = () => {
    setTechSkills([...techskills, ...selectedSkill]);
    setIsOpen(false);
    setselectedSkill([]);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedSkill([...selectedSkill, e.target.value]);
    setIsDirty(true);
  };

  const handleRemove = (index: number) => {
    const updatedSkill = selectedSkill.filter(
      (_: string, i: number) => i !== index
    );
    setselectedSkill(updatedSkill);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">Tech Skills</div>
        <button onClick={handleOpen} className="text-gray-400">
          Add
        </button>
      </div>

      <CustomModal
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      >
        <>
          <div className="mb-5">
            <select
              onChange={handleChange}
              className="border w-full rounded-lg p-2 bg-white-50"
              defaultValue="" // Set this to the default value (placeholder)
            >
              <option value="" disabled hidden>
                Add skills
              </option>
              <option value="Javascript">Javascript</option>
              <option value="ReactJs">ReactJs</option>
              <option value="NextJs">NextJs</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Mongo">Mongo</option>
              <option value="NodeJs">NodeJs</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <div className="flex gap-2 mt-3 text-sm  ">
            {selectedSkill.map((val: string, index: number) => (
              <div
                key={val}
                className="flex items-center border rounded-lg px-1 py-1 bg-blue-100 gap-2"
              >
                <p>{val}</p>
                <p
                  className="text-xs text-red-500 -mt-3 font-bold cursor-pointer "
                  onClick={() => handleRemove(index)}
                >
                  X
                </p>
              </div>
            ))}
          </div>
        </>
      </CustomModal>

      {techskills?.length > 0 ? (
        <div className="flex flex-wrap gap-5 pt-2 text-black">
          {techskills.map((skill: string) => (
            <TechSkillCard key={skill} name={skill} />
          ))}
        </div>
      ) : (
        <EmptySection title="Tech Skills" />
      )}
    </div>
  );
}

export default FormResumeTechSkills;
