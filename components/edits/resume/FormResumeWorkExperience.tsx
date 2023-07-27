"use client";

import React, { useRef, useState } from "react";
import CustomModal from "../CustomModal";
import { WorkExperienceCard } from "@/components/profile/resume/WorkExperience";
import EmptySection from "@/components/EmptySection";
import EditHoc from "../EditHoc";
import { toast } from "react-toastify";
import { Experience } from "@/context/DataContext";

type Props = {
  experiences: Experience[];
  setExperiences: (val: Experience[]) => void;
  setIsDirty: (val: boolean) => void;
};

function FormResumeWorkExperience({
  experiences,
  setExperiences,
  setIsDirty,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState<{
    value: boolean;
    index: number | null;
  }>({
    value: false,
    index: null,
  });
  const [inputs, setInputs] = useState<Experience>({} as Experience);

  const handleSubmit = () => {
    if (Object.values(inputs).length < 8) {
      toast.warn("Please fill all the fields");
      return;
    }
    setExperiences([...experiences, inputs]);
    setIsOpen(false);
    setInputs({} as Experience);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setIsDirty(true);
  };

  const handleEditClick = (index: number, val: Experience) => {
    setIsEditMode({
      value: true,
      index,
    });
    setIsDirty(true);
    setInputs({ ...val });
    setIsOpen(true);
  };

  const handleEdit = () => {
    const newValues = [...experiences];
    newValues.splice(isEditMode.index as number, 1, inputs);
    setExperiences(newValues);
    setIsOpen(false);
    setInputs({} as Experience);
    setIsEditMode({
      value: false,
      index: null,
    });
  };

  const handleDelete = (index: number) => {
    setIsDirty(true);
    const newValues = [...experiences];
    newValues.splice(index, 1);
    setExperiences(newValues);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl mb-4">Work Experience</div>
        <button onClick={handleOpen} className="text-gray-400">
          Add
        </button>
      </div>

      <CustomModal
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        isEditMode={isEditMode.value}
        handleEdit={handleEdit}
      >
        <>
          <div className="mb-5 ">
            <input
              type="url"
              placeholder="Company logo url"
              name="companyIcon"
              value={inputs.companyIcon}
              onChange={handleChange}
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="designation"
              value={inputs.designation}
              onChange={handleChange}
              placeholder="Designation / Job title"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>

          <div className="mb-5 ">
            <input
              type="text"
              name="workLocation"
              value={inputs.workLocation}
              onChange={handleChange}
              placeholder=" Work Location"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="companyName"
              value={inputs.companyName}
              onChange={handleChange}
              placeholder="Company name"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <label className="text-gray-400"> Working From</label>
            <input
              type="Date"
              name="workingFrom"
              value={inputs.workingFrom}
              onChange={handleChange}
              placeholder="Working from  example:May 2019"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <label className="text-gray-400"> Worked till</label>
            <input
              name="till"
              value={inputs.till}
              onChange={handleChange}
              type="date"
              placeholder=" working Till"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="jobDescription"
              value={inputs.jobDescription}
              onChange={handleChange}
              placeholder=" Description"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="jobResponsibilities"
              value={inputs.jobResponsibilities}
              onChange={handleChange}
              placeholder=" Responsibilites"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
        </>
      </CustomModal>

      {experiences?.length > 0 ? (
        experiences?.map((experience: Experience, index: number) => {
          return (
            <EditHoc
              handleDeleteClick={() => handleDelete(index)}
              handleClick={() => handleEditClick(index, experience)}
              key={index}
            >
              <WorkExperienceCard {...experience} />
            </EditHoc>
          );
        })
      ) : (
        <EmptySection title="Work Experience" />
      )}
    </div>
  );
}

export default FormResumeWorkExperience;
