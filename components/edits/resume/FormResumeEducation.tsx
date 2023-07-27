"use client";

import React, { useRef, useState } from "react";
import CustomModal from "../CustomModal";
import { EducationCard } from "@/components/profile/resume/Education";
import EmptySection from "@/components/EmptySection";
import { toast } from "react-toastify";
import EditHoc from "../EditHoc";
import { Education } from "@/context/DataContext";

type Props = {
  educations: Education[];
  setEducations: (val: Education[]) => void;
  setIsDirty: (val: boolean) => void;
};

function FormResumeEducation({ educations, setEducations, setIsDirty }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState<Education>({} as Education);

  const [isEditMode, setIsEditMode] = useState<{
    value: boolean;
    index: number | null;
  }>({
    value: false,
    index: null,
  });
  const handleSubmit = () => {
    if (Object.values(inputs).length < 8) {
      toast.warn("Please fill all the fields");
      return;
    }
    setEducations([...educations, inputs]);
    setIsOpen(false);
    setInputs({} as Education);
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

  const handleEditClick = (index: number, val: Education) => {
    setIsEditMode({
      value: true,
      index,
    });
    setIsDirty(true);
    setInputs({ ...val });
    setIsOpen(true);
  };

  const handleEdit = () => {
    const newValues = [...educations];
    newValues.splice(isEditMode.index as number, 1, inputs);
    setEducations(newValues);
    setIsOpen(false);
    setInputs({} as Education);
    setIsEditMode({
      value: false,
      index: null,
    });
  };

  const handleDelete = (index: number) => {
    setIsDirty(true);
    const newValues = [...educations];
    newValues.splice(index, 1);
    setEducations(newValues);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">Education</div>
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
              name="institutionIcon"
              value={inputs.institutionIcon}
              onChange={handleChange}
              placeholder="Institution logo url"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>

          <div className="mb-5 ">
            <input
              type="text"
              name="institutionName"
              value={inputs.institutionName}
              onChange={handleChange}
              placeholder="Institution Name"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="location"
              value={inputs.location}
              onChange={handleChange}
              placeholder="Institution Location /city name"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="degreeName"
              value={inputs.degreeName}
              onChange={handleChange}
              placeholder="Degree name ex:Bachelore degree"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="courseName"
              value={inputs.courseName}
              onChange={handleChange}
              placeholder="Course Name"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <label className="text-gray-400"> Studied From</label>
            <input
              type="date"
              name="studiedFrom"
              value={inputs.studiedFrom}
              onChange={handleChange}
              placeholder="Studied from ex: May 2020"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <label className="text-gray-400"> Studied till</label>
            <input
              type="date"
              name="till"
              value={inputs.till}
              onChange={handleChange}
              placeholder="Studied till ex:june 2021"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="details"
              value={inputs.details}
              onChange={handleChange}
              placeholder="Description"
              className="border  w-full rounded-lg p-2 bg-white-50"
            />
          </div>
        </>
      </CustomModal>

      {educations?.length > 0 ? (
        <div>
          {educations?.map((education: Education, index: number) => {
            return (
              <EditHoc
                handleDeleteClick={() => handleDelete(index)}
                handleClick={() => handleEditClick(index, education)}
                key={index}
              >
                <EducationCard key={index} {...education} />
              </EditHoc>
            );
          })}
        </div>
      ) : (
        <EmptySection title="Education" />
      )}
    </div>
  );
}

export default FormResumeEducation;
