"use client";

import React, { useRef, useState } from "react";
import CustomModal from "../CustomModal";
import EmptySection from "@/components/EmptySection";

type Props = {
  languages: string[];
  setLanguages: (val: string[]) => void;
  setIsDirty: (val: boolean) => void;
};

function FormResumeLanguages({ languages, setLanguages, setIsDirty }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState<string[]>([]);

  const handleSubmit = () => {
    setLanguages([...languages, ...inputs]);
    setIsOpen(false);
    setInputs([]);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs([e.target.value]);
    setIsDirty(true);
  };

  const handleRemove = (index: number) => {
    // Creating a new array without the element at the specified index
    const updatedLanguage = languages.filter(
      (_: string, i: number) => i !== index
    );
    setLanguages(updatedLanguage);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl mb-4">Languages </div>
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
          <div className="mb-5 ">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Mention Languages"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
        </>
      </CustomModal>
      {languages?.length > 0 ? (
        <div className="flex gap-2 mt-3 text-sm ">
          {languages.map((val: string, index: number) => (
            <div
              key={val}
              className="flex items-center border rounded-lg px-1 py-1 bg-blue-100 gap-2"
            >
              <p>{val}</p>
              <p
                className="text-xs text-red-500 -mt-3 font-bold cursor-pointer"
                onClick={() => handleRemove(index)}
              >
                X
              </p>
            </div>
          ))}
        </div>
      ) : (
        <EmptySection title="Languges" />
      )}
    </div>
  );
}

export default FormResumeLanguages;
